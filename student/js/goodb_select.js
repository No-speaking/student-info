var xmlHttp

			function info()
			{
			
			//alert("1");
			xmlHttp=GetXmlHttpObject();
			if (xmlHttp==null)
			  {
			  alert ("Browser does not support HTTP Request")
			  return
			  } 
			var str=document.getElementById("num").value;
			//alert(str);
			var url="php/good_info_select.php"
			url=url+"?q="+str
			url=url+"&sid="+Math.random()
			//alert(url);
			xmlHttp.onreadystatechange=stateChanged 
			xmlHttp.open("GET",url,true)
			xmlHttp.send(null)
			} 
			//alert("1.1")

			function stateChanged() 
			{ 
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			 { 

			 	//alert("2");



			 	var base_infor=xmlHttp.responseText;	//alert(base_infor);
			 	var cut_base_infor=base_infor.split("<br />");
			 	var cut_base_inforlength=cut_base_infor.length;
			 	

			 	var room=document.getElementById("goodbad");

			 	for(var x=0;x<cut_base_inforlength-1;x++){

			 			var gid=cut_base_infor[x].split(",")[0];
			 			var goodbadinfor=cut_base_infor[x].split(",")[1];


			 			//alert(gid)
			 			var time=cut_base_infor[x].split(",")[2];
			 			// alert(time)
			 			var level=cut_base_infor[x].split(",")[3];

			 		//	alert(level);
			 			
			 					 			// alert("1")
			 		var messbox=document.createElement("tr");
			 		// messbox.setAttribute("class","single-features messbox");
			 		// alert("2")
			 		
			 			var one=document.createElement("td");
			 			var two=document.createElement("td");
			 			var three=document.createElement("td");
			 			var four=document.createElement("td");

			 			one.innerHTML=gid;
			 			two.innerHTML=goodbadinfor;
			 			three.innerHTML=time;
			 			four.innerHTML=level;

			 	
				 		messbox.appendChild(one);
				 		messbox.appendChild(two);
				 		messbox.appendChild(three);
				 		messbox.appendChild(four);
				 	
				 		
						room.appendChild(messbox);
				
			 	}
			 // document.getElementById("bc").innerHTML=cutAllmap[1]; 
			 } 
			}
			

			function GetXmlHttpObject()
			{
			var xmlHttp=null;
			try
			 {
			 // Firefox, Opera 8.0+, Safari
			 xmlHttp=new XMLHttpRequest();
			 }
			catch (e)
			 {
			 // Internet Explorer
			 try
			  {
			  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
			  }
			 catch (e)
			  {
			  xmlHttp=new AtiveXObject("Microsoft.XMLHTTP");
			  }
			 }
			return xmlHttp;
			}
		//acCar();

    