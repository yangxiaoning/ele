app.controller('breakfastCtrl',function ($scope,$css,$http) {
	
	$css.removeAll();
	$css.add('breakfast/css/breakfast.css');
	
	
//	tab切换
	$('div.Break .main-right section:first').show();
	$('div.Break .main-left ul li:first').css({
		color : 'red',
		background : 'white',
		borderLeft : 'solid 4px red'
	});
	$('div.Break .main-left ul li').click(function () {
		$('div.Break .main-right section').hide().eq($(this).index()).stop().fadeIn();
		$('div.Break .main-left ul li').css({
			color : 'black',
			background : '#FAFAFA',
			border : 'none'
		}).eq($(this).index()).css({
			color : 'red',
			background : 'white',
			borderLeft : 'solid 4px red'
		});
		
		$('.mmp2').html($(this).html())
	});
	
//	文字显示

	$('.mmp2').html($('div.Break .main-left ul li:first').html());
	
	
	
//	window.onscroll = function () {
//		
//		var height = $(window).height() - $('div.Break .main-top').height() - $('nav').height();
//		
//		if (document.body.scrollTop >= $('div.Break .break-nav').height()) {
//			
//			$('div.Break .break-nav').hide();			
//			$('div.Break .main-right').css({
//				height : height,
//				overflow : 'auto'
//			});
//			
////			console.log($('.main-right1')[0].scrollHeight);
//		} 
//		if (document.body.scrollTop < $('div.Break .break-nav').height()) {
//			
//			
//			$('div.Break .break-nav').show();
//			
//			$('div.Break .main-right').css({
//				height : '100%'
////				overflow : 'auto'
//			});
//		}	
//	};
	
	
	
	
	$http.get("http://localhost:8888/waimai/json/index.json").success(function (data) {
		
		$scope.breakfs = data.breakfs;
		
		

		
	});
});