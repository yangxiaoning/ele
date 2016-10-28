app.controller('loveCtrl', function ($scope,$css) {
	
	$css.removeAll();
	$css.add('love/css/love.css');
	
	$(function () {
		$('div.Love .main-top ul li:first').css({
			color : 'red',
			border : 'solid 1px red'
		});
		$('div.Love .main-top ul li').click(function () {
			var index = $(this).index();
			var sum = - index * 50 ;
			$('div.Love .main-top ul').css({
				transform : 'translateX(' + sum + 'px' + ')'
			});
			$('div.Love .main-top ul li').css({
				color : 'black',
				border : 'solid 1px black'
			}).eq(index).css({
				color : 'red',
				border : 'solid 1px red'
			});
			
			$('div.Love .m1 section').hide().eq(index).slideDown(800);
			
			
		});
		$('div.Love .m1 section:first').css({
			display : 'block'
		});
});
	
});