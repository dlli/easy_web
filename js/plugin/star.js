function __showScore( score , path){
	var tmp = 0;
	var imgPath = "";
	var img1 = "images/icon-star.jpg";
	var img2 = "images/icon-star-on.jpg";
	var $p = $("<p class='score'></p>");
	try{
		tmp = parseInt(score);
	}catch(e){
		console.error("Show score error, __showScore(score).score must be a instance of integer");
		return ;
	}
	if(typeof(path)=="undefined"||path==null){
		
	}else{
		img1 = path + img1;
		img2 = path + img2;
	}
	
	for(var x = 1; x <= 5; x ++){
		if(x<=tmp){
			$p.append( $("<img class='star"+x+"' src='"+img1+"' />") );
		}else{
			$p.append( $("<img class='star"+x+"' src='"+img2+"' />") );
		}
	}
	
	return $p;
}
$(function(){
    var img1 = "images/icon-star-on.jpg";
	var img2 = "images/icon-star.jpg";
    $(".star").each(function(){
       try{
           var wrap = $(this);
           var score = parseInt(wrap.attr('data-score'));
           for(var x = 1; x <= 5; x ++){
                if(x<=score){
                    wrap.append( $("<img class='star"+x+"' src='"+img1+"' />") );
                }else{
                    wrap.append( $("<img class='star"+x+"' src='"+img2+"' />") );
                }
            }
        
       }catch(e){
           console.error("star score plugin failed!" + e);
       }
    });
})