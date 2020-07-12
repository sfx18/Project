<?php
$connect = mysqli_connect("localhost", "root", "", "reestr");
$sql = "SELECT * FROM city WHERE uDistrict = '".$_POST["uRaionId"]."' ORDER BY cCity";
$result = mysqli_query($connect, $sql);
$output = '<option value="">Выберите город</option>';
while ($row = mysqli_fetch_assoc($result)) {
	$output .= '<option value="'.$row["uCity"].'">'.$row["cCity"].'</option>';
	
}
echo $output;
?>