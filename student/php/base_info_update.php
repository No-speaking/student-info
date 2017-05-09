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
	


	if (mysql_query("UPDATE baseinfo SET class = '$_POST[banji1]',grade='$_POST[nianji1]',daoshi='$_POST[daoshi1]',department='$_POST[yuanxi1]',major='$_POST[zhuanye1]'
WHERE id = '$_POST[num1]'")) {
	# code...
	echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../select.html'\">";
}


	//echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../delete.html'\">";
	mysql_close($con);
?>