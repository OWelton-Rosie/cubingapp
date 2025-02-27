<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="Who are the fastest cubers with your name?">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/favicon.svg" type="image/x-icon">
    <title>Name Ranks</title>
</head>

<script>
function q(selector) {
    return document.querySelector(selector);
}

function E(name, props, children) {
    const ele = document.createElement(name);
    for (const [key, value] of Object.entries(props)) {
        ele[key] = value;
    }

    children = children || [];
    for (const child of children) {
        ele.appendChild(child);
    }
    return ele;
}

function setUrlParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    if (value) urlParams.set(key, value);
    else urlParams.delete(key);
    window.location.search = urlParams.toString();
}
</script>

<body>
    <?php include_once "../php/menu.php"; ?>

    <main>
        <h1 style="text-align: center;">Name Ranks</h1>
        <p style="text-align: center; margin-top: 16px;">Who are the fastest cubers with your name?</p>
        <?php
            include_once "../php/option.php";
            include "../php/event_utils.php";

            $name = $_GET["name"];
            $event = $_GET["event"] ?? "333";
            $type = $_GET["type"] ?? "Single";
            $nameType = $_GET["nameType"] ?? "any"; // Options are first, last, any, advanced
            $page = $_GET["page"] ?? 1;
            $perPage = 20;
        ?>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 2rem;">
            <input id="name" type="string" placeholder="Name" value="<?php echo $name ?>" style="width: 100%; max-width: 300px;" />
            <select id="event" style="width: 100%; max-width: 300px;">
                <?php
                    foreach ($eventIdToName as $eventId => $eventName) {
                        echo createOption($eventId, $eventName, $event);
                    }
                ?>
            </select>
            <select id="type" style="width: 100%; max-width: 300px;">
                <?php
                    foreach (["Single", "Average"] as $t) {
                        echo createOption($t, $t, $type);
                    }
                ?>
            </select>
            <select id="nameType" style="width: 100%; max-width: 300px;">
                <?php
                    foreach([["first", "First name exact"], ["last", "Last name exact"], ["any", "Any name part"], ["advanced", "Advanced mode"]] as $element) {
                        echo createOption($element[0], $element[1], $nameType);
                    }
                ?>
            </select>
            <script>
                q("#name").addEventListener("change", (event) => setUrlParam("name", event.target.value));
                q("#event").addEventListener("change", (event) => setUrlParam("event", event.target.value));
                q("#type").addEventListener("change", (event) => setUrlParam("type", event.target.value));
                q("#nameType").addEventListener("change", (event) => setUrlParam("nameType", event.target.value));
            </script>
        </div>
        <div style="margin-top: 24px;"></div>
        <?php
        if ($name) {
            include_once "../php/wca_attribution.php";

            error_reporting(E_ALL);
            ini_set("display_errors", 1);
            $db = new SQLite3("/wca.db");

            if (!$db) {
                die("Error connecting to the database: " . $db->lastErrorMsg());
            }

            $query = "select personId, name, best
                from Ranks$type
                where (name like :name or name like :name1) and eventId = :event
                limit 1000;";

            if ($event === "Kinch") {
                $query = "select id as personId, name, worldKinch as best
                    from Persons
                    where name like :name or name like :name1
                    order by worldKinch desc
                    limit 1000;";
            } else if ($event === "Sum of Ranks") {
                $query = "select id as personId, name, worldSor$type as best
                from Persons
                where name like :name or name like :name1
                order by best asc
                limit 1000;";
            }

            $stmt = $db->prepare($query);
            if ($nameType === "first") {
                // Example: "Jon" matches "Jon Doe" but not "Jonathan Doe"
                $stmt->bindValue(":name", "$name %", SQLITE3_TEXT);
            } else if ($nameType === "last") {
                $stmt->bindValue(":name", "% $name", SQLITE3_TEXT);
            } else if ($nameType === "advanced") {
                $stmt->bindValue(":name", $name, SQLITE3_TEXT);
            } else {
                $stmt->bindValue(":name", "%$name%", SQLITE3_TEXT);
            }
            $stmt->bindValue(":name1", $name, SQLITE3_TEXT);
            $stmt->bindValue(":event", $event, SQLITE3_TEXT);

            $rows = $stmt->execute();

            echo "<div class='table-wrapper' style='margin: 1rem auto;'><table>";
            echo "<tr>
                <th>#</th>
                <th>Name</th>
                <th>Result</th>
            </tr>";

            $i = 1;
            while ($row = $rows->fetchArray(SQLITE3_ASSOC)) {
                $personId = $row["personId"];
                $name = $row["name"];
                $best = formatResult($event, $type, $row["best"]);

                echo "<tr>
                    <td>$i</td>
                    <td>
                        <a class='link' href='https://worldcubeassociation.org/persons/$personId'>$name</a>
                    </td>
                    <td>$best</td>
                </tr>";
                $i++;
            }

            $db->close();

            echo "</table></div>";
        }
        ?>
        <div class="info-div">
            <h2>Name type options:</h2>
            <ul>
                <li><b>First name exact:</b> Match if the first name is exactly the same. For example, "jon" matches "Jon Doe" but not "Jonathan Doe".</li>
                <li><b>Last name exact:</b> Match if the last name is exactly the same. For example, "smith" matches "Alice Smith" but not "Alice Smithson".</li>
                <li><b>Any name part:</b> Match if any part of the name is the same. For example, "son" matches "Jackson Brown".</li>
                <li><b>Advanced mode:</b> Use your own SQLite pattern! See <a class="link" href="https://www.sqlitetutorial.net/sqlite-like/">this tutorial</a> to learn how to use SQLite patterns.</li>
            </ul>
        </div>
        <div style="margin-top: 96px;"></div>
    </main>
</body>

<style>
    .table-wrapper {
        max-width: 100%;
        width: fit-content;
        overflow-x: auto;
    }

    table tr:nth-child(even) {
        background: var(--gray-900);
    }

    .info-div {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        gap: 16px;
        margin: 0 auto;
    }

    .info-div ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>

<?php include "../php/gtag.php" ?>

</html>
