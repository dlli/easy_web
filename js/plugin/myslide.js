function myslide(param){
    var self = this;
    self.cfg = {
        wrap:$("#index-cpzs"),
        ctnt:$("#index-cpzs .wrap"),
        speed:3,
        direction:1,// -1 left  1 right
    };
    self.cfg = $.extend(self.cfg,param);
    
    this.move = function(){
        var w = parseInt(self.cfg.wrap.width());
        var dst = parseInt(self.cfg.ctnt.width())-w;
        var _left = parseInt(self.cfg.ctnt.css('left'));

        _left += self.cfg.direction*self.cfg.speed;

        if(dst+_left<=0){
            _left=-1*dst;
            self.cfg.direction = 1;
        }else if( _left>0){
            _left = 0;
            self.cfg.direction = -1;
        }
        self.cfg.ctnt.css('left',_left+'px');
    }
    
    setInterval(function(){
       self.move();
    },100);

}

