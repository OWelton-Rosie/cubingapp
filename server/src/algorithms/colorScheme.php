<?php

$white = "#fff";
$yellow = "#ff0";
$blue = "#00f";
$green = "#0f0";
$orange = "#f70";
$red = "#f00";
$colorSchemes = [
    "white" => "* { --u-face: $yellow; --d-face: $white; --f-face: $blue; --b-face: $green; --l-face: $orange; --r-face: $red; }",
    "yellow" => "* { --u-face: $white; --d-face: $yellow; --f-face: $green; --b-face: $blue; --l-face: $orange; --r-face: $red; }",
    "green" => "* { --u-face: $blue; --d-face: $green; --f-face: $white; --b-face: $yellow; --l-face: $orange; --r-face: $red; }",
    "blue" => "* { --u-face: $green; --d-face: $blue; --f-face: $yellow; --b-face: $white; --l-face: $orange; --r-face: $red; }",
    "orange" => "* { --u-face: $red; --d-face: $orange; --f-face: $white; --b-face: $yellow; --l-face: $blue; --r-face: $green; }",
    "red" => "* { --u-face: $orange; --d-face: $red; --f-face: $white; --b-face: $yellow; --l-face: $green; --r-face: $blue; }",
];
$bottomColor = $_COOKIE["bottomColor"] ?? "white";
$colorScheme = $colorSchemes[$bottomColor];
echo "<style>$colorScheme</style>";
?>