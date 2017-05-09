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
			var url="php/score_info_select.php"
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
			 			var leid=cut_base_infor[x].split(",")[0];
			 			var lename=cut_base_infor[x].split(",")[1];
			 			var sscore=cut_base_infor[x].split(",")[2];		 			
			 			var messbox=document.createElement("tr");
			 			var one=document.createElement("td");
			 			var two=document.createElement("td");
			 			var three=document.createElement("td"); 		
			 			//messbox.setAttribute("class","info");
			 			one.innerHTML=leid;
			 			two.innerHTML=lename;
			 			three.innerHTML=sscore;
				 		messbox.appendChild(one);
				 		messbox.appendChild(two);
				 		messbox.appendChild(three); 
						room.appendChild(messbox);
			 	}
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


    