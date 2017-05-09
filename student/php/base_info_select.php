<?php

	//header("Content-type:text/html;charset=utf-8");
	// $geo=$_GET['geo'];
	$q=$_GET["q"];
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);


	
	// mysql_select_db("student", $con);
	// $sql="create procedure proce1()
	// begin
	// SELECT * FROM baseinfo  WHERE id = '$_POST[xuehao1]'
	// end;
	// ";
	// //创建存储过程
	// mysql_query($sql);
	// $sql="call student.proce1();";
	// $result = mysql_query($sql);


	$result = mysql_query("SELECT * FROM baseinfo  WHERE id = '".$q."'");

	while($row = mysql_fetch_array($result))
	  {
		  echo $row['id'] . "," . $row['class']. "," . $row['name']. "," . $row['sex']. "," . $row['grade']."," . $row['daoshi']. "," . $row['department']. "," . $row['major'];
		  echo "<br />";
	  }

	mysql_close($con);

	
	
?>