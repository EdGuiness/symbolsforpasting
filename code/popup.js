$(function() {

    $("#tabs").tabs();

    $("body").fadeOut(10, function() { $(this).show(); }); 

    $('.lod')
    .hover(
        function() {$(this).css( {'cursor':'pointer', 'background-color':'#fff284'});},
        function() {$(this).css( {'cursor':'auto', 'background-color':''});}
    )
    .click(function() {
        var bgPage = chrome.extension.getBackgroundPage();
        bgPage.copy($(this).text());

        $(this)
        .animate({ 
            top: "-=30px",
            opacity: 0.1, 
            }, 300, function() {
                window.close();
            });

    });

});
