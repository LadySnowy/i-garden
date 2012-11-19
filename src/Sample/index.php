

<html>

<header>
<script src="js/d3.v2.min.js"></script>
<script>
	
	
    
	
	//Setting up svg
	var svgw = 700;
	var svgh = 300;
    
       
   
   //Get data
   var data = [{"name":"Carrots","water":30,"sun":40,"soil":150,"com":"Test"},
   				{"name":"Test","water":50,"sun":60,"soil":180,"com":"Carrots"},
   				{"name":"AppleTree","water":40,"sun":20,"soil":120,"com":null}];
   				
   				 
   var steps = 100;
      
   var svg = d3.select("body").append("svg");
   
   var g=svg.selectAll("g").data(data).enter()
  .append("g")
  .attr("transform",function(d,i) {return "translate(250, 250)";})
  .attr("id",function(d){return d.name;});
  
   g.on("mouseover", function(d) {g.selectAll("#"+d.name+" circle").style("opacity","1")
   									g.selectAll("#"+d.name+" text").style("opacity","1")
   									d3.select("#"+d.com + " path").style("stroke","green")
   									d3.select("#"+d.com + " .name").style("opacity","1").style("fill","green")
   									});
   g.on("mouseout", function(d) {g.selectAll("#"+d.name+" circle").style("opacity","0")
   								g.selectAll("#"+d.name+" text").style("opacity","0")
   								d3.select("#"+d.com + " path").style("stroke","lime")
   								d3.select("#"+d.com + " .name").style("opacity","0").style("fill","black")});
   
   g
  .append("path")
  .attr("d",function(d){return "m 250 250 l " + d.water + " -" + steps + " l " + d.sun + " -" + steps + " l " + d.soil + " -" + steps })
  
   g
   .append("circle")
   		.attr("cx",function(d){return 250 + d.water})
   		.attr("cy",function(d){return 250 - steps})
   		.attr("r",function(d){return 3})
   g.append("circle")
   		.attr("cx",function(d){return 250 + d.water + d.sun})
   		.attr("cy",function(d){return 250 - steps * 2})
   		.attr("r",function(d){return 3});
   g.append("circle")
   		.attr("cx",function(d){return 250 + d.water + d.sun + d.soil})
   		.attr("cy",function(d){return 250 - steps * 3})
   		.attr("r",function(d){return 3});
   		
   g
   .append("text")
   		.attr("x",function(d){return 250 + d.water + 5})
   		.attr("y",function(d){return 250 - steps})
   		.text(function(d){return d.water})
   g.append("text")
   		.attr("x",function(d){return 250 + d.water + d.sun + 5})
   		.attr("y",function(d){return 250 - steps * 2})
   		.text(function(d){return d.sun});
   g.append("text")
   		.attr("x",function(d){return 250 + d.water + d.sun + d.soil + 5})
   		.attr("y",function(d){return 250 - steps * 3})
   		.text(function(d){return d.soil});
   		
   g
   .append("text")
   		.attr("x",function(d){return 250 + d.water + d.sun + d.soil + 5})
   		.attr("y",function(d){return 250 - steps * 3 - 25})
   		.attr("class","name")
   		.text(function(d){return d.name})
  
  
  
   

	    

</script>


<LINK href="style.css" rel="stylesheet" type="text/css">
</header>

<body>
</body>

</html>