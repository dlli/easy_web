$(function() {
    $("[data-tab]").map(function() {
        var title = $(this).find(".tab-title");
        title.mouseover(function() {
            dataTabEve(this)
        });
        title.click(function(){
            if($(this).attr('data-href')){
                location.href = $(this).attr('data-href');
            }
        })
        dataTabEve(title.eq(0)[0]);
    });
});
function dataTabEve(obj){
    $(obj).siblings(".tab-title").removeClass("on");
    $(obj).addClass("on");
    var html_ctnt = $("#" + $(obj).attr("data-tab-ctnt-id")).html();
    var wrap = $("#" + $(obj).parent().attr("data-tab"));
    wrap.html(html_ctnt);
}