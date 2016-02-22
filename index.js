$(document).ready(function () {
	document.getElementById("myAudio").volume = 0.1;
	
	$(window).scroll(function cebianlanMove() {
		var sclTop = $(window).scrollTop();
		if (sclTop >= 800 ) {
			$("#cebianlan").slideDown(1000);
		}else{
			$("#cebianlan").css("display","none");
		};
	})

	


	$("#zhuti").mouseover(function () {
		$("#zhuti img").css("display","block")
	})
	$("#zhuti").mouseout(function () {
		$("#zhuti img").css("display","none")
	})


	$("#jiben>div").click(function () {
		if (!$("#jiben>ul").is(":animated")) {
			$("#jiben>ul").slideToggle("slow");
		}
	})
	$("#jiaoyu>div").click(function () {
		if (!$("#jiaoyu>ul").is(":animated")) {
			$("#jiaoyu>ul").slideToggle("slow");
		}
	})
	$("#gongzuo>div").click(function () {
		if (!$("#gongzuo>ul").is(":animated")) {
			$("#gongzuo>ul").slideToggle("slow");
		}
	})
	$("#xingqu>div").click(function () {
		if (!$("#qingqu>ul").is(":animated")) {
			$("#xingqu>ul").slideToggle("slow");
		}
	})
	$("#youqing>div").click(function () {
		if (!$("#youqing>ul").is(":animated")) {
		$("#youqing>ul").slideToggle("slow");}
	})

	$("#xingqu").mouseover(function () {
		$(this).find("p").slideDown();
	})
	
	$("#xingqu ul li img").hover(function () {
		if (!$(this).next().is(":animated")) {
		$(this).next().slideToggle("slow");}
	})

	
	$("#deng").click(function () {
		var xianChang = $("#xian1").height();
		if (xianChang == 50) {
			$("#xian1").animate({height:"100px"});
			$("#huan1").animate({top:"100px"}).css("background-color","#111");
			$("#xian2").animate({top:"150px"});
			$("#huan2").animate({top:"200px"});
			$("body").css("background","#ddf");
			$("header").css("background-image","url(./img/封面背景2.jpg)")
			document.getElementById("myAudio").volume = 0.05;
			$("#zhuti").css("color","#ddd")
		}else if (xianChang == 100) {
			$("#xian1").animate({height:"50px"});
			$("#huan1").animate({top:"50px"}).css("background","none");
			$("#xian2").animate({top:"100px"});
			$("#huan2").animate({top:"150px"});
			$("body").css("background","#fff");
			$("header").css("background-image","url(./img/封面背景.jpg)")
			document.getElementById("myAudio").volume = 0.1;
			$("#zhuti").css("color","#000")
		}
	})

	var myCheck = true;
	$("#huan2").click(function () {
		var soundPlay = $("#myAudio")[0];
		myCheck ? soundPlay.pause() + $(this).css("background","#A757A8") : soundPlay.play() + $(this).css("background","none") ;
		myCheck = !myCheck ;
	})

	// 原生方法
	// var myAudioCheck = true;
	// document.getElementById("huan2").onclick = function () {
	// 	var soundPlay = document.getElementById("myAudio");
	// 	myAudioCheck ? soundPlay.pause() : soundPlay.play() ;
	// 	myAudioCheck = !myAudioCheck ;
	// }


	$("#gongzuo ul li").click(function () {
		var imgDisplay = $(this).children("img").css("display");
		if (imgDisplay == "inline-block" && !$(this).children("img").is(":animated")) {
			$(this).children("img").slideUp(1000);
			$($(this).children("h4").get(0)).prepend("<br />");
		}else if (imgDisplay == "none" && !$(this).children("img").is(":animated")) {
			$(this).children("img").slideDown(1000);
			$($(this).find('br').get(0)).remove("br");
		}
	})




})

