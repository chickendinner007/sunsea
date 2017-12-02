var _list = $(".right4");
//_list.click(function(){
//	alert(1)
//})

$.ajax({ 
	type:"get",
	url:"list.json",
	async:true,
	success:function(res){
		var res = res.naifen;
		var str = "";
		for(var i = 0;i < res.length;i ++){
			str += 	'<div class="right41">'+
					'<div class="img"><a href="page.html?pid='+res[i].id+'"><img src="img/list/'+res[i].src+'.jpg"/></a></div>'+
					'<p class="name"><a href="">'+res[i].name+'</a></p>'+
					'<p class="price"><span class="now">￥'+res[i].new+'</span><span class="old">￥'+res[i].old+'</span></p></div>';
		}
		_list.html(str)
	}
});

