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
                }
            });
        }else{
            jQuery('#street').attr('disabled', 'disabled');
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#street').html('<option value="">-----------------------------</option>'); 
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('.info').text('');
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
                }
            });
        }else{
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('.info').text('');
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
                }
            });
        }else{
            jQuery('.info').text('');
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
        }
    });
});

