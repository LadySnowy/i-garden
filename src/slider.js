function makeSlider(arr,itemNum,units,min,max)
{
//create vegitable contanier div
var div=document.createElement("div");
div.id=arr[itemNum].id;
div.style.backgroundColor=calcColor(arr[itemNum].health);
div.onmouseover=function()
{
	vegOver(arr[itemNum].id);
}
;
div.onmouseout=function()
{
	vegOut(arr[itemNum].id);
}
;

//make paragraph for label
var para=document.createElement("div");
//make label
var lab=document.createElement("label");
lab.htmlFor="amount"+arr[itemNum].id;
var node1=document.createTextNode(arr[itemNum].name+" yield:");

//make input
var inp=document.createElement("input");
inp.type="text";
inp.id="amount"+arr[itemNum].id;
inp.style.border="0"; 
inp.style.color="#f6931f";	
inp.style.fontWeight="bold";

//add everthing to the paragraoh
lab.appendChild(node1);
para.appendChild(lab);
para.appendChild(inp);

//make slider div
var div1=document.createElement("div");
div1.id="slider"+arr[itemNum].id;

//create close button
var close=document.createElementNS("http://www.w3.org/2000/svg", "svg");
close.setAttribute("height", 15);
close.setAttribute("width", "100%");

var txx=document.createElementNS("http://www.w3.org/2000/svg", "text");
txx.setAttribute("x", "95%");
txx.setAttribute("y", 10);
txx.textContent = "x";
txx.onclick=function()
{
	deletPlant(arr[itemNum].id);
};

close.appendChild(txx);
div.appendChild(close); 

//create labels
var plot=document.createElementNS("http://www.w3.org/2000/svg", "svg");
plot.setAttribute("height", 23);
plot.setAttribute("width", "100%");

var tx=document.createElementNS("http://www.w3.org/2000/svg", "text");
tx.setAttribute("x", 0);
tx.setAttribute("y", 23);
tx.textContent = min;

var tx1=document.createElementNS("http://www.w3.org/2000/svg", "text");
tx1.setAttribute("x", "94%");
tx1.setAttribute("y", 23);
tx1.setAttribute("style", "align:right;");
tx1.textContent = max;

plot.appendChild(tx);
plot.appendChild(tx1);

div1.appendChild(plot);

var para1=document.createElement("p");
var para2=document.createElement("p");

//add everything to the vegitable contanier div
div.appendChild(para);
div.appendChild(div1);
div.appendChild(para1);
div.appendChild(para2);

//add vegitable contanier to vegList
var element=document.getElementById("list");
element.appendChild(div);

$( "#slider"+arr[itemNum].id).slider({
		//range: true,
		min: min,
		max: max,
		value: arr[itemNum].number,
		slide: function( event, ui ) {	
			arr[itemNum].number = ui.value;
			$( "#amount"+arr[itemNum].id).val(arr[itemNum].number + " " + units);
			redra();
			//( ui.value + " " + units);
		}
	});
	$( "#amount"+arr[itemNum].id).val( $( "#slider"+arr[itemNum].id).slider( "values", 0 ) + " " + units );
}	

