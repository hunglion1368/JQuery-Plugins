jQuery(function(){
	//cal x,y
	var $x = $('ul.coderkhung-menu>li').position().left + $('ul.coderkhung-menu>li').width()/2;
	var $y = $('ul.coderkhung-menu>li').position().top + $('ul.coderkhung-menu>li').height()/2;
	
	var $pi = Math.PI;
	
	var $howFar = 200;
	
	$('ul.coderkhung-menu ul li').each(function($i,$el){
		//sub
		$sx = $($el).width()/2;
		$sy = $($el).height()/2;
		
		//change position
		$($el).css({'z-index':-1,'top':$y-$sy,'left':$x-$sx});
		
		//cal angle
		var $agl = $i*($pi/6);
		
		//cal item x,y
		var $ix = $x + $howFar*Math.cos($agl)- $sx;
		var $iy = $y + $howFar*Math.cos($pi/2-$agl)-$sy;
		
		$($el).attr('extra-left',$ix);
		$($el).attr('extra-top',$iy);
		
	});
	
	$('ul.coderkhung-menu>li').click(function(){
		$('ul.coderkhung-menu ul li').each(function($i,$el){
			var $top = parseFloat($($el).attr('extra-top'));
			var $left = parseFloat($($el).attr('extra-left'));
			
			$($el).attr('extra-left',$($el).position().left);
			$($el).attr('extra-top',$($el).position().top);
			
			//$($el).css({'top':$top,'left':$left});
			$($el).animate({top:$top,left:$left},400);
		});
	});
});