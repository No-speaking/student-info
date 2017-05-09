<?php

	header("Content-type:text/html;charset=utf-8");
	//echo "<h2>PHP 很有趣！</h2>";
	// $geo=$_GET['geo'];
	//$q=$_GET["q"];
	$x=$_POST['showx'];
	
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);

$result = mysql_query("SELECT * FROM baseinfo  WHERE id = '$_POST[xuehao1]'");

	// while($row = mysql_fetch_array($result))
	//   {
	// 	  echo $row['id'];
	// 	  echo "haha";
	//   }

	  if(mysql_fetch_array($result)){
	  	echo "$x";
   			 for ($i=0; $i < $x; $i++) { 
   			 	# code...
   			 	$in="insert1";
   			 	$inn="insert0";
   			 	echo "$in";
   			 	echo "$inn";
   			 	$innn=$in.$i;
   			 	$innnn=$inn.$i;
   			 	echo "$innn";
   			 	echo "$innnn";
   			 	mysql_query("UPDATE score set sscore='$_POST[$innn]' where id='$_POST[xuehao1]' and leid='$_POST[$innnn]'");
   			 }
	  	

   			 echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../select2.html'\">";
 		 }
 	else {
 		echo "<script type='text/javascript'>alert('该学生不存在！');</script>";
 		
	# code...
	echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../insert2.html'\">";
}

	mysql_close($con);
?>