function plantGardenStraight()
{	
	//create site
	//<svg height=site.lenght*24 width=site.width*24 xmlns="http://www.w3.org/2000/svg">
	var plot=document.createElementNS("http://www.w3.org/2000/svg", "svg");
	plot.setAttribute("height", window.site.lenght*24);
	plot.setAttribute("width", window.site.width*24);
	plot.id="garden";
	
	//create rectangle
	//<rect x="0" y="0" width=site.width*24 height=site.lenght*24 style="fill:brown;" />
	var rec1=document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rec1.setAttribute("x", 0);
	rec1.setAttribute("y", 0);
	rec1.setAttribute("width", window.site.width*24);
	rec1.setAttribute("height", window.site.lenght*24);
	rec1.style.fill = '#83512D';
	
	plot.appendChild(rec1);
	
	var locx=0;
	var locy=window.list[0][9];
	for(x in list)
	{
		for(var i=0; i<window.list[x][37]; i++)
		{
			//create circle
			//<circle id="greencircle" cx="30" cy="30" r="15" fill="green" />
			var cir1=document.createElementNS("http://www.w3.org/2000/svg", "circle");
			locx=locx+window.list[x][9];
			if(locx+window.list[x][9]>window.site.width*24)
			{
				locx=window.list[x][9];
				locy=locy+(window.list[x][9]*2);
			}
			cir1.setAttribute("cx", locx);
			locx=locx+window.list[x][9];
			cir1.setAttribute("cy", locy);
			cir1.setAttribute("r", window.list[x][9]);
			cir1.setAttribute("class", window.list[x][1]);
			cir1.style.fill = 'green';
		
			plot.appendChild(cir1);
		}
	}
	
	
	//add images contanier to plantLayout
	var element=document.getElementById("plantLayout");
	element.appendChild(plot);	
}	