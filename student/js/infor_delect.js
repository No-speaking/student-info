var xmlHttp

			function del()
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
			var url="php/base_info_delete.php"
			url=url+"?q="+str
			url=url+"&sid="+Math.random()
			// alert(url);
			xmlHttp.onreadystatechange=stateChanged 
			xmlHttp.open("GET",url,true)
			//alert("geu")
			xmlHttp.send(null)
			} 




			

			//alert("1.1")

			function stateChanged() 
			{ 
			// alert("2xx");
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			 { 

			// alert("2");
			 document.getElementById("txtHint").innerHTML=xmlHttp.responseText 


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

    