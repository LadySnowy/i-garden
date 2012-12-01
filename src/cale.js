function cale()
{
var width = d3.select("#siteList").style("width").slice(0,-2);
var height = 30;
var padding = 20;

//d3.select("#siteList").style("width")

//log(width);

//add svg to sitelist
var dayLength = d3.select("#siteList").
  append("svg:svg").
  attr("width", width).
  attr("height", height + padding * 2);
  
var x = d3.time.scale().domain([new Date(2011, 0, 1), new Date(2011, 11, 31)]).range([0, width]);

var monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function midMonthDates() {
  return d3.range(0, 12).map(function(i) { return new Date(2011, i, 15) });
}

function beginMonthDates() {
  return d3.range(0, 12).map(function(i) { return new Date(2011, i, 1) });
}

// create a group for the sunrise and sunset paths
var lineGroup = dayLength.append("svg:g").
  attr("transform", "translate(0, " + padding + ")");

// draw the background. The part of this that remains uncovered will
// represent the daylight hours.

lineGroup.append("svg:rect").
  attr("x", 0).
  attr("y", 0).
  attr("height", height).
  attr("width", width).
  attr("fill", "lightyellow");

  
 //this is where I draw the data
 
 
 

// create a group to hold the axis-related elements
var axisGroup = dayLength.append("svg:g").
  attr("transform", "translate(0,"+padding+")");

// draw the x tick marks. 

axisGroup.selectAll(".xTicks").
  data(beginMonthDates).
  enter().append("svg:line").
  attr("x1", x).
  attr("y1", 0).
  attr("x2", x).
  attr("y2", height+5).
  attr("stroke", "gray").
  attr("class", "yTicks");

// draw the text for the labels. Since it is the same on top and
// bottom, there is probably a cleaner way to do this by copying the
// result and translating it to the opposite side

axisGroup.selectAll("text.xAxisBottom").
  data(midMonthDates).
  enter().
  append("svg:text").
  text(function(d, i) { return monthNames[i]; }).
  attr("x", x).
  attr("y", height+15).
  attr("text-anchor", "middle").
  attr("class", "xAxisBottom");

}





/*
{	
	//alert("hi");
	//create site
	var plot=document.createElementNS("http://www.w3.org/2000/svg", "svg");
	plot.setAttribute("height", 80);
	plot.setAttribute("width", "100%");
	plot.id="calender";
	
	//create rectangle
	var rec1=document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rec1.setAttribute("x", 0);
	rec1.setAttribute("y", 50);
	rec1.setAttribute("width", 365/365*100+"%");
	rec1.setAttribute("height", 30);
	rec1.style.fill = '#ffffff';
	
	var tx=document.createElementNS("http://www.w3.org/2000/svg", "text");
	tx.setAttribute("x", 180/365*100+"%");
	tx.setAttribute("y", 45);
	tx.textContent = "JFMAMJJASOND";
	
	//<span style="display:inline-block; width:100%; text-align:justify;">J	F	M	A	M	J	J	A	S	O	N	D</span>
	//var sp=document.createElement("span");
	//sp.setAttribute("width", "100");
	//sp.style.textAlign = "justify";
	//sp.innerText = "JFMAMJJASOND";
	
	//text-align:justify;
	
	//add the rectangle
	plot.appendChild(rec1);
	//plot.appendChild(sp);
	plot.appendChild(tx);
/*	
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
	var element=document.getElementById("siteList");
	element.appendChild(plot);	
}
*/