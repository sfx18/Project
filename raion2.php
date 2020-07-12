<?php
/*$connect = mysqli_connect("localhost", "root", "", "reestr");
$output = '';
$sql = "SELECT * FROM raion ORDER BY cRaion WHERE uRaion = '".$_POST["raionId"]."' ORDER BY cRaion";
$result = mysqli_query($connect, $sql);
$output = '<option value="">Выберите город</option>';
while ($row = mysqli_fetch_assoc($result)) {
	$output .= '<option value="'.$row["uRaion"].'">'.$row["cRaion"].'</option>';
	
}
echo $output;*/


function load_raion()
{
    $connect = mysqli_connect("localhost", "root", "", "reestr");
    $output = '';
    $sql = "SELECT * FROM raion ORDER BY cRaion";
    $result = mysqli_query($connect, $sql);
    while($row = mysqli_fetch_array($result))
    {
        $output .= '<option value="'.$row["uRaion"].'">'.$row["cRaion"].'</option>';
    }
    return $output;
}


?>