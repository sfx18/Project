jQuery(document).ready(function(){          

    jQuery('#raion').append('<option value="1">ГРИГОРИОПОЛЬСКИЙ Р-Н</option>');
    jQuery('#raion').append('<option value="2">СЛОБОДЗЕЙСКИЙ Р-Н</option>');
    jQuery('#raion').append('<option value="3">ТИРАСПОЛЬ</option>');
    jQuery('#raion').append('<option value="4">БЕНДЕРЫ</option>');
    jQuery('#raion').append('<option value="5">КАМЕНСКИЙ Р-Н</option>');
    jQuery('#raion').append('<option value="6">ДУБОССАРСКИЙ Р-Н</option>');
    jQuery('#raion').append('<option value="7">РЫБНИЦКИЙ Р-Н</option>');
    jQuery('#city').attr('disabled', 'disabled');
    jQuery('#street').attr('disabled', 'disabled');
    jQuery('#house').attr('disabled', 'disabled');

   

//     map = L.map('map').setView([46.8191, 29.6480], 9);
//     layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     subdomains: ['a','b','c']
// }).addTo(map);
//     map.addLayer(layer);
    //map.removeLayer(layer);

    // var lon = document.querySelector('.lonlat').getAttribute('data-attr-lon');
    // var lat = document.querySelector('.lonlat').getAttribute('data-attr-lat');
    // var hydMarker = new L.Marker([17.385044, 78.486671]);
    // var vskpMarker = new L.Marker([17.686816, 83.218482]);
    // var vjwdMarker = new L.Marker([16.506174, 80.648015]);
    // var markersLayer = new L.layerGroup([hydMarker, vskpMarker, vjwdMarker]);
    // var markers = L.marker([lon, lat]).addTo(testLayer).addTo(map);
    // map.addLayer(testLayer);
    // markersLayer.addTo(map);
    // markersLayer.removeLayer(hydMarker);
    
    

 // ЗАПОЛНЕНИЕ ДАННЫМИ SELECT CITY   
    jQuery('#raion').change(function(){

        var uRaion = jQuery(this).val();
        if(uRaion){
            jQuery.ajax({
                url:"city.php",
                method:"POST",
                data:{uRaionId:uRaion},
                dataType:"html",
                success:function(data){
                    jQuery('#street').attr('disabled', 'disabled');
                    jQuery('#house').attr('disabled', 'disabled');
                    jQuery('#city').removeAttr('disabled');
                    jQuery('#city').html(data);
                    jQuery('#street').html('<option value="">-----------------------------</option>');
                    jQuery('#house').html('<option value="">-----------------------------</option>');
                    jQuery('.info').text('');
                    jQuery('#map').text('');
                }
            });
        }else{
            jQuery('#city').attr('disabled', 'disabled');
            jQuery('#street').attr('disabled', 'disabled');
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#city').html('<option value="">-----------------------------</option>');
            jQuery('#street').html('<option value="">-----------------------------</option>'); 
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('.info').text('');
            jQuery('.js-button-campaign').css('display', 'none');
            jQuery('#map').text('');
        }
    });


// ЗАПОЛНЕНИЕ ДАННЫМИ SELECT STREET
    jQuery('#city').change(function(){
    var uCity = jQuery(this).val();
        if(uCity){
            jQuery.ajax({
                url:"street.php",
                method:"POST",
                data:{ucityId:uCity},
                dataType:"html",
                success:function(data){
                    jQuery('#house').attr('disabled', 'disabled');
                    jQuery('#street').removeAttr('disabled');
                    jQuery('#street').html(data);
                    jQuery('#house').html('<option value="">-----------------------------</option>');
                    jQuery('.info').text('');
                    jQuery('#map').text('');
                }
            });
        }else{
            jQuery('#street').attr('disabled', 'disabled');
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#street').html('<option value="">-----------------------------</option>'); 
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('.info').text('');
            jQuery('.js-button-campaign').css('display', 'none');
            jQuery('#map').text('');
        }
    });



// ЗАПОЛНЕНИЕ ДАННЫМИ SELECT HOUSE
    jQuery('#street').change(function(){
    var uStreet = jQuery(this).val();
        if(uStreet){
            jQuery.ajax({
                url:"house.php",
                method:"POST",
                data:{ustreetId:uStreet},
                dataType:"html",
                success:function(data){
                    jQuery('#house').removeAttr('disabled');
                    jQuery('#house').html(data);
                    jQuery('.info').text('');
                    jQuery('#map').text('');
                }
            });
        }else{
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('.info').text('');
            jQuery('.js-button-campaign').css('display', 'none');
        }
    });



// ЗАПОЛНЕНИЕ ДАННЫМИ DIV INFO
    jQuery('#house').change(function(){
    var uInfo = jQuery(this).val();
        if(uInfo){
            jQuery.ajax({
                url:"info.php",
                method:"POST",
                data:{uinfoId:uInfo},
                dataType:"html",
                success:function(data){
                    jQuery('.info').html(data);
                    jQuery('.js-button-campaign').show();  
                        // map = L.map('map').setView([46.8191, 29.6480], 9);
                        // layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        // subdomains: ['a','b','c']
                        // }).addTo(map);
                        // map.addLayer(layer);
                        // jQuery('#map').show();
                         lon = document.querySelector('.lonlat').getAttribute('data-attr-lon');
                         lat = document.querySelector('.lonlat').getAttribute('data-attr-lat');
                         Uch = document.querySelector('.lonlat').getAttribute('data-attr-uch');  
                        // map.setView([lon, lat], 16);
                        // var markerOptions = {
                        //     title: 'Участок №'+Uch
                        // }
                        // Marker = new L.Marker([lon, lat], markerOptions);
                        // markersLayer = new L.layerGroup([Marker]);
                        // markersLayer.addTo(map);
                        jQuery('#map').text('');
                        ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [lon, lat],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16

        });
        
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [lon, lat]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Участок №'+Uch
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        })

        myMap.geoObjects
        .add(myGeoObject)

    }
                    
                }
            });
        }else{
            jQuery('.info').text('');
            jQuery('.js-button-campaign').css('display', 'none');
        }
    });

// ЗАПОЛНЕНИЕ ДАННЫМИ POPUP ОКНО
    jQuery('#house').change(function(){
    var dep = jQuery(this).val();
        if(dep){
            jQuery.ajax({
                url:"dep.php",
                method:"POST",
                data:{houseId:dep},
                dataType:"text",
                success:function(data){
                    jQuery('.content').html(data);
                    
                    //POPUP ОКНО открыть по кнопке
                    jQuery('.js-button-campaign').click(function() {                       
                        jQuery('.js-overlay-campaign').fadeIn();
                        jQuery('.js-overlay-campaign').addClass('disabled');
                    });
                    
                    // закрыть на крестик
                    jQuery('.js-close-campaign').click(function() { 
                        jQuery('.js-overlay-campaign').fadeOut();                       
                    });
                    
                    // закрыть по клику вне окна
                    jQuery(document).mouseup(function (e) { 
                        var popup = jQuery('.js-popup-campaign');
                        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
                            jQuery('.js-overlay-campaign').fadeOut();
                            
                        }
                    });
                }
            });
        }else{
            jQuery('.js-button-campaign').css('display', 'none');
        }
    });


});

