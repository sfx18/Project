<?php
require 'connectDB.php';
require 'function.php';
$result = fillSelect($connect, "SELECT uHouseRegistry, cHouse, CAST(cHouse AS UNSIGNED) AS cHouse2 FROM house WHERE uStreet = '".$_POST["ustreetId"]."' ORDER BY cHouse2, cHouse");
$output = '<option value="">Выберите дом</option>';
while ($row = mysqli_fetch_assoc($result)) {
	
	$output .= '<option value="'.$row["uHouseRegistry"].'">'.$row["cHouse"].'</option>';
}
echo $output;
?>