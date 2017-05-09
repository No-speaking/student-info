<?php

	//header("Content-type:text/html;charset=utf-8");
	// $geo=$_GET['geo'];
//成绩
	$level=$_GET["level"];
	//课程号
	$id=$_GET["id"];
	$q=$_GET["q"];
	$succ="成功";
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);

// update score set sscore=100 where id=201412004 and leid=6
	$result=mysql_query("UPDATE score SET sscore = '$level' where leid='$id' and id='$q'");
	echo "$level";
	echo "$id";
	echo "$q";
        if (mysql_affected_rows()) {
        	# code...
        	echo "$succ";
        }

	mysql_close($con);

	
	
?>