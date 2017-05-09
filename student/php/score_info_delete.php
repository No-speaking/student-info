<?php

	header("Content-type:text/html;charset=utf-8");
	//echo "<h2>PHP 很有趣！</h2>";
	// $geo=$_GET['geo'];
	//$q=$_GET["q"];
	$delnum=$_GET["delnum"];
	$id=$_GET["id"];
	$q=$_GET["q"];
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);
	// $sql="create procedure proce55()
	// begin
	// DELETE FROM score  WHERE leid ='$id' and id='$q'
	// end;
	// ";
	// //创建存储过程
	// mysql_query($sql);
	// $sql="call student.proce55();";
	// $result = mysql_query($sql);



	$result=mysql_query("DELETE FROM score  WHERE leid ='$id' and id='$q'");
	# code...

    echo "$delnum";



	//echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../delete.html'\">";
	mysql_close($con);

	
	
?>