function redra()
{
	calculateHealth();
	//redrawGarden();
	redrawList();
	//alert(foGraCircle.var);
	forceColor(vis);
	forceColor(visc);
	controlRedraw();
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
		//alert("Data: " + x);
		makeSlider(window.list, x, 'lbs', 0, 50);
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
	$.get("getPlant.php", { id: id } , function (data)
	{
		//alert(data);
		//splits multiple plants
		var rows=data.split("#");
		rows.pop();
		
		//handles multiple plants
		//alert(rows);
		for(var i = 0; i < rows.length; i++)
		{
			var l=rows[i].lastIndexOf("}");
			var n=rows[i].slice(1,l);
			//alert(n);
			
			//breaks apart the values
			rows[i]=n.split("\":");
			//alert("Data: " + rows[i]);
			
			//creates an object to hold formated values
			var m = new Object();
			//handles the values
			for(var x = 1; x < rows[i].length; x++)
			{
				//get first value
				//alert(x +" "+ i +" "+ rows[i].length);
				if(x==1)
				{
					var j=rows[i][x].lastIndexOf(",");
					var value = rows[i][x].slice(0,j);
					var id = rows[i][x-1].slice(1);
					//alert("first Data: " + id + " " +value);
				//get last value
				}else if(x==((rows[i].length)-1))
				{
					var value = rows[i][x];
					var c=rows[i][x-1].lastIndexOf(",");
					var id = rows[i][x-1].slice(c+2);
					//alert("last Data: " + id + " " +value);
				//get middle value
				}else{				
					//removes the field name
					var j=rows[i][x].lastIndexOf(",");
					var value = rows[i][x].slice(0,j);
					var c=rows[i][x-1].lastIndexOf(",");
					var id = rows[i][x-1].slice(c+2);
					//alert("Data: " + id + " " +value);
				}
				
				//removes quotes
				if(value.charAt(0)=="\"")
				{
					var k=value.length-1;
					//alert("Data: " + k);
					value=value.slice(1,k);
				}
				
				//adds value to temp array
				m[id]=value;
				//alert("Data: " + m[id]);
			}
			//adds default quantity
			m.number=10;
			m.health=1;
			//alert("Data: " + m);
			//adds vegitable to array
			window.list.push(m);			
		}
		//foGraCircle(window.list);
		redra();
	});
}
 
function deletPlant(id)
{
	//goes throught each list member
	for(x in window.list)
	{
		//checks to see if id matches id of list member
		if(window.list[x].id == id)
		{
			window.list.splice(x,1);
		}
	}
	redra();
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
		//alert("Data: " + rows[1][1]);
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

//create text svg
var plot=document.createElementNS("http://www.w3.org/2000/svg", "svg");
plot.setAttribute("height", 30);
plot.setAttribute("width", "100%");


var tx=document.createElementNS("http://www.w3.org/2000/svg", "text");
tx.setAttribute("x", 0);
tx.setAttribute("y", 30);
tx.textContent = obj.min;

var tx1=document.createElementNS("http://www.w3.org/2000/svg", "text");
tx1.setAttribute("x", "90%");
tx1.setAttribute("y", 30);
tx1.setAttribute("style", "align:right;");
tx1.textContent = obj.max;

var rec1=document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rec1.setAttribute("id", obj.name+"Rec");
	rec1.setAttribute("x", "45%");
	rec1.setAttribute("y", 0);
	rec1.setAttribute("width", 80);
	rec1.setAttribute("height", 15);
	rec1.setAttribute("display", "none");
	rec1.style.fill = 'rgba(133, 189, 83, 0.33)';

plot.appendChild(tx);
plot.appendChild(tx1);
plot.appendChild(rec1);

div1.appendChild(plot);

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
			redra();
			//( ui.value + " " + units);
		}
	});
	$( "#amount"+obj.name).val( $( "#slider"+obj.name).slider( "values", 0 ) + " " + obj.units );
}

function calculateHealth()
{
	//get site values
	//get the total amount of water from irragation and rain fall as inche per day
	var water = ((window.site.rainfall/365)+(1/window.site.irragate.value));
	var ph=window.site.ph.value;
	var light=window.site.shade.value;
	
	//alert("Data: " + ph);
	plantHealth(window.list, water, ph, light);
	plantHealth(window.allList, water, ph, light);

}

