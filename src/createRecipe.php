<?php
include("dbconnect.php");
?>
<html>
<head>
</head>
<body>
<h3>Create Recipes</h3>
<?php

		$q = "SELECT * FROM recipe";
		$result = mysql_query($q) or die('Query failed: ' . mysql_error());
		echo "<table border=\"1\">";
		echo "<tr>";
		echo "<td>recipe_id</td>";
		echo "<td>recipe</td>";
		echo "<td>amount/vegitable</td>";
		echo "</tr>";
				
		while($l = mysql_fetch_array($result, MYSQL_ASSOC)) {
			echo "<tr>";
			echo "<td>".$l['recipe_id']."</td>";
			echo "<td>".$l['recipe']."</td>";
			
			$q1 = "SELECT * FROM recipe_plant JOIN plants ON recipe_plant.plant_id=plants.id WHERE recipe_plant.recipe_id =".$l['recipe_id'];
			echo "<td>";
			$result1 = mysql_query($q1) or die('Query failed: ' . mysql_error());
			while($j = mysql_fetch_array($result1, MYSQL_ASSOC)) {
				echo floatval($j['amount'])." ".$j['name']."</br>";
			}
			echo "<form method=\"get\" action=\"http://localhost/addPlantHandle.php\" >";
					
			echo "add vegitable <br>";
			echo "amount <input name=\"amount\" type=\"text\" size=\"4\"/>";
			$q3 = "SELECT * FROM plants";
			$result3 = mysql_query($q3) or die('Query failed: ' . mysql_error());
	
			echo "<select name=\"qn\">"; 
			while($k = mysql_fetch_array($result3, MYSQL_ASSOC)) {
				echo "<option value=\"".$k['id']."\" >".$k['id']."-".$k['name']." </option>";
			}
			echo "</select>";
			echo "<INPUT TYPE=\"hidden\" name=\"rid\" value=\"".$l['recipe_id']."\">";
			echo "<input type=\"submit\" value=\"Go\" />";
			echo "</form>";	
				echo "</td>";	
				
				echo "</tr>";
		}


		echo "<tr>";
		echo "<td></td>";
		echo "<td>";

		echo "<form method=\"get\" action=\"http://localhost/createRecipeHandle.php\" >";

		echo "Name <input name=\"name\" type=\"text\" size=\"50\"/><br>";
			
		
		echo "<input type=\"submit\" value=\"Create\" />";
		echo "</form>";
		echo "</td>";
		echo "<td>";	

		
		echo "</td>";
		echo "</table>";		
		echo "<br>";	

?>
</body>
</html>
