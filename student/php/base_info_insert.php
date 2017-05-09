<?php

	header("Content-type:text/html;charset=utf-8");
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	 	die('Could not connect: ' . mysql_error());
	 } 
	mysql_select_db("student", $con);
	$sql="create procedure proce1()
	begin
	SELECT * FROM baseinfo  WHERE id = '$_POST[xuehao1]'
	end;
	";
	//创建存储过程
	mysql_query($sql);
	$sql="call student.proce1();";
	$result = mysql_query($sql);
	if(mysql_fetch_array($result)){
   			echo "<script type='text/javascript'>alert('学号已存在，请重新输入！');</script>";
   		    echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../insert.html'\">";
 	}
 	else {
 		echo "<script type='text/javascript'>alert('成功！');</script>";
 		mysql_query("INSERT INTO baseinfo VALUES('$_POST[xuehao1]','$_POST[banji1]','$_POST[xingming1]','$_POST[xingbie1]','$_POST[nianji1]','$_POST[daoshi1]','$_POST[yuanxi1]','$_POST[zhuanye1]')");
		# code...
		echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../insert.html'\">";
	}

	mysql_close($con);
?>