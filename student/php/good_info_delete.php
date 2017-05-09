<?php

	header("Content-type:text/html;charset=utf-8");
	//echo "<h2>PHP 很有趣！</h2>";
	// $geo=$_GET['geo'];
	//$q=$_GET["q"];
	$delnum=$_GET["delnum"];
	$id=$_GET["id"];
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);

	// $sql="create procedure proce56()
	// begin
	// DELETE FROM goodbad  WHERE gid ='$id'
	// end;
	// ";
	// //创建存储过程
	// mysql_query($sql);
	// $sql="call student.proce56();";
	// $result = mysql_query($sql);
	//$sql = mysql_query("DELETE * FROM baseinfo  WHERE id = '".$q."'");
	

	 //  if(mysql_query("DELETE FROM baseinfo  WHERE id = '".$q."'")){
  //   echo "操作成功";
  // }else{
  //   echo "操作失败";
  // }
	$result=mysql_query("DELETE FROM goodbad  WHERE gid ='$id'");
	# code...

    echo "$delnum";



	//echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../delete.html'\">";
	mysql_close($con);

	
	
?>