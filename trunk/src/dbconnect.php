<?php
$db_host = "localhost";
$db_database = "a6858635_vegie";
$db_username = "a6858635_vegie";
$db_password = "ktDB123";

$connection = mysql_connect(
	$db_host,
	$db_username,
	$db_password
);

if(!$connection)
{
	echo "error connecting to database";
	die("Error connecting to the database.<br/><br/>".mysql_error());
}

$db_select = mysql_select_db($db_database);

if(!$db_select)
{
	echo "error with select";
	die("Error with select.<br/><br/>".mysql_error());
}

?>