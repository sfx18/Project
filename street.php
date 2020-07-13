<?php
require 'connectDB.php';
require 'function.php';
$result = fillSelect($connect, "SELECT * FROM street WHERE uCity = '".$_POST["ucityId"]."' ORDER BY cStreet");
$output = '<option value="">Выберите улицу</option>';
while ($row = mysqli_fetch_assoc($result)) {
	$output .= '<option value="'.$row["uStreet"].'">'.$row["cStreet"].'</option>';
	
}
echo $output;
?>