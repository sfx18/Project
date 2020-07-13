<?php
// ПОЛУЧАЕМ UHOUSEREGISTRY

$houseId = $_POST['houseId'];
$connect = mysqli_connect('localhost', 'root', '', 'reestr');
$sql = "SELECT * FROM house WHERE uHouseRegistry = '$houseId'";
$resultHouse = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($resultHouse)) {
	$uHouseReg .= $row['uHouseRegistry'];
}
echo 'Номер дома: '.$uHouseReg;

// ПОЛУЧАЕМ ID ВЕРХОВНОГО СОВЕТА, МЕСТНОГО ОКРУГА, УЧАСТКА, СЕЛЬКОГО ОКРУГА

$sql = "SELECT * FROM info2 WHERE uHouseRegistry = '$uHouseReg'";
$resultInfo = mysqli_query($connect, $sql);

while ($row = mysqli_fetch_assoc($resultInfo)) {
	$BC = $row['OkrVS'];
	$MO = $row['OkrMO'];
	$Uch = $row['OkrUch'];
	$SO = $row['OkrSel'];
	$uDistrict = $row['uDistrict'];
}

// ТАБЛИЦА С ДЕПУТАТАМИ

$sql = "SELECT * FROM dep WHERE uDistrict = '$uDistrict' AND OkrMO = '$MO'";
$resultDep = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($resultDep)){
	$dep = $row['info'];
}
echo '</br>'.$dep;


?>