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

function plantGarden(arr)
{
	//alert(arr);
	var w = d3.select("#botright").style("width").slice(0,-2)*.93,
		h = d3.select("#botright").style("height").slice(0,-2)-130,
		raScale = 8,
		fill = d3.scale.category10(),
		//created an array called nodes containint all of the objects of the passed arr
		nodes = arr.map(Object);
		//adds extra attribute to each object in the nodes array
		nodes.forEach(function(o, i) {
			o.y = (h/2)+(150*(Math.sin((2*3.14/59)*(i+.5))));
			o.x = (w/2)+(150*(Math.cos((2*3.14/59)*(i+.5))));
			o.r = raScale;
		});
		
	links = new Array();
	//alert(d3.select("#botright").style("height"));
	//alert(nodes);
	var r_table = {};
	for( var i = 0; i < nodes.length; i++ ) {
		r_table[nodes[i].id] = i;
	}
	var compLink=0;
	//alert(r_table[58]);
	for(x in nodes)
	{
		//alert(nodes[x].companions);
		com = nodes[x].companions.split(", ");
		
		if(com.length > 1)
		{
			for(j in com)
			{
				//alert(nodes[x] + " " + nodes[r_table[com[j]]]);
				links.push({source: nodes[x], target: nodes[r_table[com[j]]], type: 100, str: .8, color: "#0000FF"});				
			}
		}
				
		anta = nodes[x].antagonists.split(", ");
		
		if(anta.length > 1)
		{
			for(j in anta)
			{
				//alert(nodes[x] + " " + nodes[r_table[com[j]]]);
				links.push({source: nodes[x], target: nodes[r_table[anta[j]]], type: 200, str: 1, color: "#FF0000"});				
			}
		}
			
	}
	//alert(links);

	vis = d3.select("#forcegraphcircle").append("svg:svg")
		.attr("width", w)
		.attr("height", h);
		
	

	var force = d3.layout.force()
		.nodes(nodes)
		.links(links)
		.size([w, h])
		.linkDistance(function(d) { return d.type; })
		//.linkStrength(function(d) { return d.str; })		
		.charge(0)
		.gravity(.15)
		.friction(.9)
		.start();
	/*
	var link = vis.selectAll("line.link")
      .data(links)
    .enter().insert("svg:line", "circle.node")	
      .attr("class", "link")
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; })
	  .style("stroke", function(d) { return d.color; } )
	  .style("stroke-width", 1.5);
	*/

	var node = vis.selectAll("circle.node")
		.data(nodes)
	  .enter().append("svg:circle")
		.attr("class", "node")
		.attr("cx", function(d, i) { return d.x; })
		//d.x=250+(150*(Math.cos((2*3.14/59)*(i+.5))));
		.attr("cy", function(d, i) { return d.y; })
		//d.y=200+(150*(Math.sin((2*3.14/59)*(i+.5)))); 
		.attr("r", function(d, i) { return d.min_spacing; })
		.style("fill", function(d, i) { return calcColor(d.health); })
		.style("stroke", function(d, i) { return d3.rgb(calcColor(d.health)).darker(2); })
		.style("stroke-width", 1.5)
		.call(force.drag)
	//	.on("mouseover", fade(.1, vis, ""))
	//	.on("mouseout", fade(1, vis, "none"))
	;
	//alert(nodes);
	//alert(arr[i].min_spacing);
	//function(d, i) { return d.min_spacing; })
/*
	var text = vis.selectAll("text").
		  data(nodes).
		  enter().
		  append("svg:text").
		  //attr("name", function(datum, index) { return datum.id; }).
		  attr("x", function(datum, index) { return datum.x; }).
		  attr("y", function(datum) { return datum.y; }).
		  attr("dx", 1).
		  attr("dy", 5).
		  style("font-size", "18 px").
          style("fill", "#5C5C5C").
          style("pointer-events", 'none').
		  text(function(d,i) { return d.name ;}).
		  style("display", "none");
*/		  
	vis.style("opacity", 1e-6)
	  .transition()
		.duration(1000)
		.style("opacity", 1);

	
	//handles the movement
	force.on("tick", function(e) {

	  // Push different nodes in different directions for clustering.
	 var k = 30 * e.alpha;
	  //alert(e.alpha);
	  
	  nodes.forEach(function(o, i) {
		o.y += k*(Math.sin((2*3.14/59)*(i+.5)));
		o.x += k*(Math.cos((2*3.14/59)*(i+.5)));
	  });	  
	/*  
	  link.attr("x1", function(d) { return d.source.x; })
		  .attr("y1", function(d) { return d.source.y; })
		  .attr("x2", function(d) { return d.target.x; })
		  .attr("y2", function(d) { return d.target.y; });
*/
	  node
		  .each(collide(.5))
		  .attr("cx", function(d) { return d.x; })
		  .attr("cy", function(d) { return d.y; })
		  .style("fill", function(d, i) { return calcColor(d.health); })
		  .style("stroke", function(d, i) { return d3.rgb(calcColor(d.health)).darker(2); });
	/*	  
	  text
	   .attr("x", function(d, i){ return d.x;})
	   .attr("y", function(d, i){ return d.y;});
	*/
	});
	
	// Resolve collisions between nodes.
	function collide(alpha) {
	  var quadtree = d3.geom.quadtree(nodes);
	  return function(d) {
		var r = d.r + raScale,
			nx1 = d.x - r,
			nx2 = d.x + r,
			ny1 = d.y - r,
			ny2 = d.y + r;
			//alert(d.r);
		quadtree.visit(function(quad, x1, y1, x2, y2) {
		  if (quad.point && (quad.point !== d)) {
			var x = d.x - quad.point.x,
				y = d.y - quad.point.y,
				l = Math.sqrt(x * x + y * y),
				r = d.r + quad.point.r;
			if (l < r) {
			  l = (l - r) / l * alpha;
			  d.x -= x *= l;
			  d.y -= y *= l;
			  quad.point.x += x;
			  quad.point.y += y;
			}
		  }
		  return x1 > nx2
			  || x2 < nx1
			  || y1 > ny2
			  || y2 < ny1;
		});
	  };
}


	//re-scatters on click
	d3.select("#forcegraph").on("click", function() {
	  nodes.forEach(function(o, i) {
		o.x += (Math.random() - .5) * 40;
		o.y += (Math.random() - .5) * 40;
	  });
	  force.resume();
	});
}