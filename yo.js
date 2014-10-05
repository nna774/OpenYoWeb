(function(){
    $('#auth').bind('click', function(){
        $.ajax({
            url: 'https://openyo.nna774.net/config/list_tokens/',
            dataType: 'json',
            data: {
                api_ver: '0.1',
                username: $('#id').val(),
                password: $('#pass').val()
            },
            method: 'POST'
        }).done(function(data){
             if(data.code == "200"){
                 $('#authMsg').text("token 取得成功");
                 $('#token').val(data.result[0]);
             } else {
                 $('#authMsg').text(data.result);
             }
        }).fail(function(xhr){
        })
    });
    
    $('#yo').bind('click', function(){
        $.ajax({
            url: 'https://openyo.nna774.net/yo/',
            dataType: 'json',
            data: {
                api_ver: '0.1',
                api_token: $('#token').val(),
                username: $('#to').val()
            },
            method: 'POST'
        }).done(function(data){
            $('#yoMsg').text(data.result);
        }).fail(function(xhr){
        })
    });

    $('#yoall').bind('click', function(){
        $.ajax({
            url: 'https://openyo.nna774.net/yoall/',
            dataType: 'json',
            data: {
                api_ver: '0.1',
                api_token: $('#token').val()
            },
            method: 'POST'
        }).done(function(data){
            $('#yoMsg').text(data.result);
        }).fail(function(xhr){
        })
    });
})();
