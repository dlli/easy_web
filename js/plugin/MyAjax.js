 $.extend($, {
     MyAjax: function(url, data, type, callback) {
         $.ajax({
             url: url,
             data: data,
             type: type,
             dataType: 'json',
             beforeSend: function() {
                 $.loading("show");
             },
             success: function(msg) {
                 
                 console.log("MyAjax Success");
                 
                 if($.loading){
                    $.loading("hide");
                 }
                 
                 if (typeof callback != 'undefined') {
                     callback.call(window, msg);
                 }else{
                     console.error("MyAjax.callback is undefined!")
                 }
             },
             error: function(data) {
                 console.error("ajax required error:");
                 alert("请求错误，请联系管理员");
                 $.loading("hide");
             }
         });
     }
 });