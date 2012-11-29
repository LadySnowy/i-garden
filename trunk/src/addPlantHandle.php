<?php
include("dbconnect.php");

$id = $_GET["qn"];
$rn = $_GET["rid"];
$amount = $_GET["amount"];

$q = "INSERT INTO recipe_plant (recipe_id, plant_id, amount) VALUES ('".$rn."', '".$id."', '".$amount."')";

$result = mysql_query($q) or die('Query failed: ' . mysql_error());

header( 'Location: http://localhost/createRecipe.php');


?>
