var i = 0;
$('#area').bind('click', function (e) {

    var letters = $('#letcirc').val();
    var firstletter = letters.charAt(0);
  
    $('#letcirc').val(
    function (index, value) {
        var stringpopup = value.substring(1);
        return stringpopup;
    });
    
    $('<div/>').attr({
        'id': i
    }).addClass('circle').css({
        'top': e.pageY - 75,
            'left': e.pageX - 75
    }).text(firstletter).appendTo('#area');
    i++;

});