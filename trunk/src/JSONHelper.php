<?php
function echoquerytocvs($query)
{
	if($result = mysql_query($query))
	{
	
		//$result = mysql_query($query);
		while($row = mysql_fetch_assoc($result)){
			echo json_encode($row);
			echo "#";
		}
		return true;
	}
	else
	{
		//echo "Query failed: '".$query."'";
		return false;
	}
}

function echoquerytojson($query)
{
	if($result = mysql_query($query))
	{
	
		//$result = mysql_query($query);
		while($row = mysql_fetch_assoc($result)){
			echo json_encode($row);
			echo "#";
		}
		return true;
	}
	else
	{
		//echo "Query failed: '".$query."'";
		return false;
	}
}

function queryserver($query)
{
	if($result = mysql_query($query))
	{
		return $result;
	}
	else
	{
		echo "Query failed: '".$query."'";
	}
}
?>