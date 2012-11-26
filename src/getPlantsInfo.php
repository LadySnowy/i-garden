<?php
include("dbconnect.php");
include 'JSONHelper.php';

$q = "SELECT * FROM plants";

echoquerytojson($q);

mysql_close($connection);		
		
?>
