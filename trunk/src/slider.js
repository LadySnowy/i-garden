	function makeSlider(name)
	{
	//create contanier div
	var div=document.createElement("div");
	div.id=name;
	//make paragraoh for label
	var para=document.createElement("p");
	//make label
	var lab=document.createElement("label");
	lab.htmlFor="amount"+name;
	var node1=document.createTextNode(name+" pounds yeild:");//make this text inout to function
	//make input
	var inp=document.createElement("input");
	inp.type="text";
	inp.id="amount"+name;
	inp.style.border="0"; 
	inp.style.color="#f6931f";
	inp.style.fontWeight="bold";
	
	//add everthing to the paragraoh
	lab.appendChild(node1);
	para.appendChild(lab);
	para.appendChild(inp);
	
	//make slider div
	var div1=document.createElement("div");
	div1.id="slider"+name;
	
	//add everything to the div
	div.appendChild(para);
	div.appendChild(div1);

	var element=document.getElementById("vegList");
	element.appendChild(div);
	
	$( "#slider"+name ).slider({
            //range: true,
            min: 0,
            max: 500,
            value: 300,
            slide: function( event, ui ) {
                $( "#amount"+name ).val( ui.value );
            }
        });
        $( "#amount"+name ).val( $( "#slider"+name ).slider( "values", 0 ) );
	}	

