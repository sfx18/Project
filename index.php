<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <div class="wrapperselect">

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

    <div class="info"></div>
        <div class='button js-button-campaign'><span>Показать кандидатов</span></div>
        <div class="overlay js-overlay-campaign">
	    	<div class="popup js-popup-campaign">
	    		 <div class="content"></div>
	    		<div class="close-popup js-close-campaign"></div>
	    	</div>
	    </div>
    </div>

</body>
</html>