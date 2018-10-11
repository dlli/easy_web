 $.extend($, {
     float:function(param){
         var config = {
             css:{transition:'all 0.3s ease 0s'},
             is_fixed:true,// 是否固定位置
             innerHTML:''
         };
         $.extend(config,param);
         
         var uid = Date.now();
         var dom = $("<div class='fixed-ft-img' id='ft"+uid+"'></div>")
         $.each(config.css,function(item){
            dom.css(item,config.css[item]);
         });
         dom.html(config.innerHTML);
         dom.attr('top',config.css.top);
         
         $(document.body).append(dom);
         
     }
 });
IMG_DIR_PATH = ' ';
FLOAT_ARR = [{
    css:{position:'absolute',left:'0',top:'50px',transition:'all 0.3s ease 0s'},
    innerHTML:'<img src="images/float-img1.jpg"/>',
},{
    css:{position:'absolute',left:'0',top:'250px',transition:'all 0.3s ease 0s'},
    innerHTML:'<img src="images/float-img2.png"/>',
},{
    css:{position:'absolute',right:'0',top:'250px',transition:'all 0.3s ease 0s'},
    innerHTML:'<img src="images/float-img3.jpg"/>',
}];
FLOAT_ARR = [];
$(function(){
    if(IMG_DIR_PATH){
        $.each(FLOAT_ARR,function(item){
            $.float(FLOAT_ARR[item]);
        })
        $(window).scrollEnd(function(){
            $(".fixed-ft-img").each(function(){
                $(this).css('top',(parseInt($(this).attr('top'))+parseInt($(window).scrollTop()))+"px");
                console.log($(this).attr('id')+':'+$(this).offset().top);
            })
        },100);
    }
})