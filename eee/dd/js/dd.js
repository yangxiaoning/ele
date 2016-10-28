app.controller('ddCtrl',function ($scope,$css) {
	$css.removeAll();
	$css.add('dd/css/dd.css');
	
	
	$(function () {
		$('.dd-tab-contain section:first').css({
			display : 'block'
		});
		
		$('div.Dd .dd-tab ul li:first').css({
			color : '#3492E9',
			borderBottom : 'solid 2px #3492E9'
		});
		
		$('div.Dd .dd-tab ul li').click(function () {
			$('div.Dd .dd-tab ul li').css({
				color : 'black',
				border : 'none'
			}).eq($(this).index()).css({
				color : '#3492E9',
				borderBottom : 'solid 2px #3492E9'
			});
			
			$('.dd-tab-contain section').css({
				display : 'none'
			}).eq($(this).index()).show();
		});
		
		
	});
	
});