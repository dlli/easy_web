$.extend($,{
   urlDecode:function(){
       var url = location.href;
        var index = url.indexOf("?");
        var arrStr = "";

        arrStr = url.substr(index+1
                         ,url.length);
        var arr = arrStr.split("&");
        var res ={};

        for(var v in arr){
            var item = arr[v];
            var x = item.substr(0,item.indexOf("="));
            var y = item.substr(item.indexOf("=")+1,item.length);

            eval( "res['"+x+"']='"+y+"'");
        }

        return res;
   },
});
