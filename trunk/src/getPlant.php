<?php
include("dbconnect.php");
include 'JSONHelper.php';

$id = $_GET["id"];

$q = "SELECT * FROM plants WHERE id =". $id;

echoquerytojson($q);

mysql_close($connection);		
		
?>
