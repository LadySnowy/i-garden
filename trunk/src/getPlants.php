<?php
include("dbconnect.php");
include 'JSONHelper.php';

$q = "SELECT id, name FROM plants";

echoquerytojson($q);

mysql_close($connection);		
		
?>
