$.extend($, {

    modal: function(param) {
        if (param) {
            var body = $(document.body);

            var l = $("#modal");
            if (l.length == 0) {
                l = $("<div id='modal'></div>");
                body.prepend(l);
            }

            l.fadeIn();
        } else {
            $("#modal").fadeOut();
        }
    }

});