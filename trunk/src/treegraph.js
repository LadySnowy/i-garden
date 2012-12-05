function createTreeGraph(original_data){
	
	/**
		* Method for copying objects
		*
		*/
		Object.prototype.clone = function() {
	  var newObj = (this instanceof Array) ? [] : {};
	  for (i in this) {
		if (i == 'clone') continue;
		if (this[i] && typeof this[i] == "object") {
		  newObj[i] = this[i].clone();
		} else newObj[i] = this[i]
	  } return newObj;
	};
	
	
	/**
		*   Global variables
		*
		*/				 
		var steps = 100;
		var svgw = 700;
		var svgh = 500;   
		var svg = d3.select("div#tab_tab1").append("svg");
		
		var translateX = 100;
	   var translateY = 200;
	   var radius = 3;
	   var temp = 0;
	   
	   
	   
	   /**
		*   Data
		*
		*/
	   
	   var data = original_data.clone();
	   
	   
	   var attrs = new Array();
	   attrs[0] = "name";
	   attrs[1] = "soil_temp";
	   attrs[2] = "soil_temp_germ";
	   attrs[3] = "soil_ph";
	   //attrs[4] = "Air Temperature (F)";
	   
	   
	   
	   var soilTScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[1]].indexOf("-");
						 return data[attrs[1]].substring(0, tempi);
						 
						 }).filter(function(val) {
							return val != 0 
						}))
						 , Math.max.apply(Math,data.map(function(data){
						 var tempi = data[attrs[1]].indexOf("-");
						 return data[attrs[1]].substring(tempi + 1, data[attrs[1]].length);
						 
						 }).filter(function(val) {
							return val != 0
						}))])
						 .range([0, svgw]);
						 
	   var soilGTScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[2]].indexOf("-");
						 return data[attrs[2]].substring(0, tempi);})
						 .filter(function(val) {
							return val != 0
						}))
						 , Math.max.apply(Math,data.map(function(data,i){
						 var tempi = data[attrs[2]].indexOf("-");
						 return data[attrs[2]].substring(tempi + 1, data[attrs[2]].length);})
						 .filter(function(val) {
							return val != 0
						}))])
						 .range([0, svgw]);
		var phScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){
						 var tempi = data[attrs[3]].indexOf("-");
						 return data[attrs[3]].substring(0, tempi);})
						 .filter(function(val) {
							return val != 0
						}))
						 , Math.max.apply(Math,data.map(function(data){
						 var tempi = data[attrs[3]].indexOf("-");
						 return data[attrs[3]].substring(tempi + 1, data[attrs[3]].length);})
						 .filter(function(val) {
							return val != 0
						}))])
						 .range([0, svgw]);
			
		
		for(var i = 0; i < data.length; i++){
		var tempi = data[i][attrs[1]].indexOf("-");
		var avg = (parseInt(data[i][attrs[1]].substring(0, tempi)) + parseInt(data[i][attrs[1]].substring(tempi + 1, data[i][attrs[1]].length)))/2;
		if(avg==0)
			data[i][attrs[1]] = -50;
		else
			data[i][attrs[1]] = soilTScale(avg);
		
		tempi = data[i][attrs[2]].indexOf("-");
		avg = (parseInt(data[i][attrs[2]].substring(0, tempi)) + parseInt(data[i][attrs[2]].substring(tempi + 1, data[i][attrs[2]].length)))/2;
		
		if(avg==0)
			data[i][attrs[2]] = -50;
		else
			data[i][attrs[2]] = soilGTScale(avg);
		
		tempi = data[i][attrs[3]].indexOf("-");
		avg = (parseInt(data[i][attrs[3]].substring(0, tempi)) + parseInt(data[i][attrs[3]].substring(tempi + 1, data[i][attrs[3]].length)))/2;
		
		if(avg==0)
			data[i][attrs[3]] = -50;
		else
			data[i][attrs[3]] = phScale(avg);
		}
	
	var g;
	
	initialize();
	transform();
	
	
	
	
	
   

   function initialize(){   
	   
	   g=svg.selectAll("g").data(data).enter()
	  .append("g")
	  .attr("transform",function(d,i) {return "translate("+translateX+", "+translateY+")";})
	  .attr("id",function(d){return d.name;})
	  /**
		*   Mouse events
		*
		*/
		.on("mouseover", function(d) {	
        this.parentNode.appendChild(this);
        var ag = d3.select(this);
		//Change attributes of all vegetables
		svg.selectAll("g").attr("class","unfocused")
		//Change attributes of hover
		ag.attr("class","hover")
		//Change attributes of companions plants
		//d3.select("g#"+d.com).attr("class","compath")
		})
		.on("mouseout", function(d) {
		//Reset
		svg.selectAll("g").attr("class","")
		})
	  
	   /**
		*   Draw unknown area
		*
		*/
	   svg.append("rect")
			.attr("x",translateX - 80)
			.attr("y",0)
			.attr("fill","gray")
			.attr("width",60)
			.attr("height",svgh)
	   
	   
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
			
		for(var i = 1; i<4; i++){
		svg.append("line")
			.attr("class","grids")
			.attr("x1",translateX)
			.attr("y1",translateY+250 - steps * i)
			.attr("x2",translateX+svgw)
			.attr("y2",translateY+250 - steps * i)
		}
		
		

		
		
		/**
		*   Draw initial background grids' text 
		*
		*/
		for(var i = 1; i<attrs.length; i++){
		svg.append("text")
			.attr("class","gridtext")
			.attr("x",0)
			.attr("y",0)
			.text(attrs[i]);
			
		
		}
		
		/**
		*   Draw initial grids' text arrangement box 
		*
		*/
		for(var i = 1; i<attrs.length; i++){
		svg.append("image")
			.attr("class","gridcontrol")
			.attr("x",0)
			.attr("y",0)
			.attr("width",10)
			.attr("height",10);
			
		svg.append("image")
			.attr("class","gridcontrol")
			.attr("x",0)
			.attr("y",0)
			.attr("width",10)
			.attr("height",10);
		}
		
		/**
		*   Draw initial paths
		*
		*/
	   g
	  .append("path")
	  .attr("d",function(d){return "m "+svgw/2+" "+ 250})
	  
	  /**
		*   Initial dots creation
		*
		*/
	   
	   g
	   .append("circle")
			.attr("cx",function(d){return 0})
			.attr("cy",function(d){return 0})
			.attr("r",function(d){return radius})
	   g.append("circle")
			.attr("cx",function(d){return 0})
			.attr("cy",function(d){return 0})
			.attr("r",function(d){return radius});
	   g.append("circle")
			.attr("cx",function(d){return 0})
			.attr("cy",function(d){return 0})
			.attr("r",function(d){return radius});
			
		
		
	}
	
	
	function transform(){
	
	/**
	*   Draw background grids' text
	*
	*/
	svg.selectAll(".gridtext").remove();
	for(var i = 1; i<attrs.length; i++){
	svg.append("text")
		.attr("class","gridtext")
		.attr("id",i)
   		.attr("x",translateX+svgw+50)
   		.attr("y",translateY+250 - steps * i)
		.text(attrs[i])
		
	}
	
	
	/**
	*   Draw grids' text arrangement box 
	*
	*/
	svg.selectAll(".gridcontrol").remove();
	for(var i = 1; i<attrs.length; i++){
	svg.append("image")
		.attr("class","gridcontrol")
		.attr("id",i)
		.attr("x",translateX+svgw+50)
		.attr("y",translateY+250 - steps * i - 30)
		.attr("width",16)
		.attr("height",16)
		.attr("xlink:href","images/up.png")
		.on("click",moveup)
		
	svg.append("image")
		.attr("class","gridcontrol")
		.attr("id",i)
		.attr("x",translateX+svgw+50)
		.attr("y",translateY+250 - steps * i + 5)
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
  .attr("d",function(d){return "m "+svgw/2+" "+ 250 +" l " + (d[attrs[1]]-svgw/2) + " -" + steps + " l " + (d[attrs[2]]-d[attrs[1]]) + " -" + steps + " l " + (d[attrs[3]]-d[attrs[2]]) + " -" + steps })
  
  
  
	/**
	*   Dots creation
	*
	*/	 
   var radius = 3;
   g.selectAll("circle").remove();
   g
   .append("circle")
   		.attr("cx",function(d){return d[attrs[1]]})
   		.attr("cy",function(d){return 250 - steps})
   		.attr("r",function(d){return radius})
   g.append("circle")
   		.attr("cx",function(d){return d[attrs[2]]})
   		.attr("cy",function(d){return 250 - steps * 2})
   		.attr("r",function(d){return radius});
   g.append("circle")
   		.attr("cx",function(d){return d[attrs[3]]})
   		.attr("cy",function(d){return 250 - steps * 3})
   		.attr("r",function(d){return radius});
   	
   	
   	/**
	*   Attribute values creation
	*
	*/
   g.selectAll("text").remove();

   for(var j=1;j<attrs.length;j++)
   {   
   g.append("text")
   		.attr("x",function(d){return d[attrs[j]] + 5})
   		.attr("y",function(d){return 250 - steps * j - 5})
   		.text(function(d,i){
		var tempv = original_data[i][attrs[j]];
		if(tempv == "0-0")
		return "Unknown";
		else
		return tempv;})
   
   /*g
   .append("text")
   		.attr("x",function(d){return d[attrs[1]] + 5})
   		.attr("y",function(d){return 250 - steps - 5})
   		.text(function(d,i){return original_data[i][attrs[1]]})
   g.append("text")
   		.attr("x",function(d){return d[attrs[2]] + 5})
   		.attr("y",function(d){return 250 - steps * 2 - 5})
   		.text(function(d,i){return original_data[i][attrs[2]]});
   g.append("text")
   		.attr("x",function(d){return d[attrs[3]] + 5})
   		.attr("y",function(d){return 250 - steps * 3 - 5})
   		.text(function(d,i){return original_data[i][attrs[3]]});*/
	}
   	
   	/**
	*   Attribute name creation
	*
	*/
   g
   .append("text")
   		.attr("x",function(d){return d[attrs[3]]})
   		.attr("y",function(d){return 250 - steps * 3 - 25})
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
	transform();
	}
  }
  
  function movedown(){
     this.parentNode.appendChild(this);
    var clickcontrol = d3.select(this);
	
	if(clickcontrol.attr("id") > 1){
	var id = clickcontrol.attr("id");
	var previd = parseInt(clickcontrol.attr("id")) - 1;
	var tempstring = attrs[id];
    attrs[id] = attrs[previd];
    attrs[previd] = tempstring;
	transform();
	}
  }
  
}

