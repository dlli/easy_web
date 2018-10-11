$(function() {
    $(".drop-down").map(function() {
        var title = $(this);
        var id = title.find(".drop-down-btn").attr("data-drop-id");
        title.click(function(){
            dropDown(id, true);
        });
        var listItem = title.find(".drop-down-data");
        var offset = title/*.find(".drop-down-btn")*/.offset();
        listItem.css("left",offset.left).css("top",offset.top + title.height()).width(title.width());
        listItem.delegate(".drop-down-item","click",function(e){
            e.stopPropagation();
            dropDown(id,false);
            var text = $(this).html();
            title.find(".drop-down-btn").html(text);
            
            if($(this).attr("data-href")){
                location.href = $(this).attr("data-href");
            }
            
        });
    });
});
function dropDown(id, isShow){
    var obj = $("#" + id);
    if(obj.length == 0){
        return;
    }
    //console.log("show:"+isShow);
    //console.log(obj);
    if(isShow && obj.css("display")=="none"){
        obj.show();
    }else{
        obj.hide();
    }
}
