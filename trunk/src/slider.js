function makeSlider(arr,itemNum,units,min,max)
{
//create vegitable contanier div
var div=document.createElement("div");
div.id=arr[itemNum][1];

//make paragraph for label
var para=document.createElement("p");
//make label
var lab=document.createElement("label");
lab.htmlFor="amount"+arr[itemNum][1];
var node1=document.createTextNode(arr[itemNum][1]+" yeild:");

//make input
var inp=document.createElement("input");
inp.type="text";
inp.id="amount"+arr[itemNum][1];
inp.style.border="0"; 
inp.style.color="#f6931f";	
inp.style.fontWeight="bold";

//add everthing to the paragraoh
lab.appendChild(node1);
para.appendChild(lab);
para.appendChild(inp);

//make slider div
var div1=document.createElement("div");
div1.id="slider"+arr[itemNum][1];

//make paragraph for min max label
var para2=document.createElement("p");

//make min label
var lab2=document.createElement("label");
//lab.htmlFor="amount"+arr[itemNum][1];
var node1=document.createTextNode(min);

var para3=document.createElement("p");
para3.style.textAlign="right";
//make max label
var lab3=document.createElement("label");	
var node2=document.createTextNode(max);

	
lab2.appendChild(node1);
lab3.appendChild(node2);

para2.appendChild(lab2);
para3.appendChild(lab3);

div1.appendChild(para2);
div1.appendChild(para3);

//add everything to the vegitable contanier div
div.appendChild(para);
div.appendChild(div1);

//add vegitable contanier to vegList
var element=document.getElementById("list");
element.appendChild(div);

$( "#slider"+arr[itemNum][1] ).slider({
		//range: true,
		min: min,
		max: max,
		value: arr[itemNum][37],
		slide: function( event, ui ) {	
			arr[itemNum][37] = ui.value;
			$( "#amount"+arr[itemNum][1] ).val(arr[itemNum][37] + " " + units);
			redrawGarden();
			//( ui.value + " " + units);
		}
	});
	$( "#amount"+arr[itemNum][1] ).val( $( "#slider"+arr[itemNum][1]).slider( "values", 0 ) + " " + units );
}	

function drawList()
{
	//create division to hold all the sliders
	var div=document.createElement("div");
	div.id="list";
		
	//add vegitable contanier to vegList
	var element=document.getElementById("vegList");
	element.appendChild(div);
	
	for(x in window.list)
		{
		makeSlider(window.list, x, 'lbs', 0, 50);
		//alert("Data: " + x);
		}
}

function redrawList()
{
	//removes list and redraws list
	var parent=document.getElementById("vegList");
	var child=document.getElementById("list");
	parent.removeChild(child);
	drawList();
}

 function addPlant(id)
 {
	//gets plant from the database
	$.get("getPlant.php", { id: id } , function deal(data)
	{
		//splits multiple plants
		var rows=data.split("#");
		rows.pop();
		
		//handles multiple plants
		for(var i = 0; i < rows.length; i++)
		{
			var l=rows[i].lastIndexOf("}");
			var n=rows[i].slice(6,l);
			
			//breaks apart the values
			rows[i]=n.split("\":");
			//alert("Data: " + rows);
			
			//creates an array to hold formated values
			var m = new Array();
			//handles the values
			for(x in rows[i])
			{
				//removes the field name
				var j=rows[i][x].lastIndexOf(",");
				var value = rows[i][x].slice(0,j);
				//alert("Data: " + value);
				
				//removes quotes
				if(value.charAt(0)=="\"")
				{
					var k=value.length-1;
					//alert("Data: " + k);
					value=value.slice(1,k);
				}
				
				//adds value to temp array
				m.push(value);
				//alert("Data: " + m);
			}
			//adds default quantity
			m.push(10);
			m.push(1);
			//alert("Data: " + m);
			//adds vegitable to array
			window.list.push(m);
		}
		
		redrawList();
		redrawGarden();
	});
 }
 
 function deletPlant(id)
 {
	//goes throught each list member
	for(x in window.list)
	{
		//checks to see if id matches id of list member
		if(window.list[x][0] == id)
		{
			window.list.splice(x,1);
		}
	}
	redrawList();
	redrawGarden();
 }

 function getPlants(){
	//gets plant from the database
	$.get("getPlants.php", function deal(data){
		//splits multiple plants
		var rows=data.split("#");
		rows.pop();
		
		//handles multiple plants
		for(var i = 0; i < rows.length; i++)
		{
			var l=rows[i].lastIndexOf("\"");
			var n=rows[i].slice(7,l);
			rows[i]=n.split("\",\"name\":\"");
		}
		//rows is a 2D array containg the id and name of all the plants in the database
		//you need to place a call out to the function that uses this
		alert("Data: " + rows[1][1]);
	});
}

function makeSliderObj(obj)
{
//create vegitable contanier div
var div=document.createElement("div");
//alert(obj.name);
div.id=obj.name;

//make paragraph for label
var para=document.createElement("p");
//make label
var lab=document.createElement("label");
lab.htmlFor="amount"+obj.name;
var node1=document.createTextNode(obj.name+":");

//make input
var inp=document.createElement("input");
inp.type="text";
inp.id="amount"+obj.name;
inp.style.border="0"; 
inp.style.color="#f6931f";	
inp.style.fontWeight="bold";

//add everthing to the paragraoh
lab.appendChild(node1);
para.appendChild(lab);
para.appendChild(inp);

//make slider div
var div1=document.createElement("div");
div1.id="slider"+obj.name;

//make paragraph for min max label
var para2=document.createElement("p");

//make min label
var lab2=document.createElement("label");
//lab.htmlFor="amount"+obj.name;
var node1=document.createTextNode(obj.min);

var para3=document.createElement("p");
para3.style.textAlign="right";
//make max label
var lab3=document.createElement("label");	
var node2=document.createTextNode(obj.max);

	
lab2.appendChild(node1);
lab3.appendChild(node2);

para2.appendChild(lab2);
para3.appendChild(lab3);

div1.appendChild(para2);
div1.appendChild(para3);

//add everything to the vegitable contanier div
div.appendChild(para);
div.appendChild(div1);

//add vegitable contanier to vegList
var element=document.getElementById("siteList");
element.appendChild(div);

$( "#slider"+obj.name ).slider({
		//range: true,
		min: obj.min,
		max: obj.max,
		step: obj.step,
		value: obj.value,
		slide: function( event, ui ) {	
			obj.value = ui.value;
			$( "#amount"+obj.name).val(obj.value + " " + obj.units);
			calculateHealth();
			redrawGarden();
			//( ui.value + " " + units);
		}
	});
	$( "#amount"+obj.name).val( $( "#slider"+obj.name).slider( "values", 0 ) + " " + obj.units );
}

function calculateHealth()
{
	//get site values
	//get the total amount of water from irragation and rain fall as number of days to get an inch
	var water = 1/((window.site.rainfall/360)+(1/window.site.irragate.value));
	var ph=window.site.ph.value;
	
	//alert("Data: " + ph);
	for(x in window.list)
		{
		var health = 1;
		health = health*(water<window.list[x][4])?water/window.list[x][4]:window.list[x][4]/water;
		//alert("Data: " + x +" "+ health);
		
		var y;
		y=window.list[x][24];
		
		//save health to the array
		window.list[x][38]=health;
	
		//alert("Data:");
		//window.document.getElementsByClassName("Onion").style.fill = colorToHex('rgb(0, 0, 0)');
		}
}