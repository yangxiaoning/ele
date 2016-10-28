app.controller('foodCtrl',function ($scope,$css,$http) {
	
	$css.removeAll();
	$css.add('food/css/food.css');
	$http.get("http://localhost:8888/waimai/json/index.json").success(function (data) {
		console.log(data);
		
		$scope.data = data.shopList;
		
		
	});	
	
	
	$(function () {
	
		
		
		var flag = true;
		
		$('div.Food .food-tto2 section').hide();
		
		$('.food-to1 section').click(function () {
			
			if (flag == true) {
				$('.food-to1 section').css({
					color : 'black'
				}).eq($(this).index()).css ({
					color : '#3190E8'
				});
				
				$('.food-s1').css({
					border : '0.5rem solid transparent',
					borderTop : '0.5rem solid black',
					top : '0.3rem',
				}).eq($(this).index()).css({
					border : '0.5rem solid transparent',
					borderBottom : '0.5rem solid #3190E8',
					top : 0
				});
				
			
				
				
				$('.food-tto2 section').hide().eq($(this).index()).slideDown(500,function () {
					$('.food1').height($(window).height());
				});
				
				flag = false;
				
			} else {


				$('.food-tto2 section').slideUp(500);
				$('.food-to1 section').css({
					color : 'black'
				});
				$('.food-s1').css({
					border : '0.5rem solid transparent',
					borderTop : '0.5rem solid black',
					top : '0.3rem',
				})
				flag = true;
				
				$('.food1').height(0);
				
			};
		});
		
		$('.to2-left ul li:nth-child(2)').css({
			background : 'white'
		});
		$('.to2-right ul').hide();
		
		$('.to2-right ul:nth-child(2)').show();
		
		
//		点击第一个隐藏div
//		$('.to2-left ul li:first').click(function () {
//			
//			$('.food1').height(0);
//			$('.food-to1 section').css({
//					color : 'black'
//			});
//			$('.food-s1').css({
//				border : '0.5rem solid transparent',
//				borderTop : '0.5rem solid black',
//				top : '0.3rem',
//			});
//			
//			flag = true;
//		});
		
		
		$('.to2-left ul li').click(function () {
			$('.to2-left ul li').css({
				background : '#F2F2F2'
			}).eq($(this).index()).css({
				background : 'white'
			});
			
			$('.to2-right ul').hide().eq($(this).index()).show();
		});
		
		
	});
	
	
});