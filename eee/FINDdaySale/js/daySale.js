$.get("http://localhost:8888/JSON/index.json", function (data) {	
	$(".daySale .daySale_ShopBox").html(baidu.template("daySale_ShopBox_Template", data));
	console.log(data);
});
$(".goBack").click(function () {
	window.history.go(-1);
})