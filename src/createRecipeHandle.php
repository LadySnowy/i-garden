<?php
include("dbconnect.php");

$rn = $_GET["name"];

$q = "INSERT INTO recipe (recipe) VALUES ('".$rn."')";

$result = mysql_query($q) or die('Query failed: ' . mysql_error());

header( 'Location: http://localhost/createRecipe.php');


?>
