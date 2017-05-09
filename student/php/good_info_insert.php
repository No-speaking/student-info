<?php

	header("Content-type:text/html;charset=utf-8");
	//echo "<h2>PHP 很有趣！</h2>";
	// $geo=$_GET['geo'];
	//$q=$_GET["q"];
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);


// mysql_select_db("student", $con);
// 	$sql="create procedure proce1()
// 	begin
// 	SELECT * FROM baseinfo  WHERE id = '$_POST[xuehao1]'
// 	end;
// 	";
// 	//创建存储过程
// 	mysql_query($sql);
// 	$sql="call student.proce1();";
// 	$result = mysql_query($sql);




	 $result = mysql_query("SELECT * FROM baseinfo  WHERE id = '$_POST[xuehao1]'");


	if(mysql_fetch_array($result)){
	  	mysql_query("INSERT INTO goodbad (id,goodinfo,time,level) VALUES('$_POST[xuehao1]','$_POST[jiangcheng1]','$_POST[time1]','$_POST[jibie1]')");

   		 echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../insert1.html'\">";
 	}
 	else {
 		echo "<script type='text/javascript'>alert('该学生不存在！');</script>";
 		
	# code...
	echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../insert1.html'\">";
	}

	mysql_close($con);
?>