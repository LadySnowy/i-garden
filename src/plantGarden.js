function plantGardenStraight()
{	
	//create site
	var plot=document.createElementNS("http://www.w3.org/2000/svg", "svg");
	plot.setAttribute("height", window.site.lenght*24);
	plot.setAttribute("width", window.site.width*24);
	plot.id="garden";
	
	//create rectangle
	var rec1=document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rec1.setAttribute("x", 0);
	rec1.setAttribute("y", 0);
	rec1.setAttribute("width", window.site.width*24);
	rec1.setAttribute("height", window.site.lenght*24);
	rec1.style.fill = '#83512D';
	
	//add the rectangle
	plot.appendChild(rec1);
	
	//create array
	var sort = new Array();
	for(x in window.list)
	{
		//get each plant
		for(var i=0; i<parseInt(window.list[x].number); i++)
		{
			sort.push(window.list[x].name);
		
		}
	}
	//alert(sort);
	
	//set the first position
	var locx=0;
	var locy=parseInt(window.list[0].min_spacing);
	//go thru each vegitable
	for(x in window.list)
	{
	//alert(window.list[x].number);
		//get plant color
		var color = calcColor(window.list[x].health);
		
		//go thru each plant		
		for(var i=0; i<parseInt(window.list[x].number); i++)
		{
			//create circle
			//<circle id="greencircle" cx="30" cy="30" r="15" fill="green" />
			var cir1=document.createElementNS("http://www.w3.org/2000/svg", "circle");
			
			//set x value
			locx=locx+parseInt(window.list[x].min_spacing);
			//alert("Data: " + window.site.width*24);
			//check it row is full
			if(locx+parseInt(window.list[x].min_spacing)>parseInt(window.site.width)*24)
			{
				//alert("Data: " + window.list[x].min_spacing);	
				locx=parseInt(window.list[x].min_spacing);
				locy=locy+(parseInt(window.list[x].min_spacing)*2);
			}
			cir1.setAttribute("cx", locx);
			locx=locx+parseInt(window.list[x].min_spacing);
			
			//set y value
			cir1.setAttribute("cy", locy);
			cir1.setAttribute("r", parseInt(window.list[x].min_spacing));
			cir1.setAttribute("class", window.list[x].name);
			//alert("Data: " + window.list[0][38]);
			cir1.style.fill = color;
		
			plot.appendChild(cir1);
		
		}
	}
	
	
	//add images contanier to plantLayout
	var element=document.getElementById("plantLayout");
	element.appendChild(plot);	
}

function calcColor(arrHealth)
{
	//get health number
	var h = 160-(arrHealth*160);
	//calculate color from health
	var color = "#"+((((1 << 24)+(h << 16)+(160 << 8)+h)).toString(16)).slice(1,7);
	return color;
}	

function redrawGarden()
{
	var parent=document.getElementById("plantLayout");
	var child=document.getElementById("garden");
	parent.removeChild(child);
	plantGardenStraight();
	//alert(window.allList);
}