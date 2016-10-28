
$(function () {
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    pagination: '.swiper-pagination',
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    paginationClickable: true,
			    spaceBetween: 0,
		        centeredSlides: true, 
		        autoplay: 2000,
		        autoplayDisableOnInteraction: false
			});     
});
$.get("http://localhost:8888/JSON/index.json", function (data) {	
	$(".intergralShopBox .intergralShopList").html(baidu.template("intergralShop_Template", data));
});

$(".goBack").click(function () {
	window.history.go(-1);
})
