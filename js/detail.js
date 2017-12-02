window.onload = function(){

	function _(id){
		return document.getElementById(id)
	}
	
	//big.mouseenter(function(){
	//	console.log(111)
	//	zed.css("display","block");
	//	mask.css("display","block");
	//})
	//big.mouseleave(function(){
	//	zed.css("display","none");
	//	mask.css("display","none");
	//})
	
	
	var mImg = document.getElementsByClassName("mImg");
	var sImg = document.getElementsByClassName("sImg");
	var bImg = document.getElementsByClassName("bImg");
	
	var index = 1;
	for(var i = 0;i < sImg.length;i ++){
		sImg[i].index = i;
		sImg[i].onclick = function(){
			mImg[this.index].style.zIndex = index++;
			bImg[this.index].style.zIndex = index++;
		}
	}
	
	_("big").onmouseover = function(){
		_("mask").style.display = "block";
		_("zed").style.display = "block";
	}
	_("big").onmouseout = function(){
		_("mask").style.display = "none";
		_("zed").style.display = "none";
	}
	
	document.onmousemove = function(eva){
		var e = eva || window.event;
		var x = e.pageX - _("big").offsetLeft - _("mask").offsetWidth/2;
		var y = e.pageY - _("big").offsetTop - _("mask").offsetHeight/2;
		if(x < 0){
			x = 0;
		}else if(x > _("big").offsetWidth - _("mask").offsetWidth){
			x = _("big").offsetWidth - _("mask").offsetWidth;
		}
		if(y < 0){
			y = 0;
		}else if(y > _("big").offsetWidth - _("mask").offsetWidth){
			y = _("big").offsetWidth - _("mask").offsetWidth;
		}
		_("mask").style.top = y + "px";
		_("mask").style.left = x + "px";
		
		for(var i = 0;i < bImg.length;i ++){
			bImg[i].style.left = -2*x + "px";
			bImg[i].style.top = -2*y + "px";
		}
	}
}

	var xuan = $(".xuan1");
	for(var i = 0;i < xuan.length;i ++){
		xuan.click(function(){
			$(this).css({"color":"red","border-top":"2px solid red"}).siblings().css({"color":"black","border-top":"2px solid transparent"});
			
			var index = $(this).index();
			$(".fu").eq(index).show().siblings().hide();
		})
	}

