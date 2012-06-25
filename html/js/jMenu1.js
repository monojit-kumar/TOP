$(function() {
	// hide all the sub-menus
	$("span.toggle").next().hide();
	
	// add a link nudging animation effect to each link
    $("#jQ-menu a, #jQ-menu span.toggle").hover(function() {
        $(this).stop().animate( {
			color:"black"
        }, 300);
    }, function() {
        $(this).stop().animate( {
        }, 300);
    });
	
	// set the cursor of the toggling span elements
	$("span.toggle").css("cursor", "pointer");
	$("span.toggle").css("display", "block");
	
	
	// prepend a plus sign to signify that the sub-menus aren't expanded
	/*$("span.toggle").prepend("");*/
	
	
	// add a click function that toggles the sub-menu when the corresponding
	// span element is clicked
	$("span.toggle").click(function() {
		$(this).next().toggle(1000);
		
		// switch the plus to a minus sign or vice-versa
		var v = $(this).html().substring( 0, 1 );
		if ( v == "+" )
			$(this).html( "-" + $(this).html().substring( 1 ) );
		else if ( v == "-" )
			$(this).html( "+" + $(this).html().substring( 1 ) );
	});
});


 $(document).ready(function(){
         
	$('#first,#firstB,#firstC').click(function() {
		$(this).toggleClass("firstn");
	   });
	   $('.first').click(function() {
			$(this).toggleClass("firstn");
	   });
	   $('.second').click(function() {
		$(this).toggleClass("secondToggle");
	   });
	   $('.third').click(function() {
		$(this).toggleClass("thirdToggle");
	   });
	    $('#main,#mainTwo').click(function() {
		$(this).toggleClass("mainliactive");
	   });
	    $('#arrowMain').click(function() {
		$(this).toggleClass("downarrow");
	   });
 });