<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <div id="wrapperselect">
    <select name="raion" id="raion">
        <option value="">Выберите район</option>

    </select>

    </br>
    </br>

    <select name="city" id="city">
        <option value="">-----------------------------</option>
        
    </select>

    </br>
    </br>

    <select name="street" id="street">
        <option value="">-----------------------------</option>
        
    </select>

    </br>
    </br>

    <select name="house" id="house">
        <option value="">-----------------------------</option>
        
    </select>

    </br>
    </br>


    <div id="info"></div>
    </div>

</br></br></br></br></br></br></br>-------------------------------------------------------------</br>
    <input type="text" list="raion_name" name = "raion2" autocomplete="off" placeholder="Район"/>
    <datalist id="raion_name">


    </datalist>
        </br>
        </br>
    <input type="text" list="city_name" name = "city2" autocomplete="off" placeholder="Город"/>
    <datalist id="city_name">


    </datalist>
<?php
/*$connect = mysqli_connect("localhost", "root", "", "reestr");
$sql = "CREATE TABLE `reestr`.`cities2` ( `uCity` INT(11) AUTO_INCREMENT , `nCity` INT(11) NOT NULL , `cCity` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , `uDistrict` INT(11) NOT NULL , PRIMARY KEY (`uCity`)) ENGINE = InnoDB;";

mysqli_query($connect, $sql);*/

?>
</body>
</html>