
jQuery(document).ready(function(){          

    var uRaion, uCity, uStreet, uHouse, raion, city, street, house, adres;

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

        uRaion = jQuery(this).val();
        raion = jQuery('#raion option:selected').text();
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
                    jQuery('.js-button-campaign').css('display', 'none');
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
    uCity = jQuery(this).val();
    city = jQuery('#city option:selected').text();
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
                    jQuery('.js-button-campaign').css('display', 'none');
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
    uStreet = jQuery(this).val();
    street = jQuery('#street option:selected').text();
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
                    jQuery('.js-button-campaign').css('display', 'none');
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
    uHouse = jQuery(this).val();
    house = jQuery('#house option:selected').text();
        if(uHouse){
            jQuery.ajax({
                url:"info.php",
                method:"POST",
                data:{uinfoId:uHouse},
                dataType:"html",
                success:function(data){
                    jQuery('.info').html(data);
                    jQuery('.js-button-campaign').show();  
                        
                         lon = document.querySelector('.lonlat').getAttribute('data-attr-lon');
                         lat = document.querySelector('.lonlat').getAttribute('data-attr-lat');
                         Uch = document.querySelector('.lonlat').getAttribute('data-attr-uch');  
                        
                        jQuery('#map').text('');

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
                        
                            // ymaps.route(['Тирасполь, Приднестровье, Молдова, Одесская 88/4', 'Бендеры']).then(function(route){
                            //     myMap.geoObjects.add(route);
                            // },
                            // function(error){
                            //     alert('Ошибка' +error.message);
                            // }
                            // );
                            var multiRoute = new ymaps.multiRouter.MultiRoute({   
                                // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
                                referencePoints: [
                                    raion +', '+ city +', '+ street +', '+ house,
                                    [lon, lat], // улица Льва Толстого.
                                ],
                                params: {
                                    // Тип маршрута: на общественном транспорте.
                                    routingMode: "pedestrian"  
                                  }
                            }, {
                                  // Автоматически устанавливать границы карты так,
                                  // чтобы маршрут был виден целиком.
                                  boundsAutoApply: true
                            });
                            
                            // Добавление маршрута на карту.
                            myMap.geoObjects.add(multiRoute);
                            
                        }
                    
                        ymaps.ready(init);
                        
                    
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

