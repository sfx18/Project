<?php

$connect = mysqli_connect("localhost", "root", "", "reestr");
$sql = "SELECT * FROM house WHERE uHouseRegistry = '".$_POST["uinfoId"]."'";
$result = mysqli_query($connect, $sql);
while ($row = mysqli_fetch_assoc($result)) {
	$output .= $row["uHouseRegistry"];
}
//echo "Номер дома: ".$output;


$result2 = mysqli_query($connect, "SELECT * FROM info2 WHERE uHouseRegistry = ".$output."");

while ($row2 = mysqli_fetch_assoc($result2)) {
	$BC = $row2["OkrVS"];
	$MO = $row2["OkrMO"];
	$Uch = $row2["OkrUch"];
	$SO = $row2["OkrSel"];
	$output3 = $row2["uDistrict"];
}
//echo "</br>Номер района: ".$output3."</br>";
//echo "</br>Номер улицы: ".$street."</br>";
$result5 = mysqli_query($connect, "SELECT * FROM Uch WHERE id = ".$Uch."");
while ($row5 = mysqli_fetch_assoc($result5)) {
	$output6 .= "</br>Избирательный участок №".$row5["id"]."</br>Адрес: ".$row5["adres"];
}

echo $output6;
$result3 = mysqli_query($connect, "SELECT * FROM BC WHERE id = ".$BC."");
while ($row3 = mysqli_fetch_assoc($result3)) {
	$output4 .= "</br>Избирательный округ №".$row3["id"]." <".$row3["BC_name"]."> </br>Центр округа: ".$row3["adres"];
}

echo $output4."</br>Местный округ №".$MO;

if(is_null($SO)){}
else{
	echo "</br>Сельский округ №".$SO;
}


?>