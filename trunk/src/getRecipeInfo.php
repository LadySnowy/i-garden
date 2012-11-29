<?php
include("dbconnect.php");
include 'JSONHelper.php';

$q = "SELECT * FROM recipe_plant JOIN recipe ON recipe_plant.recipe_id=recipe.recipe_id";

echoquerytojson($q);

mysql_close($connection);		
		
?>
