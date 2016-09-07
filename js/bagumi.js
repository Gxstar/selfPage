$(function(){
	 var searchBtn=document.getElementById("search");
	 var searchInBtn=document.getElementById("searchIn");
	 searchBtn.addEventListener("click",function(e){
	 	e.preventDefault();
	 	var urlStr="https://cn.bing.com/search?q=";
	 	var seaStr=$("#searchBox").val();
	 	window.open(urlStr+seaStr);
	 })
	 searchInBtn.addEventListener("click",function(e){
	 	e.preventDefault();
	 	var seaInStr=$("#searchBox").val();
	 	var inStr="https://cn.bing.com/search?q="+seaInStr+"%20site:gxstar.cf";
	 	window.open(inStr);
	 })
});