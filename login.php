<?php
if(isset($_POST['sub'])){
$server="localhost";
$username="root";
$password="";
$con=mysqli_connect($server,$username,$password,"login");
if(!$con){
    die("connection to this database failed due to".mysqli_connect_error());

}
echo "success connecting to the db";
$email=$_POST['email'];
$password=$_POST['password'];
$sql="INSERT INTO `login`.`email` (`email`, `password`) VALUES ('$email', '$password');";

if($con->query($sql)==true){
    
    echo "successfully insert";
}
else{
    echo "error:$sql<br> $con->error";
}
$con->close();
}
?>
