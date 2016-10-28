app.controller('waimaiCtrl', function ($scope,$css,$http,$interval) {

	$css.removeAll();
	$css.add('waimai/css/waimai.css');

	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
        centeredSlides: true,
        autoplay: 1000,
        autoplayDisableOnInteraction: false
	});
	
	$(function () {	
	   	var index = 0;
        $('.xiabiao span').on('tap', function (e) {
	        index = $(this).index();

            move();
        });

        function move() {        
            var x = - $('.ca ul').width() * index + "px";
            $('.ca ul').css({
                transform: "translateX("+ x +")"
            });
            $('.xiabiao span').removeClass('current');
            $('.xiabiao span').eq(index).addClass('current');
        }
        
        $('.ca').on('swipeleft swiperight', function (e) {
        	index++;
            if (e.type == 'swipeleft') {     	
                if (index >= $('.ca ul').length) {
                    index = $('.ca ul').length - 1;
                }
            } else if (e.type == 'swiperight') {
                index--;
                if (index <= ($('.ca ul').length - 1)) {
                    index = 0;
                }
            }
            move();
        });
    });


	$http.get("http://localhost:8888/waimai/json/index.json").success(function (data) {

		
		$scope.data = data.shopList;
		
		$scope.food1 = data.food1;
		$scope.food2 = data.food2;
		
		
	});	
	
//	抢购定时器
	var h = 3;
	var m = 20;
	var s = 55;
	$scope.h = h < 10 ? "0" + h : h;
	$scope.m = m < 10 ? "0" + m : m;
	$scope.s = s < 10 ? "0" + s : s;
	
	var timer = $interval(function () {
		s--;
		$scope.s = s < 10 ? "0" + s : s;
		if (s <= 0) {
			s = 60;
			m = m - 1;
			$scope.m = m < 10 ? "0" + m : m;
		}
		if (m <= 0) {
			m = 60;
			h = h - 1;
			$scope.h = h < 10 ? "0" + h : h;
		}
		if (h <= 0) {
			$interval.cancel(timer);
		}
	},1000);
	
	
	
});