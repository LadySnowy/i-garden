	function makeSlider(arr,itemNum,units,min,max)
	{
	//create vegitable contanier div
	var div=document.createElement("div");
	div.id=arr[itemNum][1];
	
	//make paragraph for label
	var para=document.createElement("p");
	//make label
	var lab=document.createElement("label");
	lab.htmlFor="amount"+arr[itemNum][1];
	var node1=document.createTextNode(arr[itemNum][1]+" yeild:");
	
	//make input
	var inp=document.createElement("input");
	inp.type="text";
	inp.id="amount"+arr[itemNum][1];
	inp.style.border="0"; 
	inp.style.color="#f6931f";
	inp.style.fontWeight="bold";
	
	//add everthing to the paragraoh
	lab.appendChild(node1);
	para.appendChild(lab);
	para.appendChild(inp);
	
	//make slider div
	var div1=document.createElement("div");
	div1.id="slider"+arr[itemNum][1];
	
	//make paragraph for min max label
	var para2=document.createElement("p");
	
	//make min label
	var lab2=document.createElement("label");
	//lab.htmlFor="amount"+arr[itemNum][1];
	var node1=document.createTextNode(min);
	
	var para3=document.createElement("p");
	para3.style.textAlign="right";
	//make max label
	var lab3=document.createElement("label");	
	var node2=document.createTextNode(max);
	
		
	lab2.appendChild(node1);
	lab3.appendChild(node2);
	
	para2.appendChild(lab2);
	para3.appendChild(lab3);
	
	div1.appendChild(para2);
	div1.appendChild(para3);
	
	//add everything to the vegitable contanier div
	div.appendChild(para);
	div.appendChild(div1);
	
	//add vegitable contanier to vegList
	var element=document.getElementById("vegList");
	element.appendChild(div);
	
	$( "#slider"+arr[itemNum][1] ).slider({
            //range: true,
            min: min,
            max: max,
            value: arr[itemNum][37],
            slide: function( event, ui ) {	
				arr[itemNum][37] = ui.value;
                $( "#amount"+arr[itemNum][1] ).val(arr[itemNum][37] + " " + units);
				//( ui.value + " " + units);
            }
        });
        $( "#amount"+arr[itemNum][1] ).val( $( "#slider"+arr[itemNum][1]).slider( "values", 0 ) + " " + units );
	}	

