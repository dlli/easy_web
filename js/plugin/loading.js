$.extend($, {
    loading: function(op) {
        var self = this;

        self.init = function() {
            var body = $(document.body);

            var l = body.find(".loading");

            if (l && l.length > 0) {
                return;
            } else {
                var $wrap = $("<div class='loading' style='width:100%;height:100%;position:fixed;left:0;top:0;right:0;background-color:#ccc;z-index:9999;opacity:0.5;padding:0;margin:0;'></div>");

                var $img = $("<img src='images/loading.gif' style='width:100px;height:100px;position:absolute;left:50%;top:50%;margin-left:-50px;margin-top:-50px;'/>");

                $wrap.append($img);
                body.append($wrap);
            }
        }

        self.show = function() {
            $(".loading").fadeIn();
        };

        self.hide = function() {
            $(".loading").fadeOut();
        };

        if ($(".loading").length > 0) {} else {
            self.init();
        }
        eval("self." + op + "();");

    }
});