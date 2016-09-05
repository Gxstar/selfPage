$(function(){
	$("#container").fullpage({
		css3: true,
		resize: true,
		slidesColor: '#ffffff',
		verticalCentered: false,
		anchor: ["p1","p2","p3","p4"],
		afterLoad: function(anchorLink,index){
			$("#spotNav a").addClass('active');
			$("#spotNav a").eq(index-1).siblings().removeClass('active');
		},
		afterRender:function(){
			
		},
	});
	$(".header").css("opacity","1");
	$(".header").css("top","35%");
})