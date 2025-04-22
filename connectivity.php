<?php
$con=mysqli_connect("localhost","root","","insta");
if(!$con){
    echo "connecting to database unsucssesful";
}
else{
    echo "connection sucssessful";
    echo "<br>";
}
$sql="drop table signin";
if(mysqli_query($con,$sql)){
    echo "data inserted succesfull";
}
else{
    echo "error";
}

?>