function plantHealth(arr, water, ph, light)
{
	for(x in arr)
	{
	//set health to full
	var health = 1;
	
	//get the plant water
	j=1/(parseFloat(arr[x].water_how_often));
	//alert(phmin + " " + phmax);
	//get the the standard divation
	wstd=j/4;
	//get the differance from avarage
	wraw=Math.abs((j-water)/wstd);
	//alert(arr[x].name+" "+j+" "+wstd+" "+wraw);		
	health = (health/wraw>1)?health:health/wraw;
	//alert("Data: " + x +" "+ health);
	
	//get the plant ph
	y=arr[x].soil_ph;
	//alert(y +" "+ x);
	//get the max and min value
	s = y.indexOf("-");
	var phmin = parseFloat(y.slice(0, s));
	var phmax = parseFloat(y.slice(s+1));
	//alert(phmin + " " + phmax);
	//get the avarage and the standard divation
	phavr=(phmax+phmin)/2;
	phstd=(phmax-phmin)/6;
	//correct for no standard divation
	if(phstd == 0) phstd = 1/6;
	//get the differance from avarage
	phraw=Math.abs((phavr-ph)/phstd);
	//alert(phraw);
	health=(health/phraw>1)?health:health/phraw;
	//alert(health);
	
	//get the plant light
	s=parseInt(arr[x].sunlight);
	//alert(phmin + " " + phmax);
	//get the the standard divation
	lstd=s/4;
	//get the differance from avarage
	lraw=Math.abs((s-light)/lstd);
	//alert(phraw);		
	health = (health/lraw>1)?health:health/lraw;
	//alert("Data: " + x +" "+ health);
	
	//save health to the array
	arr[x].health=health;

	}
}

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

function vegOver(id){
	//alert(id);
	//alert(window.allList[id-1].id);
	id=id-1;
	//alert(window.allList[id].id);
	fade(.1, visc, "", id);
	
	//get the plant ph
	var y=window.allList[id].soil_ph;
	//alert(y +" "+ x);
	//get the max and min value
	var s = y.indexOf("-");
	var phmin = parseFloat(y.slice(0, s));
	var phmax = parseFloat(y.slice(s+1));
	var phScaleMin = window.site.ph.min;
	var phScaleMax = window.site.ph.max;	
	//alert((phmin-phScaleMin)/(phScaleMax-phScaleMin));
	var xnum = (phmin-phScaleMin)/(phScaleMax-phScaleMin)*100;
	var widthnum = ((phmax-phScaleMin)/(phScaleMax-phScaleMin)*100)-xnum;
	
	//display the ph range
	document.getElementById('PHRec').setAttribute("display", "block");
	document.getElementById('PHRec').setAttribute("x", xnum+"%");
	document.getElementById('PHRec').setAttribute("width", widthnum+"%");
	
	//get the plant water
	y=1/(parseFloat(window.allList[id].water_how_often));
	//alert(y);
	//figure out how much comes from rain fall
	l=(window.site.rainfall/365);
	//alert(l);
	//water = 1/((window.site.rainfall/365)+(1/window.site.irragate.value));
	//alert(l);
	
	//alert(y +" "+ x);
	//get the max and min value
	var waterScaleMin = window.site.irragate.min;
	var waterScaleMax = window.site.irragate.max;	
	//alert((phmin-phScaleMin)/(phScaleMax-phScaleMin));
	var xnum = (1/(y-l))/(waterScaleMax-waterScaleMin)*100-2;
	var widthnum = 4;
	
	//alert(xnum);	
	//display the water range
	document.getElementById('IrrigationRec').setAttribute("display", "block");
	document.getElementById('IrrigationRec').setAttribute("x", xnum+"%");
	document.getElementById('IrrigationRec').setAttribute("width", widthnum+"%");
	
	//get the plant light
	y=parseFloat(window.allList[id].sunlight);
	//alert(y);
	
	//get the max and min value
	var shadeScaleMin = window.site.shade.min;
	var shadeScaleMax = window.site.shade.max;	
	//alert((phmin-phScaleMin)/(phScaleMax-phScaleMin));
	var xnum = ((y-shadeScaleMin)/(shadeScaleMax-shadeScaleMin)*100)-2;
	var widthnum = 4;
	
	//alert(xnum);	
	//display the light range
	document.getElementById('SunshineRec').setAttribute("display", "block");
	document.getElementById('SunshineRec').setAttribute("x", xnum+"%");
	document.getElementById('SunshineRec').setAttribute("width", widthnum+"%");
	/*
	//modify the calender
{
	document.getElementById('CalCompStart').setAttribute("opacity", "0");
	//get the start date string
	sda=window.allList[id].when_plant;
	var sdate = new Date(sda);
	var sdd=sdate.getDOY();
	
	//get transplant dates
	tda=window.allList[id].week_transplanting;
	
	var tds = tda.indexOf("-");
	var tdmin = parseInt(tda.slice(0, tds));
	var tdmax = parseInt(tda.slice(tds+1));
	
	//set start rec
	document.getElementById('CalPlantStart').setAttribute("x", ((sdd/365)*100)+"%");
	document.getElementById('CalPlantStart').setAttribute("width", (((tdmax*7)/365)*100)+"%");
}	
{
	document.getElementById('CalCompTrans').setAttribute("opacity", "0");
	
	//get grow dates
	mda=window.allList[id].mauraty;
	
	var mds = mda.indexOf("-");
	var mdmin = parseInt(mda.slice(0, mds));
	var mdmax = parseInt(mda.slice(mds+1));
	
	//set trans dates
	document.getElementById('CalPlantTrans').setAttribute("x", (((sdd+(tdmin*7))/365)*100)+"%");
	document.getElementById('CalPlantTrans').setAttribute("width", (((((tdmax-tdmin)*7)+(mdmax*7))/365)*100)+"%");
}

	document.getElementById('CalCompGrow').setAttribute("opacity", "0");	
	
	
	//alert(sdate.getDOY());
	
	
	

	document.getElementById('CalCompHarv').setAttribute("opacity", "0");
	*/
}

