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
		//	alert(str);
			var url="php/base_info_select.php"
			url=url+"?q="+str
			url=url+"&sid="+Math.random()
		//	alert(url);
			xmlHttp.onreadystatechange=stateChanged 
			xmlHttp.open("GET",url,true)
			xmlHttp.send(null)
			} 
			//alert("1.1")

			function stateChanged() 
			{ 
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			 { 

			 //	alert("2");



			 	var base_infor=xmlHttp.responseText;	//alert(base_infor);
			 	var cut_base_infor=base_infor.split("<br />");
			 	var cut_base_inforlength=cut_base_infor.length;
			 	// alert(cutAllmapLength);
			 
			 	// var objs=document.getElementById("row").getElementsByTagName("div");
			 	//var select_table=document.getElementById("select_table");

			 	for(var x=0;x<cut_base_inforlength-1;x++){
			 	//	alert("3");
			 	//	alert("3.1");

			 			var base_id=cut_base_infor[x].split(",")[0];
			 			var base_class=cut_base_infor[x].split(",")[1];			 			
			 			var base_name=cut_base_infor[x].split(",")[2];			 			
			 			var base_sex=cut_base_infor[x].split(",")[3];
			 			var base_grade=cut_base_infor[x].split(",")[4];
			 			var base_daoshi=cut_base_infor[x].split(",")[5];
			 			var base_department=cut_base_infor[x].split(",")[6];
			 			var base_major=cut_base_infor[x].split(",")[7];
	//alert(base_id);	
			 			var xue=document.getElementById("xuehao");
			 			var ban=document.getElementById("banji");
			 			var xing=document.getElementById("xingming");
			 			var xingb=document.getElementById("xingbie");
			 			var nian=document.getElementById("nianji");
			 			var dao=document.getElementById("daoshi");
			 			var yuan=document.getElementById("yuanxi");
			 			var zhuan=document.getElementById("zhuanye");
			 			//alert(xue);

						xue.innerHTML=base_id;
			 			ban.value=base_class;
			 			xing.innerHTML=base_name;
			 			xingb.innerHTML=base_sex;
			 			nian.value=base_grade;
			 			dao.value=base_daoshi;
			 			yuan.value=base_department;
			 			zhuan.value=base_major;
			 			

			 		}
			 	}
			 // document.getElementById("bc").innerHTML=cutAllmap[1]; 
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


    