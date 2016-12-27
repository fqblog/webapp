var swiper=new Swiper(".swiper-container",{
	direction:"horizontal",
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    keyboardControl : true,
});

// 控制音乐
var timer=null;
var count=0;
var temp=true;
	timer=setInterval(function(){
		$("#music").css('transform', 'rotate('+count+'deg)');
		count+=10;
		if(count>=360){
			count=0;
		}
	},100);
$("#music").click(function(event) {
	if(temp){
		clearInterval(timer);
		$("#music_mp3")[0].pause();
		temp=false;
	}else{
		timer=setInterval(function(){
			$("#music").css('transform', 'rotate('+count+'deg)');
			count+=10;
			if(count>=360){
				count=0;
			}
	 	},100);
	 	$("#music_mp3")[0].play();
	 	temp=true;
  	 }
});



//点击按钮enter进入主页
$("#enter").click(function(event) {
	//$("#music_mp3")[0].pause();
	$("#music").css('display', 'none');
	$(".swiper-container").css('display', 'none');
	$(".mainContainer").css('display', 'block');
});


var myScroll=null;
myScroll=new IScroll('#wrapper', { 
			mouseWheel: true,
			scrollbars: false,
			bounce:true,
		})