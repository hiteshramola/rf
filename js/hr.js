function disp(){   
		   var url = document.URL; // Get current url
			var stuff = url.split('#');
			var id = stuff[stuff.length-1];
			if(stuff.length == 1 || id==""){
				$( '#0' ).addClass( "active" ).slideDown();
			}else{
				$( ".active" ).removeClass( "active" ).slideUp(); 
				$( '#' + id ).addClass( "active" ).slideDown();
			}
		}

var s=0;
function showhide(){
		$('.smallmenu ul.menu').toggleClass('close');
		//alert(s++);
		if($('.smallmenu ul.menu').hasClass('close')){
				setTimeout(function(){
			$('.smallmenu ul.menu').addClass('hide');
			}, 700);
		}
		else{
			$('.smallmenu ul.menu').removeClass('hide');
		}
	
}
		   
$("a.clicked").click(function(event) {
	var hrefs = $(this).attr('href');
	setTimeout(function(){
	 $( ".active" ).removeClass( "active" ).slideUp('swing');
		}, 70);
	setTimeout(function(){
			$( hrefs ).addClass( "active" ).slideDown('swing');
		window.history.pushState("", "", hrefs);
	}, 700);
	event.preventDefault();
});

$('.smallmenu a').click(function(event){
	$( ".active" ).toggleClass( "active" ).slideUp('swing');
	$('#menuicon').toggleClass('open');
	showhide();
	alert("else2");
	event.preventDefault();
})			

$('#menuicon').click(function(event){
	$(this).toggleClass('open');
	if($(this).hasClass('open')){
		showhide();
		//alert("if");
		$( ".active" ).toggleClass( "active" ).slideUp('swing');
		return;
	 }
	else{
		showhide();
		//alert("else");
		disp();
		return;
	 }
	
	showhide();
	event.preventDefault();
});