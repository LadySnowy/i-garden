

<html>

<header>
<script src="js/d3.v2.min.js"></script>
<script>
	
	
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
		var svgh = 300;   
		var svg = d3.select("body").append("svg");
		
		var translateX = 250;
	   var translateY = 250;
	   var radius = 3;
	   var temp = 0;
	   
	   
	   
	   /**
		*   Data
		*
		*/
	   var original_data = [{"name":"Carrots","water":50,"sun":40,"soil":150,"com":"Test"},
					{"name":"Test","water":40,"sun":60,"soil":180,"com":"Carrots"},
					{"name":"AppleTree","water":60,"sun":20,"soil":120,"com":null}];
	   var data = original_data.clone();
	   
	   
	   var attrs = new Array();
	   attrs[0] = "name";
	   attrs[1] = "com";
	   attrs[2] = "water";
	   attrs[3] = "sun";
	   attrs[4] = "soil";
	   
	   
	   var waterScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){return data.water;})), Math.max.apply(Math,data.map(function(data){return data.water;}))])
						 .range([0, svgw]);
	   var sunScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){return data.sun;})), Math.max.apply(Math,data.map(function(data){return data.sun;}))])
						 .range([0, svgw]);
		var soilScale = d3.scale.linear()
						 .domain([Math.min.apply(Math,data.map(function(data){return data.soil;})), Math.max.apply(Math,data.map(function(data){return data.soil;}))])
						 .range([0, svgw]);
					 
		for(var i = 0; i < data.length; i++){
		data[i].water = waterScale(original_data[i].water);
		data[i].sun = sunScale(original_data[i].sun);
		data[i].soil = soilScale(original_data[i].soil);
		}
	
	
	
	initialize();
	transform();
	
	var g;
	
	
	
   

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
		d3.selectAll("g").attr("class","unfocused")
		//Change attributes of hover
		ag.attr("class","hover")
		//Change attributes of companions plants
		d3.select("g#"+d.com).attr("class","compath")
		})
		.on("mouseout", function(d) {
		//Reset
		d3.selectAll("g").attr("class","")
		})
	  
	  
	   /**
		*   Draw background grids
		*
		*/
	   d3.select("svg").append("line")
			.attr("class","baseline")
			.attr("x1",translateX)
			.attr("y1",translateY+250)
			.attr("x2",translateX+svgw)
			.attr("y2",translateY+250)
			
		for(var i = 1; i<4; i++){
		d3.select("svg").append("line")
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
		for(var i = 2; i<attrs.length; i++){
		d3.select("svg").append("text")
			.attr("class","gridtext")
			.attr("x",0)
			.attr("y",0)
			.text(attrs[i]);
			
		
		}
		
		/**
		*   Draw initial grids' text arrangement box 
		*
		*/
		for(var i = 2; i<attrs.length; i++){
		d3.select("svg").append("image")
			.attr("class","gridcontrol")
			.attr("x",0)
			.attr("y",0)
			.attr("width",10)
			.attr("height",10);
			
		d3.select("svg").append("image")
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
	d3.selectAll(".gridtext").remove();
	for(var i = 2; i<attrs.length; i++){
	d3.select("svg").append("text")
		.attr("class","gridtext")
		.attr("id",i)
   		.attr("x",translateX+svgw+50)
   		.attr("y",translateY+250 - steps * (i-1))
		.text(attrs[i])
		
	}
	
	
	/**
	*   Draw grids' text arrangement box 
	*
	*/
	d3.selectAll(".gridcontrol").remove();
	for(var i = 2; i<attrs.length; i++){
	d3.select("svg").append("image")
		.attr("class","gridcontrol")
		.attr("id",i)
		.attr("x",translateX+svgw+50)
		.attr("y",translateY+250 - steps * (i-1) - 30)
		.attr("width",16)
		.attr("height",16)
		.attr("xlink:href","images/up.png")
		.on("click",moveup)
		
	d3.select("svg").append("image")
		.attr("class","gridcontrol")
		.attr("id",i)
		.attr("x",translateX+svgw+50)
		.attr("y",translateY+250 - steps * (i-1) + 5)
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
  .attr("d",function(d){return "m "+svgw/2+" "+ 250 +" l " + (d[attrs[2]]-svgw/2) + " -" + steps + " l " + (d[attrs[3]]-d[attrs[2]]) + " -" + steps + " l " + (d[attrs[4]]-d[attrs[3]]) + " -" + steps })
  
  
  
	/**
	*   Dots creation
	*
	*/	 
   var radius = 3;
   g.selectAll("circle").remove();
   g
   .append("circle")
   		.attr("cx",function(d){return d[attrs[2]]})
   		.attr("cy",function(d){return 250 - steps})
   		.attr("r",function(d){return radius})
   g.append("circle")
   		.attr("cx",function(d){return d[attrs[3]]})
   		.attr("cy",function(d){return 250 - steps * 2})
   		.attr("r",function(d){return radius});
   g.append("circle")
   		.attr("cx",function(d){return d[attrs[4]]})
   		.attr("cy",function(d){return 250 - steps * 3})
   		.attr("r",function(d){return radius});
   	
   	
   	/**
	*   Attribute values creation
	*
	*/
   g.selectAll("text").remove();	
   g
   .append("text")
   		.attr("x",function(d){return d[attrs[2]] + 5})
   		.attr("y",function(d){return 250 - steps})
   		.text(function(d,i){return original_data[i][attrs[2]]})
   g.append("text")
   		.attr("x",function(d){return d[attrs[3]] + 5})
   		.attr("y",function(d){return 250 - steps * 2})
   		.text(function(d,i){return original_data[i][attrs[3]]});
   g.append("text")
   		.attr("x",function(d){return d[attrs[4]] + 5})
   		.attr("y",function(d){return 250 - steps * 3})
   		.text(function(d,i){return original_data[i][attrs[4]]});
   	
   	/**
	*   Attribute name creation
	*
	*/
   g
   .append("text")
   		.attr("x",function(d){return d[attrs[4]]})
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
	
	if(clickcontrol.attr("id") > 2){
	var id = clickcontrol.attr("id");
	var previd = parseInt(clickcontrol.attr("id")) - 1;
	var tempstring = attrs[id];
    attrs[id] = attrs[previd];
    attrs[previd] = tempstring;
	transform();
	}
  }
  
  

</script>


<LINK href="style.css" rel="stylesheet" type="text/css">
</header>

<body>
</body>

</html>