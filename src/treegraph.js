/**
*   Global variables
*
*/				 

var svgw = 500;
var svgh = 500;   
var svg;
var soilTScale;
var phScale;
var dstart = 3;
var attrs;
var steps = 70;
var translateX = 100;
var translateY = 400;
var radius = 3;
var temp = 0;
var mode = "nonselect";

function createTreeGraph(original_data){
	
	/**
		* Method for copying objects
		*
		*/
		function clone(o) {
	  var newObj = (o instanceof Array) ? [] : {};
	  for (i in o) {
		if (i == 'clone') continue;
		if (o[i] && typeof o[i] == "object") {
		  newObj[i] = clone(o[i]);
		} else newObj[i] = o[i]
	  } return newObj;
	};
	
	
		svg = d3.select("div#tab_tab1").append("svg");
		
		
	   
	   
	   
	   /**
		*   Data
		*
		*/
	   
	   var data = clone(original_data);
	   
	   
	   attrs = new Array();
	   attrs[0] = "name";
	   attrs[1] = "companions";
	   attrs[2] = "antagonists";
	   attrs[3] = "soil_ph";
	   attrs[4] = "soil_temp";
	   attrs[5] = "soil_temp_germ";
	   attrs[6] = "root_depth";
	   attrs[7] = "air_temp";
	   attrs[8] = "min_spacing";
	   attrs[9] = "yeild_plant";
	   
	   var display = new Array();
	   display[0] = "name";
	   display[1] = "companions";
	   display[2] = "antagonists";
	   display[3] = "Soil pH";
	   display[4] = "Soil Temperature (F)";
	   display[5] = "Soil Germination Temperature (F)";
	   display[6] = "Root Depth"
	   display[7] = "Air Temperature (F)"
	   display[8] = "Min Spacing for Plants (inches)"
	   display[9] = "Pounds Yield per Plant"
	   
	   
	   
	   
	   soilTScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[4]].indexOf("-");
						 return data[attrs[4]].substring(0, tempi);
						 
						 }).filter(function(val) {
							return val != 0 
						}))
						 , Math.max.apply(Math,data.map(function(data){
						 var tempi = data[attrs[4]].indexOf("-");
						 return data[attrs[4]].substring(tempi + 1, data[attrs[4]].length);
						 
						 }))])
						 .range([0, svgw]);
						 
	   var soilGTScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[5]].indexOf("-");
						 return data[attrs[5]].substring(0, tempi);})
						 .filter(function(val) {
							return val != 0
						}))
						 , Math.max.apply(Math,data.map(function(data,i){
						 var tempi = data[attrs[5]].indexOf("-");
						 return data[attrs[5]].substring(tempi + 1, data[attrs[5]].length);})
						 )])
						 .range([0, svgw]);
						 
		var airScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[7]].indexOf("-");
						 return data[attrs[7]].substring(0, tempi);})
						 .filter(function(val) {
							return val != 0
						}))
						 , Math.max.apply(Math,data.map(function(data,i){
						 var tempi = data[attrs[7]].indexOf("-");
						 return data[attrs[7]].substring(tempi + 1, data[attrs[7]].length);})
						 )])
						 .range([0, svgw]);
						 
		phScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[3]].indexOf("-");
						 return data[attrs[3]].substring(0, tempi);})
						 .filter(function() {
							return data[attrs[3]] != "0-0"
						}))
						 , Math.max.apply(Math,data.map(function(data){
						 var tempi = data[attrs[3]].indexOf("-");
						 return data[attrs[3]].substring(tempi + 1, data[attrs[3]].length);})
						 )])
						 .range([0, svgw]);
		
		var rootScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[6]].indexOf("-");
						 return data[attrs[6]].substring(0, tempi);})
						 .filter(function() {
							return data[attrs[6]] != "0-0"
						}))
						 , Math.max.apply(Math,data.map(function(data){
						 var tempi = data[attrs[6]].indexOf("-");
						 return data[attrs[6]].substring(tempi + 1, data[attrs[6]].length);})
						 )])
						 .range([0, svgw]);
		
		var spaceScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 return data[attrs[8]];})
						 )
						 , Math.max.apply(Math,data.map(function(data){
						 return data[attrs[8]];})
						 )])
						 .range([0, svgw]);
						 
		var yieldScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[9]].indexOf("-");
						 return data[attrs[9]].substring(0, tempi);})
						 .filter(function() {
							return data[attrs[9]] != "0-0"
						}))
						 , Math.max.apply(Math,data.map(function(data){
						 var tempi = data[attrs[9]].indexOf("-");
						 return data[attrs[9]].substring(tempi + 1, data[attrs[9]].length);})
						 )])
						 .range([0, svgw]);
		
			
		
		for(var i = 0; i < data.length; i++){
		var tempi = data[i][attrs[4]].indexOf("-");
		var avg = (parseInt(data[i][attrs[4]].substring(0, tempi)) + parseInt(data[i][attrs[4]].substring(tempi + 1, data[i][attrs[4]].length)))/2;
		if(data[i][attrs[4]]=="0-0")
			data[i][attrs[4]] = -50;
		else
			data[i][attrs[4]] = soilTScale(avg);
		
		tempi = data[i][attrs[5]].indexOf("-");
		avg = (parseInt(data[i][attrs[5]].substring(0, tempi)) + parseInt(data[i][attrs[5]].substring(tempi + 1, data[i][attrs[5]].length)))/2;
		
		if(data[i][attrs[5]]=="0-0")
			data[i][attrs[5]] = -50;
		else
			data[i][attrs[5]] = soilGTScale(avg);
		
		tempi = data[i][attrs[3]].indexOf("-");
		avg = (parseInt(data[i][attrs[3]].substring(0, tempi)) + parseInt(data[i][attrs[3]].substring(tempi + 1, data[i][attrs[3]].length)))/2;
		
		if(data[i][attrs[3]]=="0-0")
			data[i][attrs[3]] = -50;
		else
			data[i][attrs[3]] = phScale(avg);
			
		tempi = data[i][attrs[6]].indexOf("-");
		avg = (parseInt(data[i][attrs[6]].substring(0, tempi)) + parseInt(data[i][attrs[6]].substring(tempi + 1, data[i][attrs[6]].length)))/2;
		
		if(data[i][attrs[6]]=="0-0")
			data[i][attrs[6]] = -50;
		else{
			data[i][attrs[6]] = rootScale(avg);
			}
			
		tempi = data[i][attrs[7]].indexOf("-");
		avg = (parseInt(data[i][attrs[7]].substring(0, tempi)) + parseInt(data[i][attrs[7]].substring(tempi + 1, data[i][attrs[7]].length)))/2;
		
		if(data[i][attrs[7]]=="0-0")
			data[i][attrs[7]] = -50;
		else{
			data[i][attrs[7]] = airScale(avg);
			}
			
		data[i][attrs[8]] = spaceScale(data[i][attrs[8]]);
		
		tempi = data[i][attrs[9]].indexOf("-");
		avg = (parseInt(data[i][attrs[9]].substring(0, tempi)) + parseInt(data[i][attrs[9]].substring(tempi + 1, data[i][attrs[9]].length)))/2;
		
		if(data[i][attrs[9]]=="0-0")
			data[i][attrs[9]] = -50;
		else{
			data[i][attrs[9]] = yieldScale(avg);
			}
		}
		
		
		
	
	var g;
	
	
	initialize();
	transform();
	
	
	
	
	
   

   function initialize(){  

		/**
		*   Show hovered plant
		*
		*/
		svg.append("text")
			.attr("x",100)
			.attr("y",50)
			.attr("id","nametext")
			.text("")
		svg.append("text")
			.attr("x",100)
			.attr("y",80)
			.attr("id","comtext")
			.text("")
		svg.append("text")
			.attr("x",100)
			.attr("y",100)
			.attr("id","anttext")
			.text("")
	   
	   /**
		*   Draw unknown area
		*
		*/
	   svg.append("rect")
			.attr("x",translateX - 80)
			.attr("y",0)
			.attr("fill","gray")
			.attr("width",60)
			.attr("height",svgh+translateY)
	   
	   g=svg.selectAll("g").data(data).enter()
	  .append("g")
	  .attr("transform",function(d,i) {return "translate("+translateX+", "+translateY+")";})
	  .attr("id",function(d){return "i" + d.id;})
	  /**
		*   Mouse events
		*
		*/
		.on("mouseover", function(d) {
		if(mode=="nonselect"){		
        this.parentNode.appendChild(this);
        var ag = d3.select(this);
		
		//Change attributes of all vegetables
		svg.selectAll("g").attr("class","unfocused");
		//Change attributes of hover
		ag.attr("class","hover");
		svg.select("#nametext").text("Name: " + ag.select(".name").text());
		
		var tempcomtext = "Companions: ";
		//Change attributes of companions plants
		
			var coms = d.companions.split(', ');
			for(var j = 0; j< coms.length; j++){
				if(typeof data[coms[j]] != "undefined" && data[coms[j]] != null){
				svg.select("g#i"+coms[j]).attr("class","compath")
				tempcomtext = tempcomtext + data[coms[j]].name + "; ";
				}
			}
		
		svg.select("#comtext")
			.text(tempcomtext)
		//Change attributes of antagonists plants
		tempcomtext = "Antagonists: ";
		
			var ants = d.antagonists.split(', ');
			for(var j = 0; j< ants.length; j++){
			    if(typeof data[ants[j]] != "undefined" && data[ants[j]] != null){
				svg.select("g#i"+ants[j]).attr("class","antpath")
				tempcomtext = tempcomtext + data[ants[j]].name + "; ";
				}
			}
		
		svg.select("#anttext")
			.text(tempcomtext)
		}})
		.on("mouseout", function(d) {
		//Reset
		if(mode=="nonselect"){
		svg.selectAll("g").attr("class","").attr("render-order",0);
		svg.select("#comtext")
			.text("");
		svg.select("#anttext")
			.text("");
		svg.select("#nametext").text("");
		}
		})
		.on("mouseclick", function(d) {
		if(mode=="nonselect"){
			mode = "select";
			this.parentNode.appendChild(this);
			var ag = d3.select(this);
			
			//Change attributes of all vegetables
			svg.selectAll("g").attr("class","unfocused");
			//Change attributes of hover
			ag.attr("class","selected");
			}
		else
			mode="nonselect";
		
		})
	  
	   
			
	   
	   
	   /**
		*   Draw background grids
		*
		*/
	   svg.append("line")
			.attr("class","baseline")
			.attr("x1",translateX)
			.attr("y1",translateY+250)
			.attr("x2",translateX+svgw)
			.attr("y2",translateY+250)
			
		for(var i = 1; i<attrs.length-dstart +1; i++){
		svg.append("line")
			.attr("class","grids")
			.attr("x1",translateX)
			.attr("y1",translateY+250 - steps * i)
			.attr("x2",translateX+svgw)
			.attr("y2",translateY+250 - steps * i)
		}
		
		/**
		*   Draw initial paths
		*
		*/
	   g
	  .append("path")
	  .attr("d",function(d){return "m "+svgw/2+" "+ 250})
	 
	 
	  /**
	*   User control point
	*
	*/
	//ph
    svg.append("circle")
		.attr("class","userph")
		.attr("transform",function(d,i) {return "translate("+translateX+", "+translateY+")";})
		.attr("cx",function(d){return phScale(site.ph.value)})
   		.attr("cy",function(d){
		
		for(var j=0; j<attrs.length; j++)
		{
			if(attrs[j]=="soil_ph"){
				return 250 - steps * (j-dstart+1);
				}
		}
		
		})
   		.attr("r",function(d){return radius * 2});
	
		
	}
	
	
	function transform(){
	
	/**
	*   Draw background grids' text
	*
	*/
	svg.selectAll(".gridtext").remove();
	for(var i = dstart; i<attrs.length; i++){
	svg.append("text")
		.attr("class","gridtext")
		.attr("id",i)
   		.attr("x",translateX+svgw+50)
   		.attr("y",translateY+250 - steps * (i-dstart+1))
		.text(display[i])
		
	}
	
	
	/**
	*   Draw grids' text arrangement box 
	*
	*/
	svg.selectAll(".gridcontrol").remove();
	for(var i = dstart; i<attrs.length; i++){
	svg.append("image")
		.attr("class","gridcontrol")
		.attr("id",i)
		.attr("x",translateX+svgw+50)
		.attr("y",translateY+250 - steps * (i-dstart+1) - 30)
		.attr("width",16)
		.attr("height",16)
		.attr("xlink:href","images/up.png")
		.on("click",moveup)
		
	svg.append("image")
		.attr("class","gridcontrol")
		.attr("id",i)
		.attr("x",translateX+svgw+50)
		.attr("y",translateY+250 - steps * (i-dstart+1) + 5)
		.attr("width",16)
		.attr("height",16)
		.attr("xlink:href","images/down.png")
		.on("click",movedown)
	}
	
   
   /**
	*   Draw paths
	*
	*/
   g
  .select("path").transition().duration(1000)
  .attr("d",function(d){return "m "+svgw/2+" "+ 250 
  +" l " + (d[attrs[dstart]]-svgw/2) + " -" + steps 
  + " l " + (d[attrs[dstart+1]]-d[attrs[dstart]]) + " -" + steps 
  + " l " + (d[attrs[dstart+2]]-d[attrs[dstart+1]]) + " -" + steps 
  + " l " + (d[attrs[dstart+3]]-d[attrs[dstart+2]]) + " -" + steps
  + " l " + (d[attrs[dstart+4]]-d[attrs[dstart+3]]) + " -" + steps
  + " l " + (d[attrs[dstart+5]]-d[attrs[dstart+4]]) + " -" + steps  
  + " l " + (d[attrs[dstart+6]]-d[attrs[dstart+5]]) + " -" + steps })
  
  
  
	/**
	*   Dots creation
	*
	*/	 
   var radius = 3;
   g.selectAll("circle").remove();
   for(var j=dstart;j<attrs.length;j++){
   g.append("circle")
   		.attr("cx",function(d){return d[attrs[j]]})
   		.attr("cy",function(d){return 250 - steps * (j-dstart+1)})
   		.attr("r",function(d){return radius});
		
   	}
   	
   	/**
	*   Attribute values creation
	*
	*/
   g.selectAll("text").remove();

   for(var j=dstart;j<attrs.length;j++)
   {   
   g.append("text")
   		.attr("x",function(d){return d[attrs[j]] + 5})
   		.attr("y",function(d){return 250 - steps * (j-dstart+1) - 5})
   		.text(function(d,i){
		var tempv = original_data[i][attrs[j]];
		if(tempv == "0-0")
		return "Unknown";
		else
		return tempv;})
	}
   	
   	/**
	*   Attribute name creation
	*
	*/
   g
   .append("text")
   		.attr("x",function(d){return d[attrs[attrs.length-1]]})
   		.attr("y",function(d){
		return 250 - steps * (attrs.length-dstart) - 25;
		})
   		.attr("class","name")
   		.text(function(d){return d[attrs[0]]})
  
  
    
	
	
  }
  
  function moveup(){
     this.parentNode.appendChild(this);
    var clickcontrol = d3.select(this);
	
	if(clickcontrol.attr("id") < attrs.length - 1){
	var id = clickcontrol.attr("id");
	var nextid = parseInt(clickcontrol.attr("id")) + 1;
	var tempstring = attrs[id];
    attrs[id] = attrs[nextid];
    attrs[nextid] = tempstring;
	tempstring = display[id];
    display[id] = display[nextid];
    display[nextid] = tempstring;
	transform();
	controlRedraw();
	}
  }
  
  function movedown(){
     this.parentNode.appendChild(this);
    var clickcontrol = d3.select(this);
	
	if(clickcontrol.attr("id") > dstart){
	var id = clickcontrol.attr("id");
	var previd = parseInt(clickcontrol.attr("id")) - 1;
	var tempstring = attrs[id];
    attrs[id] = attrs[previd];
    attrs[previd] = tempstring;
	tempstring = display[id];
    display[id] = display[previd];
    display[previd] = tempstring;
	transform();
	controlRedraw();
	}
  }
  
}


function controlRedraw(){
		
        svg = d3.select("div#tab_tab1 svg");
		svg.select(".userph").transition()
		.attr("cx",function(d){
		var tempvar = phScale(site.ph.value);
		if(tempvar <= 0)
			tempvar = 0;
		if(tempvar >= svgw)
			tempvar = svgw;
		return tempvar;})
   		.attr("cy",function(d){
		
		for(var j=0; j<attrs.length; j++)
		{
			if(attrs[j]=="soil_ph")
				return 250 - steps * (j-dstart+1);
		}
		})
   		.attr("r",function(d){return radius * 2});

}

