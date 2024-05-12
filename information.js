$(document).ready(function(){
    // Başlıkların altındaki içerikleri gizleyen kod
    $(".info").hide();

    // Başlıklara tıklandığında ilgili bölümü açıp kapatan kod
    $("h4").click(function(){
        $(this).next(".info").toggle();
    });

    // Sayfayı belirli bir bölüme kaydıran kod
    $("#scroll-to-techniques").click(function(){
        $('html, body').animate({
            scrollTop: $("#photography-techniques").offset().top
        }, 1000);
    });

    $("#scroll-to-recommendations").click(function(){
        $('html, body').animate({
            scrollTop: $("#equipment-recommendations").offset().top
        }, 1000);
    });

    $("#scroll-to-tips").click(function(){
        $('html, body').animate({
            scrollTop: $("#useful-tips").offset().top
        }, 1000);
    });

    // Sosyal medya bağlantılarını yönlendiren kod
    $(".social-links a").click(function(e){
        e.preventDefault();
        var url = $(this).attr("href");
        window.open(url, "_blank");
    });
});
