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

			 			//alert(level);
			 			
			 					 			// alert("1")
			 		var messbox=document.createElement("tr");
			 		// messbox.setAttribute("class","single-features messbox");
			 		// alert("2")
			 		
			 			var one=document.createElement("td");
			 			var two=document.createElement("td");
			 			var three=document.createElement("td");
			 			var four=document.createElement("td");
			 			//alert("3333")
			 			var fourinput=document.createElement("input")

			 			var five=document.createElement("td");
			 			 var six=document.createElement("td");
						var seven=document.createElement("td");

			 			 var xiugai=document.createElement("a");
			 			 var quxiao=document.createElement("button");
			 			var queding=document.createElement("a");

			 			//messbox.setAttribute("class","info");
			 			xiugai.setAttribute("class","btn-success btn")
			 			queding.setAttribute("class","btn-success btn")
			 			quxiao.setAttribute("class","btn-inverse btn")
			 			//alert("1111")
			 			fourinput.setAttribute("readonly","readonly")
			 			fourinput.setAttribute("style","border:none")

			 			//alert("2222")

			 			one.setAttribute("id",x+"update0")
			 			two.setAttribute("id",x+"update1")
			 			three.setAttribute("id",x+"update2")
			 			fourinput.setAttribute("id",x+"update3")
			 			xiugai.setAttribute("id",x+"update")
			 			queding.setAttribute("id",x+"update5")

			 			xiugai.setAttribute("onClick","update(this)")
			 			queding.setAttribute("onClick","ok(this)")


			 			one.innerHTML=gid;
			 			two.innerHTML=goodbadinfor;
			 			three.innerHTML=time;
			 			fourinput.value=level;

			 			xiugai.innerHTML="修改"
			 			queding.innerHTML="确定"
			 			quxiao.innerHTML="取消"

			 			four.appendChild(fourinput)			 	
			 			five.appendChild(xiugai)
			 			six.appendChild(queding)
			 			seven.appendChild(quxiao)
			 	
				 		messbox.appendChild(one);
				 		messbox.appendChild(two);
				 		messbox.appendChild(three);
				 		messbox.appendChild(four);
				 	
				 		messbox.appendChild(five);
				 		messbox.appendChild(six);
				 		messbox.appendChild(seven);
						// alert("8")
						room.appendChild(messbox);

			 			

			 		// }
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

    function update(t){
	document.getElementById(t.id+"3").removeAttribute('readonly');
	document.getElementById(t.id+"3").focus();
	
    }
    function ok(t){
	var num=t.id;
	var update=num.split("5")[0];
	var id1=document.getElementById(update+"0").innerHTML;
	var level=document.getElementById(update+"3").value
	//alert(id1+"0000")
	setLevel(level,id1);
}
function setLevel(level,id1)
{
	xmlHttp=setGetXmlHttpObject()
			if (xmlHttp==null)
			  {
			  alert ("Browser does not support HTTP Request")
			  return
			  } 
			var url="php/good_info_update.php?level="+level+"&id="+id1
			//alert(url)
			// alert(url);
			xmlHttp.onreadystatechange=setstateChanged 
			xmlHttp.open("GET",url,true)
			xmlHttp.send(null)
}
function setstateChanged() 
			{ 
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			 { 
			 	
					
			 		
			 	}
			 } 
			

			function setGetXmlHttpObject()
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
			  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			 }
			return xmlHttp;
			}
