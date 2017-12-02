$(function(){

	$("#main11").focus(function(){
	  $(".s1").css("display","block");
	  $(".s1").html("6-50位字符组成");
	  $(".s1").css("color","#ccc");
	});
	$("#main12").focus(function(){
	  $(".s2").css("display","block");
	  $(".s2").html("6-20位字符，可由英文、数字及标点符号组成");
	  $(".s2").css("color","#ccc");
	});
	$("#main13").focus(function(){
	  $(".s3").css("display","block");
	  $(".s3").html("请再次输入密码");
	  $(".s3").css("color","#ccc");
	});
	$("#main14").focus(function(){
	  $(".s4").css("display","block");
	  $(".s4").html("2-20位字符，可由中文或英文组成");
	  $(".s4").css("color","#ccc");
	});
	$("#main15").focus(function(){
	  $(".s5").css("display","block");
	});
	$("#main16").focus(function(){
	  $(".s6").css("display","block");
	});
	
	$("#main11").blur(function(){
	  //$(".s1").css("display","none");
	  email();
	});
	$("#main12").blur(function(){
	  //$(".s2").css("display","none");
	  pass();
	});
	$("#main13").blur(function(){
	  //$(".s3").css("display","none");
	  pass2();
	});
	$("#main14").blur(function(){
	  //$(".s4").css("display","none");
	  name();
	});
	$("#main15").blur(function(){
	  $(".s5").css("display","none");
	});
	$("#main16").blur(function(){
	  $(".s6").css("display","none");
	});
	$(".register").click(function(){
		zong();
	})
	
	function email(){
		if($("#main11").val()){
			var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
			if(reg.test($("#main11").val())){				
				$(".s1").html("账号可用");
				$(".s1").css("color","#268bf3");
				return true;
			}else{
				$(".s1").html("用户名只能用邮箱注册");
				$(".s1").css("color","red");
				return false;
			}
		}else{
			$(".s1").html("");
		}
	}
	function pass(){
		if($("#main12").val()){
			var reg = /^\w{6,20}$/;
			if(reg.test($("#main12").val())){				
				$(".s2").html("密码可用");
				$(".s2").css("color","#268bf3");
				return true;				
			}else{
				$(".s2").html("6-20位字符，可由英文、数字及标点符号组成");
				$(".s2").css("color","red");
				return false;
			}
		}else{
			$(".s2").html("");
		}
	}
	function pass2(){
		if($("#main13").val()){
			if($("#main12").val() == $("#main13").val()){				
				$(".s3").html("密码正确");
				$(".s3").css("color","#268bf3");
				return true;				
			}else{
				$(".s3").html("两次输入密码不一致");
				$(".s3").css("color","red");
				return false;
			}
		}else{
			$(".s3").html("");
		}
	}
	function name(){
		if($("#main14").val()){
			var reg = /^[a-zA-Z\u4e00-\u9fa5]{2,20}$/;
			if(reg.test($("#main14").val())){				
				return true;				
			}else{
				$(".s4").html("2-20位字符，可由中文或英文组成");
				$(".s4").css("color","red");
				return false;
			}
		}else{
			$(".s4").html("");
		}
	}
//	function checked(){
//		var flag = true;
//		if($("#yeshi").checked){
//			flag = false;
//		}
//		if(!flag){
//			return true;
//			console.log(sss)
//		}else{
//			return false;
//		}
//	}
//	  checked();
//应该是jquey和原生不能混用的原因，等会记着查	
	function zong(){
		if(email()&&pass()&&pass2()&&name()){
			var nam = $("#main11").val();
			var psd = $("#main12").val();
			var data = {
				"uname":nam,
				"upsd":psd
			}
			var d = JSON.stringify(data);
			localStorage.setItem("user",d);
			alert("注册成功")
		}
	}

})
