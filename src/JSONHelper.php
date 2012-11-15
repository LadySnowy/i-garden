<?php
function echoquerytojsonadd($addinfo, $query)
{

	if($result = mysql_query($query))
	{
		if(mysql_num_rows($result) > 0)
		{
			while($row = mysql_fetch_assoc($result)){
				foreach ($addinfo as $key => $value)
				{
					$row[$key] = $value;
				}
				echo json_encode($row);
				echo "#";
			}
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		echo "Query failed: '".$query."'";
		return false;
	}
}

function echoquerytojson($type, $query)
{
	if($result = mysql_query($query))
	{
	
		//$result = mysql_query($query);
		while($row = mysql_fetch_assoc($result)){
			$row["type"] = $type;
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