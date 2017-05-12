$( document ).ready(function() {
    $(".nav").find('a').each(function(){
	   var curValue = $(this).attr('href').substring(1);
	   if (curValue.indexOf('-') > -1)
		{
		  var curValue = curValue.replace(/-/g , " ");
		};
	   $(this).text(curValue);
	});



   

    pageload();

    $(".nav a").click(function() {
    	pageload();
    })
}); // doc ready



// tab switch ajax
var pageload = function() {
	
	var currentPage = window.location.hash.substring(1);
	$("ul.nav li.active").removeClass("active");

	var newLink = $("/pages/"+currentPage+".html");
	console.log(newLink);
	
	$(".content").empty().load(newLink);

	$(".content h3").each(function() {
		var sectionReg = $(this).text();
		var section = $(this).text().replace(/ /g , "-").toLowerCase();
		console.log(section);
		
		$('a[href="#' + currentPage + '"] + ul').append("<li><a href='#"+section+"'>"+sectionReg+"</a></li>");
	});
	
	$('a[href="#' + currentPage + '"]').parent().addClass("active");

};