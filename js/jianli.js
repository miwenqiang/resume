$(document).ready(function(){
	var music =document.getElementById('music')
	var myStyle=true;
	touch.on('.music-btn','tap',function(){
	if(myStyle==true){
		$('.music-btn').removeClass('open');
		music.pause();
		myStyle=false;
	}else{
		$('.music-btn').addClass('open');
		music.play();
		myStyle=true;
	}
})
	var myIndex = 0;
	var pageNum = $('.page').length-1
	console.log(pageNum)
	touch.on('.main','swipeup',function(){
		console.log(myIndex)
		if(myIndex<pageNum){
		$('.page').eq(myIndex).addClass('pageUp');
		$('.page').eq(myIndex).find('.animated').addClass('hide');
		myIndex++;
		$('.page').eq(myIndex).find('.hide').removeClass('hide');
		if(myIndex==pageNum){
		$('.jiantou').hide();
		}
		$('.page').eq(myIndex).removeClass('pageDown');
	}
	})
	
	 touch.on('.main','swipedown',function(){
	 	 $('.jiantou').show();
	 	if(myIndex>0){
	 		$('.page').eq(myIndex).addClass('pageDown');
	 		$('.page').eq(myIndex).find('.animated').addClass('hide');
	 	myIndex--;
	 	$('.page').eq(myIndex).find('.hide').removeClass('hide');
	 	$('.page').eq(myIndex).removeClass('pageUp');

	 	}	
	 })
})