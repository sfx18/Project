<?php
require 'connectDB.php';
require 'function.php';
// ПОЛУЧАЕМ UHOUSEREGISTRY

$houseId = $_POST['houseId'];
$resultHouse = fillSelect($connect, "SELECT * FROM house WHERE uHouseRegistry = '$houseId'");
while ($row = mysqli_fetch_assoc($resultHouse)) {
	$uHouseReg .= $row['uHouseRegistry'];
}
echo 'Номер дома: '.$uHouseReg;

// ПОЛУЧАЕМ ID ВЕРХОВНОГО СОВЕТА, МЕСТНОГО ОКРУГА, УЧАСТКА, СЕЛЬКОГО ОКРУГА

$resultInfo = fillSelect($connect, "SELECT * FROM info2 WHERE uHouseRegistry = '$uHouseReg'");

while ($row = mysqli_fetch_assoc($resultInfo)) {
	$BC = $row['OkrVS'];
	$MO = $row['OkrMO'];
	$Uch = $row['OkrUch'];
	$SO = $row['OkrSel'];
	$uDistrict = $row['uDistrict'];
}

// ТАБЛИЦА С ДЕПУТАТАМИ

echo '<br>Верх Сов.';

$resultDep = fillSelect($connect, "SELECT * FROM depvs WHERE OkrVS = '$BC'");
while ($row = mysqli_fetch_assoc($resultDep)){
	$dep = $row['info'];
}
echo '</br>'.$dep;

echo '<br>Местн';

$resultDep = fillSelect($connect, "SELECT * FROM dep WHERE uDistrict = '$uDistrict' AND OkrMO = '$MO'");
while ($row = mysqli_fetch_assoc($resultDep)){
	$dep = $row['info'];
}
echo '</br>'.$dep;



?>