<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=2186cead-c31c-4e90-9161-f675fdf3ccf2&lang=ru_RU" type="text/javascript">
    </script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css">
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <link href="css/style.css" rel="stylesheet">
    <script src="js/script.js"></script>
</head>
<body>
    <div class="wrapper-select">
        <select id="raion" class="select-css">
            <option value="">Выберите район</option>
        </select>

        <select id="city" class="select-css">
            <option value="">-----------------------------</option>
        </select>

        <select id="street" class="select-css">
            <option value="">-----------------------------</option>       
        </select>

        <select id="house" class="select-css">
            <option value="">-----------------------------</option>      
        </select>
    </div>
    <div class="info"></div>
        <div class='button js-button-campaign'><span>Показать кандидатов</span></div>
        <div class="overlay js-overlay-campaign">
	    	<div class="popup js-popup-campaign">
	    		 <div class="content"></div>
	    		<div class="close-popup js-close-campaign"></div>
	    	</div>
	    </div>
    <div id="map"></div>
    <!-- <script>
         ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
        
        
    }
    </script> -->
</body>
</html>