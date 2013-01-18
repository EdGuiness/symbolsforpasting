
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36852229-2']);
_gaq.push(['_trackPageview']);

$(function() {

    $("body").fadeOut(10, function() { $(this).show(); }); 

    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    $("#tabs").tabs();

    $("body").fadeOut(10, function() { $(this).show(); }); 

    $('.lod')
    .hover(
        function() {$(this).css( {'cursor':'pointer', 'background-color':'#fff284'});},
        function() {$(this).css( {'cursor':'auto', 'background-color':''});}
    )
    .click(function() {

        _gaq.push(['_trackEvent', $(this).text(), 'clicked']);

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
