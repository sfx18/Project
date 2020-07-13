<?php
// ПОЛУЧАЕМ UHOUSEREGISTRY

$uinfoId = $_POST["uinfoId"];
$connect = mysqli_connect("localhost", "root", "", "reestr");
$sql = "SELECT * FROM house WHERE uHouseRegistry = '$uinfoId'";
$resultHouse = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($resultHouse)) {
	$uHouseReg .= $row["uHouseRegistry"];
}
echo "Номер дома: ".$uHouseReg;

// ПОЛУЧАЕМ ID ВЕРХОВНОГО СОВЕТА, МЕСТНОГО ОКРУГА, УЧАСТКА, СЕЛЬКОГО ОКРУГА

$sql = "SELECT * FROM info2 WHERE uHouseRegistry = '$uHouseReg'";
$resultInfo = mysqli_query($connect, $sql);

while ($row = mysqli_fetch_assoc($resultInfo)) {
	$BC = $row["OkrVS"];
	$MO = $row["OkrMO"];
	$Uch = $row["OkrUch"];
	$SO = $row["OkrSel"];
	$uDistrict = $row["uDistrict"];
}

// ТАБЛИЦА С ИЗБИРАТЕЛЬНЫМИ УЧАСТКАМИ

$sql = "SELECT * FROM Uch WHERE id = '$Uch'";
$resultUch = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($resultUch)) {
	$izbirUch .= "</br>Избирательный участок №".$row["id"]."</br>Адрес: ".$row["adres"];
}

echo $izbirUch;

// ТАБЛИЦА С ВЕРХОВНЫМИ СОВЕТАМИ

$sql = "SELECT * FROM BC WHERE id = '$BC'";
$resultBC = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($resultBC)) {
	$izbirOkrug .= "</br>Избирательный округ №".$row["id"]." <".$row["BC_name"]."> </br>Центр округа: ".$row["adres"];
}

echo $izbirOkrug."</br>Местный округ".$MO = $MO == 0 ? ': Нет округа' : ' №'.$MO;

if(is_null($SO)){}
else{
	echo "</br>Сельский округ №".$SO;
}


?>