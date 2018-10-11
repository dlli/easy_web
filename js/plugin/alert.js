 $.extend($, {
     alert:function(info){
         
         var wrap = $("#alert");
         
         if(wrap.length === 0){
             var tmpl = "";
             
             tmpl += "<div id='alert' class='animated bounceInDown' >";
             tmpl += "  <div class='alert-header'>消息 <span class='close' onclick='$.alert_close();'>X</span><div class='clear'></div></div>";
             tmpl += "  <div class='alert-body'></div>";
             tmpl += "  <div class='alert-footer'><a onclick='$.alert_confirm();'>确认</a><a onclick='$.alert_cancel();'>取消</a></div>";
             tmpl += "</div>";
             
             wrap = $(tmpl);
             
             $(document.body).append(wrap);
             
         }
         wrap.find(".alert-body").html(info);
        
         $.modal(true);
         
         setTimeout(function(){
             wrap.removeClass("bounceOutUp").addClass("bounceInDown");
         },500);
     },
     alert_close:function(){
         $("#alert").removeClass("bounceInDown").addClass("bounceOutUp");
         
         setTimeout(function(){
            $.modal(false);
         },500);
     },
     alert_confirm:function(){
         $.alert_close();
         return true;
     },
     alert_cancel:function(){
         $.alert_close();
         return false;
     }
     
 });

//console.log("alert.js running");