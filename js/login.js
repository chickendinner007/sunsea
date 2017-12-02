$(function(){
	

	var userInfo = JSON.parse(localStorage.getItem("user"));
	var name = userInfo.uname;
	var psd = userInfo.upsd;
	
	$(".log3").click(function(){
		if($(".user input").val() == name && $(".psd input").val() == psd){
			alert("登陆成功")
			location.href = "index.html";
		}else{
			alert("请确认用户名或密码是否正确")
		}

	})

})