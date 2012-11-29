

<html>

<header>
<script src="js/d3.v2.min.js"></script>
<script>
	
       
   
   /**
	*   Data
	*
	*/
   var data = [{"name":"Carrots","water":30,"sun":40,"soil":150,"com":"Test"},
   				{"name":"Test","water":50,"sun":60,"soil":180,"com":"Carrots"},
   				{"name":"AppleTree","water":40,"sun":20,"soil":120,"com":null}];
   
   
   var attrs = new Array();
   attrs[0] = "name";
   attrs[1] = "com";
   attrs[2] = "water";
   attrs[3] = "sun";
   attrs[4] = "soil";
   
   var translateX = 250;
   var translateY = 250;
   		
   /**
	*   Initial setup
	*
	*/				 
   	var steps = 100;
	var svgw = 700;
	var svgh = 300;   
	var svg = d3.select("body").append("svg");
   
   var g=svg.selectAll("g").data(data).enter()
  .append("g")
  .attr("transform",function(d,i) {return "translate("+translateX+", "+translateY+")";})
  .attr("id",function(d){return d.name;});
  
  
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
		
	for(var i = 1; i<5; i++){
	d3.select("svg").append("line")
		.attr("class","grids")
		.attr("x1",translateX)
		.attr("y1",translateY+250 - steps * i)
		.attr("x2",translateX+svgw)
		.attr("y2",translateY+250 - steps * i)
	}
	
	for(var i = 2; i<attrs.length; i++){
	d3.select("svg").append("text")
		.attr("class","gridtext")
   		.attr("x",translateX+svgw+10)
   		.attr("y",translateY+250 - steps * (i-1))
		.text(attrs[i]);
	}
		
  
   /**
	*   Mouse events
	*
	*/
   g.on("mouseover", function(d) {	
   
   	//Change attributes of all vegetables
   	g.selectAll("path").style("opacity","0.2")
	
	//Change attributes of selected vegetable								
	g.selectAll("#"+d.name+" circle").style("opacity","1")
	g.selectAll("#"+d.name+" text").style("opacity","1")
	g.select("#"+d.name + " path").style("opacity","1")
	g.select("#"+d.name + " path").style("stroke","green")
	
	//Change attributes of XXX plants
	g.select("#"+d.com + " path").style("stroke","red")
	g.select("#"+d.com + " .name").style("opacity","1").style("fill","red")
	});

   g.on("mouseout", function(d) {
   
    //Change all vegetables back
   	g.selectAll("path").style("opacity","1")
   	
   	//Change the selected vegetable back
	g.selectAll("#"+d.name+" circle").style("opacity","0")
	g.selectAll("#"+d.name+" text").style("opacity","0")
	g.select("#"+d.name + " path").style("stroke","lime")
	
	//Change the XXX back
	g.select("#"+d.com + " path").style("stroke","lime")
	g.select("#"+d.com + " .name").style("opacity","0").style("fill","black")
	});
	
   
   /**
	*   Draw initial paths
	*
	*/
   g
  .append("path")
  .attr("d",function(d){return "m 250 250 l " + d[attrs[2]] + " -" + steps + " l " + d[attrs[3]] + " -" + steps + " l " + d[attrs[4]] + " -" + steps })
  
  
  
	/**
	*   Dots creation
	*
	*/		  
   var radius = 3;
   g
   .append("circle")
   		.attr("cx",function(d){return 250 + d[attrs[2]]})
   		.attr("cy",function(d){return 250 - steps})
   		.attr("r",function(d){return radius})
   g.append("circle")
   		.attr("cx",function(d){return 250 + d[attrs[2]] + d[attrs[3]]})
   		.attr("cy",function(d){return 250 - steps * 2})
   		.attr("r",function(d){return radius});
   g.append("circle")
   		.attr("cx",function(d){return 250 + d[attrs[2]] + d[attrs[3]] + d[attrs[4]]})
   		.attr("cy",function(d){return 250 - steps * 3})
   		.attr("r",function(d){return radius});
   	
   	
   	/**
	*   Attribute texts creation
	*
	*/		
   g
   .append("text")
   		.attr("x",function(d){return 250 + d[attrs[2]] + 5})
   		.attr("y",function(d){return 250 - steps})
   		.text(function(d){return d[attrs[2]]})
   g.append("text")
   		.attr("x",function(d){return 250 + d[attrs[2]] + d[attrs[3]] + 5})
   		.attr("y",function(d){return 250 - steps * 2})
   		.text(function(d){return d[attrs[3]]});
   g.append("text")
   		.attr("x",function(d){return 250 + d[attrs[2]] + d[attrs[3]] + d[attrs[4]] + 5})
   		.attr("y",function(d){return 250 - steps * 3})
   		.text(function(d){return d[attrs[4]]});
   	
   	/**
	*   Attribute name creation
	*
	*/		
   g
   .append("text")
   		.attr("x",function(d){return 250 + d[attrs[2]] + d[attrs[3]] + d[attrs[4]] + 5})
   		.attr("y",function(d){return 250 - steps * 3 - 25})
   		.attr("class","name")
   		.text(function(d){return d[attrs[0]]})
  
  
  
    

	    

</script>


<LINK href="style.css" rel="stylesheet" type="text/css">
</header>

<body>
</body>

</html>