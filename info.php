<?php
require 'connectDB.php';
require 'function.php';
// ПОЛУЧАЕМ UHOUSEREGISTRY

$uinfoId = $_POST["uinfoId"];
$resultHouse = fillSelect($connect, "SELECT * FROM house WHERE uHouseRegistry = '$uinfoId'");
while ($row = mysqli_fetch_assoc($resultHouse)) {
	$uHouseReg .= $row["uHouseRegistry"];
}
echo "Номер дома: ".$uHouseReg;

// ПОЛУЧАЕМ ID ВЕРХОВНОГО СОВЕТА, МЕСТНОГО ОКРУГА, УЧАСТКА, СЕЛЬКОГО ОКРУГА

$resultInfo = fillSelect($connect, "SELECT * FROM info2 WHERE uHouseRegistry = '$uHouseReg'");

while ($row = mysqli_fetch_assoc($resultInfo)) {
	$BC = $row["OkrVS"];
	$MO = $row["OkrMO"];
	$Uch = $row["OkrUch"];
	$SO = $row["OkrSel"];
	$uDistrict = $row["uDistrict"];
}

// ТАБЛИЦА С ИЗБИРАТЕЛЬНЫМИ УЧАСТКАМИ

$resultUch = fillSelect($connect, "SELECT * FROM Uch WHERE id = '$Uch'");
while ($row = mysqli_fetch_assoc($resultUch)) {
	$izbirUch .= "</br>Избирательный участок №".$row["id"]."</br>Адрес: ".$row["adres"];
}

echo $izbirUch;

// ТАБЛИЦА С ВЕРХОВНЫМИ СОВЕТАМИ

$resultBC = fillSelect($connect, "SELECT * FROM BC WHERE id = '$BC'");
while ($row = mysqli_fetch_assoc($resultBC)) {
	$izbirOkrug .= "</br>Избирательный округ по выборам Верховного Совета №".$row["id"]." <".$row["BC_name"]."> </br>Центр округа: ".$row["adres"];
}

echo $izbirOkrug."</br>Местный округ".$MO = $MO == 0 ? ': Нет округа' : ' №'.$MO;
echo $SO = $SO == 0 ? '' : '</br>Сельский округ №'.$SO;

?>