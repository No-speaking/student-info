<?php
header("Content-type:text/html;charset=utf-8");
$con = mysql_connect("127.0.0.1:3306","root","root");

//error_reporting(0);



function encrypt($string,$operation,$key=''){ 
    $key=md5($key); 
    $key_length=strlen($key); 
      $string=$operation=='D'?base64_decode($string):substr(md5($string.$key),0,8).$string; 
    $string_length=strlen($string); 
    $rndkey=$box=array(); 
    $result=''; 
    for($i=0;$i<=255;$i++){ 
           $rndkey[$i]=ord($key[$i%$key_length]); 
        $box[$i]=$i; 
    } 
    for($j=$i=0;$i<256;$i++){ 
        $j=($j+$box[$i]+$rndkey[$i])%256; 
        $tmp=$box[$i]; 
        $box[$i]=$box[$j]; 
        $box[$j]=$tmp; 
    } 
    for($a=$j=$i=0;$i<$string_length;$i++){ 
        $a=($a+1)%256; 
        $j=($j+$box[$a])%256; 
        $tmp=$box[$a]; 
        $box[$a]=$box[$j]; 
        $box[$j]=$tmp; 
        $result.=chr(ord($string[$i])^($box[($box[$a]+$box[$j])%256])); 
    } 
    if($operation=='D'){ 
        if(substr($result,0,8)==substr(md5(substr($result,8).$key),0,8)){ 
            return substr($result,8); 
        }else{ 
            return''; 
        } 
    }else{ 
        return str_replace('=','',base64_encode($result)); 
    } 
}

$str=$_POST['passwo'];


$key = 'www.helloweba.com'; 
$token = encrypt($str, 'E', $key); 
echo '加密:'.encrypt($str, 'E', $key); 
echo '解密：'.encrypt($str, 'D', $key);










if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("student", $con);
// echo "$_POST[admin]";
// echo "$_POST[passwo]";
// echo "hah";
// echo "$_POST[shenfen]";
//insert into login(username,password,role) values(1,1,1)
if (mysql_query("INSERT INTO login (username, password,role)
VALUES
('$_POST[admin]','$token','$_POST[shenfen]')")) {
	# code...
	echo "<META HTTP-EQUIV=\"refresh\" CONTENT=\"0;url='../sign-in.html'\">";

}



mysql_close($con);

?>