var timer = setInterval(autoplay,3000);
var num = 0;
function autoplay(){	
	num += 1;
	if (num > 4){
		num = 0;
	}
	$("#ul").children().eq(num).fadeIn().siblings().fadeOut();
	$("#ol").children().eq(num).css("background","#FF0000").siblings().css("background","white");
}
$(".banner").hover(function(){
	clearInterval(timer);
},function(){
   timer = setInterval(autoplay,3000);
})
var olis = $("#ol li");
for(var i = 0;i < olis.length;i ++){
	olis[i].index = i;
	olis[i].onclick = function(){
		num = this.index - 1;
		autoplay();
	} 
}

var over = document.getElementsByClassName("over");
var second = document.getElementsByClassName("second")[0];

for(var i = 0;i < over.length;i ++){
	over[i].index = i;
	over[i].onmouseenter = function(){
		second.style.display = "block";
		var index = this.index;
//		$.ajax({
//			type:"get",
//			url:"main,json",
//			async:true,
//		});
	}
	over[i].onmouseleave = function(){
		second.style.display = "none";
	}
}

var username = JSON.parse(localStorage.getItem("user")).uname;
if(username){
	$("#abc").html('<span class="left">欢迎回来，'+username+'</span>'+
							'<a><span class="right"></span></a>'+
							'<a><span class="right exit">退出</span></a>');
}else{
	$("#abc").html('<span class="left">您好，欢迎光临阳光海淘</span>'+
							'<a href="register.html"><span class="right">注册</span></a>'+
							'<a href="login.html"><span class="right">登陆</span></a>');

}

$(".exit").click(function(){
	$("#abc").html('<span class="left">您好，欢迎光临阳光海淘</span>'+
							'<a href="register.html"><span class="right">注册</span></a>'+
							'<a href="login.html"><span class="right">登陆</span></a>');
})
$("#top").click(function(){
	$("body,html").animate({scrollTop:0},600);
})
