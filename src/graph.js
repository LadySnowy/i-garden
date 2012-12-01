function getPlantInfo(callback)
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
		callback();
	});
	//alert(window.allList);
}

function foGra()
{
	//alert(window.allList.length);
	var w = 500,
		h = 400,
		fill = d3.scale.category10(),
		nodes = window.allList.map(Object);
		nodes.forEach(function(o, i) {
			o.y = 200+(150*(Math.sin((2*3.14/59)*(i+.5))));
			o.x = 250+(150*(Math.cos((2*3.14/59)*(i+.5))));
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


	var vis = d3.select("#forcegraph").append("svg:svg")
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
		.call(force.drag);
	//alert(nodes);
	//alert(window.allList[i].min_spacing);
	//function(d, i) { return d.min_spacing; })

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

	  node.attr("cx", function(d) { return d.x; })
		  .attr("cy", function(d) { return d.y; })
		  .style("fill", function(d, i) { return calcColor(window.allList, i); })
		  .style("stroke", function(d, i) { return d3.rgb(calcColor(window.allList, i)).darker(2); });
	});


	//re-scatters on click
	d3.select("#forcegraph").on("click", function() {
	  nodes.forEach(function(o, i) {
		o.x += (Math.random() - .5) * 40;
		o.y += (Math.random() - .5) * 40;
	  });
	  force.resume();
	});
}