function vegOut(id){
	document.getElementById('PHRec').setAttribute("display", "none");
	document.getElementById('IrrigationRec').setAttribute("display", "none");
	document.getElementById('SunshineRec').setAttribute("display", "none");
	/*
	document.getElementById('CalCompStart').setAttribute("opacity", "1");
	document.getElementById('CalCompTrans').setAttribute("opacity", "1");
	document.getElementById('CalCompGrow').setAttribute("opacity", "1");
	document.getElementById('CalCompHarv').setAttribute("opacity", "1");
	*/
}

function getRecipeInfo(callback)
{
	//gets plants from the database
	$.get("getRecipeInfo.php", function (data)
	{
		//log(data);
		//splits multiple plants
		
		var rows=data.split("#");
		rows.pop();
		
		//handles multiple plants
		//alert(rows);
		for(var i = 0; i < rows.length; i++)
		{
			var l=rows[i].lastIndexOf("}");
			var n=rows[i].slice(1,l);
			//alert(n);
						
			//breaks apart the values
			rows[i]=n.split("\":");
			//alert("Data: " + rows[i]);
			/*
			//creates an object to hold formated values
			var m = new Object();
			//handles the values
			for(var x = 1; x < rows[i].length-1; x++)
			{			
				if(x==1)
				{
					var j=rows[i][x].lastIndexOf(",");
					var value = rows[i][x].slice(0,j);
					var id = rows[i][x-1].slice(1);
					//alert("Data: " + id + " " +value);
				}else if(x==(rows[i].length-1))
				{
					var value = rows[i][x];
					var c=rows[i][x-1].lastIndexOf(",");
					var id = rows[i][x-1].slice(c+2);
					//alert("Data: " + id + " " +value);
				}else{				
					//removes the field name
					var j=rows[i][x].lastIndexOf(",");
					var value = rows[i][x].slice(0,j);
					var c=rows[i][x-1].lastIndexOf(",");
					var id = rows[i][x-1].slice(c+2);
					//alert("Data: " + id + " " +value);
				}
				
				//removes quotes
				if(value.charAt(0)=="\"")
				{
					var k=value.length-1;
					//alert("Data: " + k);
					value=value.slice(1,k);
				}
				
				//adds value to temp array
				m[id]=value;
				//alert("Data: " + m[id]);				
			}
			//adds default quantity
			//alert("Data: " + m);
			//adds vegitable to array
			window.allList.push(m);
			//window.list.push(m);	
			*/
		}
		//alert(window.allList);
		callback();
		
	});
	//alert(window.allList);
}

Date.prototype.getDOY = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((this - onejan) / 86400000);
}