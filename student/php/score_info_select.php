<?php

	//header("Content-type:text/html;charset=utf-8");
	// $geo=$_GET['geo'];
	$q=$_GET["q"];
	$con = mysql_connect("127.0.0.1:3306","root","root");
	if (!$con) {
	  die('Could not connect: ' . mysql_error());
	  } 

	mysql_select_db("student", $con);

// SELECT l.leid,l.lename,c.sscore  FROM score c INNER JOIN 
// lesson l ON c.leid=l.leid inner join baseinfo b on c.id=b.id
	$result = mysql_query("SELECT l.leid,l.lename,c.sscore  FROM score c INNER JOIN 
lesson l ON c.leid=l.leid inner join baseinfo b on c.id=b.id where b.id='$q'");

	while($row = mysql_fetch_array($result))
	  {
		  echo $row['leid'] . "," . $row['lename']. "," . $row['sscore'];
		  echo "<br />";
	  }

	mysql_close($con);

	
	
?>