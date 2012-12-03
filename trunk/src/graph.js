function getPlantInfo(callback, arr, callback1, arr1)
{
	//gets plants from the database
	$.get("getPlantsInfo.php", function (data)
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
			m.number=10;
			m.health=1;
			//alert("Data: " + m);
			//adds vegitable to array
			window.allList.push(m);
			//window.list.push(m);	
			
		}
		//alert(window.allList);
		callback(arr);
		callback1(arr1);
	});
	//alert(window.allList);
}

function foGra(arr)
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

	var vis = d3.select("#forcegraph").append("svg:svg")
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


	var node = vis.selectAll("circle.node")
		.data(nodes)
	  .enter().append("svg:circle")
		.attr("class", "node")
		.attr("cx", function(d, i) { return d.x; })
		//d.x=250+(150*(Math.cos((2*3.14/59)*(i+.5))));
		.attr("cy", function(d, i) { return d.y; })
		//d.y=200+(150*(Math.sin((2*3.14/59)*(i+.5)))); 
		.attr("r", raScale)
		.style("fill", function(d, i) { return calcColor(d.health); })
		.style("stroke", function(d, i) { return d3.rgb(calcColor(d.health)).darker(2); })
		.style("stroke-width", 1.5)
		.call(force.drag)
		.on("mouseover", fade(.1, vis, ""))
		.on("mouseout", fade(1, vis, "none"));
	//alert(nodes);
	//alert(arr[i].min_spacing);
	//function(d, i) { return d.min_spacing; })

/*	
var text = vis.selectAll("text").
  data(nodes).
  enter().
  append("svg:text").
  attr("x", function(datum, index) { return datum.x; }).
  attr("y", function(datum) { return datum.y; }).
  attr("dx", 1).
  attr("dy", 5).
  attr("text-anchor", "middle").
  text(function(d,i) { return d.name ;}).
  attr("fill", "black");
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
	  
	  link.attr("x1", function(d) { return d.source.x; })
		  .attr("y1", function(d) { return d.source.y; })
		  .attr("x2", function(d) { return d.target.x; })
		  .attr("y2", function(d) { return d.target.y; });

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

function foGraCircle(arr)
{
	///alert(arr);
	var w = d3.select("#botright").style("width").slice(0,-2)*.93,
		h = d3.select("#botright").style("height").slice(0,-2)-90,
		fill = d3.scale.category10(),
		nodes = arr.map(Object);
		nodes.forEach(function(o, i) {
			o.y = (h/2)+(150*(Math.sin((2*3.14/59)*(i+.5))));
			o.x = (w/2)+(150*(Math.cos((2*3.14/59)*(i+.5))));
		});
		links = new Array();
	//alert(fill);
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
		//links.push({source: nodes[1], target: nodes[2]});
		
		anta = nodes[x].antagonists.split(", ");
		
		if(anta.length > 1)
		{
			for(j in anta)
			{
				//alert(nodes[x] + " " + nodes[r_table[com[j]]]);
				links.push({source: nodes[x], target: nodes[r_table[anta[j]]], type: 200, str: 1, color: "#FF0000"});				
			}
		}
		//links.push({source: nodes[1], target: nodes[2]});
	
	}
	//links.push({source: nodes[1], target: nodes[2]});
	//alert(links);


	var vis = d3.select("#forcegraphcircle").append("svg:svg")
		.attr("width", w)
		.attr("height", h);

	var force = d3.layout.force()
		.nodes(nodes)
		.links(links)
		.size([w, h])
		.linkDistance(function(d) { return d.type; })
		//.linkStrength(function(d) { return d.str; })		
		.charge(1)
		.gravity(.15)
		.friction(.9)
		.start();
	
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


	var node = vis.selectAll("circle.node")
		.data(nodes)
	  .enter().append("svg:circle")
		.attr("class", "node")
		.attr("cx", function(d, i) { return d.x; })
		//d.x=250+(150*(Math.cos((2*3.14/59)*(i+.5))));
		.attr("cy", function(d, i) { return d.y; })
		//d.y=200+(150*(Math.sin((2*3.14/59)*(i+.5)))); 
		.attr("r", 8)
		.style("fill", function(d, i) { return calcColor(d.health); })
		.style("stroke", function(d, i) { return d3.rgb(calcColor(d.health)).darker(2); })
		.style("stroke-width", 1.5)
		.call(force.drag)
		.on("mouseover", fade(.1, vis, ""))
		.on("mouseout", fade(1, vis, "none"));
	//alert(nodes);
	//alert(arr[i].min_spacing);
	//function(d, i) { return d.min_spacing; })
	
	/*
	var text = vis.selectAll("text").
		  data(nodes).
		  enter().
		  append("svg:text").
		  attr("x", function(datum, index) { return datum.x; }).
		  attr("y", function(datum) { return datum.y; }).
		  attr("dx", 1).
		  attr("dy", 5).
		  attr("text-anchor", "middle").
		  text(function(d,i) { return d.name ;}).
		  attr("fill", "black");
	*/

	vis.style("opacity", 1e-6)
	  .transition()
		.duration(1000)
		.style("opacity", 1);

	//re-scatters on click
	d3.select("#forcegraphcircle").on("click", function() {
	  nodes.forEach(function(o, i) {
		o.x += (Math.random() - .5) * 40;
		o.y += (Math.random() - .5) * 40;
	  });
	  force.resume();
	});
}

function fade(opacity, vis) {
        return function(d, i) {
			//alert(d.id);
			vis.selectAll("circle").style("opacity", //opacity
			function(o) {
				if(o.id == d.id)
				{
					return 1;
				}
				//they say that debugging requeres more creativity than programing and so you can easily program something you can not debugging
				//which is to say fuck you, me!!
				//take the companions and antagonists plants for the o object make them into one array of numbers by removeing ", " and check if the selected node is in the array, this sets the opacity
                thisOpacity = (o.companions.split(", ").concat(o.antagonists.split(", ")).indexOf(d.id))>-1 ? 1 : opacity;
                this.setAttribute('opacity', thisOpacity);
                return thisOpacity;
            }
			);

            vis.selectAll("line").style("opacity", //opacity
			function(o) {
				//alert(o.source.id);
                return o.source.id === d.id || o.target.id === d.id ? 1 : opacity;
            }
			);
        };
    }