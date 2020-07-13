<?php
$connect = mysqli_connect("localhost", "root", "", "reestr");
$sql = "SELECT * FROM street WHERE uCity = '".$_POST["ucityId"]."' ORDER BY cStreet";
$result = mysqli_query($connect, $sql);
$output = '<option value="">Выберите улицу</option>';
while ($row = mysqli_fetch_assoc($result)) {
	$output .= '<option value="'.$row["uStreet"].'">'.$row["cStreet"].'</option>';
	
}
echo $output;
?>