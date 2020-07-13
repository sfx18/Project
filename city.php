<?php
require 'connectDB.php';
require 'function.php';
$result = fillSelect($connect, "SELECT * FROM city WHERE uDistrict = '".$_POST["uRaionId"]."' ORDER BY cCity");
$output = '<option value="">Выберите город</option>';
while ($row = mysqli_fetch_assoc($result)) {
	
	$output .= '<option value="'.$row["uCity"].'">'.$row["cCity"].'</option>';	
}
echo $output;
?>