jQuery(document).ready(function($){
$('.burger--wrapper').on("click", function(){
	console.log('клик по кнопке бургера');
	$('.site-navigation').addClass("active");
	// $('site-navigation.active').remove();
});
console.log("script.js is working");
// $('burger').addClass("active");

});