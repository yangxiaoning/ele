$.get("http://localhost:8888/JSON/index.json", function (data) {
	$(".recommend main .recommendShopBox").html(baidu.template("recommendShopBox_Template", data));
});
$(".goBack").click(function () {
	window.history.go(-1);
})

$(".classifyBtn").click(function () {
	clickFn($(this),$(".classify"));
})
$(".sortBtn").click(function () {
	clickFn($(this),$(".sort"));
	
})
$(".screenBtn").click(function () {
	clickFn($(this),$(".screen"));
})

function clickFn (Btn,Box) {
	$(".selectionSortButtoms_in").height($(window).height());
	if (Box.hasClass("displayBlock") == false ) {
		$(".selectionSortButtons span").addClass("iBackgroundBottom");	
		$(".selectionSortButtons span").removeClass("iBackgroundTop");	
		Btn.addClass("iBackgroundTop");
		$(".SelectButtomBox").removeClass("displayBlock");
		Box.toggleClass("displayBlock");
	} else {	
		Box.removeClass("displayBlock");
		Btn.removeClass("iBackgroundTop");
		$(".selectionSortButtoms_in").height(0);
	}
}

$(".classifyLeft li").click(function () {
	$(".classifyLeft li").css("background-color","#F2F2F2");
	$(this).css("background-color","#fff");
	$(".classifyRight ul").removeClass("displayBlock2")
	$(".classifyRight ul").eq($(this).index()).toggleClass("displayBlock2");
})
