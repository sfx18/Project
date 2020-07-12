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

   
        jQuery('#raion').change(function(){
            var uRaion = jQuery(this).val();
            if(uRaion){
            jQuery.ajax({
                url:"uchastki/raion.php",
                method:"POST",
                data:{uRaionId:uRaion},
                dataType:"text",
                success:function(data){
                    jQuery('#street').attr('disabled', 'disabled');
                    jQuery('#house').attr('disabled', 'disabled');
                    jQuery('#city').removeAttr('disabled');
                    jQuery('#city').html(data);
                    jQuery('#street').html('<option value="">-----------------------------</option>');
                    jQuery('#house').html('<option value="">-----------------------------</option>');
                    jQuery('#info').html('<div></div>' );

                }

            });
        }else{
            jQuery('#city').attr('disabled', 'disabled');
            jQuery('#street').attr('disabled', 'disabled');
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#city').html('<option value="">-----------------------------</option>');
            jQuery('#street').html('<option value="">-----------------------------</option>'); 
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('#info').html('<div></div>' );
        }

        });



        jQuery('#city').change(function(){
            var uCity = jQuery(this).val();
            if(uCity){
            jQuery.ajax({
                url:"uchastki/city.php",
                method:"POST",
                data:{ucityId:uCity},
                dataType:"text",
                success:function(data){
                    jQuery('#house').attr('disabled', 'disabled');
                    jQuery('#street').removeAttr('disabled');
                    jQuery('#street').html(data);
                    jQuery('#house').html('<option value="">-----------------------------</option>');
                    jQuery('#info').html('<div></div>' );

                }

            });
        }else{
            jQuery('#street').attr('disabled', 'disabled');
            jQuery('#house').attr('disabled', 'disabled');
            jQuery('#street').html('<option value="">-----------------------------</option>'); 
            jQuery('#house').html('<option value="">-----------------------------</option>');
            jQuery('#info').html('<div></div>' );
        }

        });




        jQuery('#street').change(function(){
                var uStreet = jQuery(this).val();
                if(uStreet){
                jQuery.ajax({
                    url:"uchastki/street.php",
                    method:"POST",
                    data:{ustreetId:uStreet},
                    dataType:"text",
                    success:function(data){
                        jQuery('#house').removeAttr('disabled');
                        jQuery('#house').html(data);
                        jQuery('#info').html('<div></div>' );
                    }

                });
            }else{
                jQuery('#house').attr('disabled', 'disabled');
                jQuery('#house').html('<option value="">-----------------------------</option>');
                jQuery('#info').html('<div></div>' );
            }

            });




            jQuery('#house').change(function(){
                var uInfo = jQuery(this).val();
                if(uInfo){
                jQuery.ajax({
                    url:"uchastki/info.php",
                    method:"POST",
                    data:{uinfoId:uInfo},
                    dataType:"text",
                    success:function(data){
                        jQuery('#info').html(data);
                    }

                });
            }else{
                jQuery('#info').html('<div></div>' );
            }

            });

        });

