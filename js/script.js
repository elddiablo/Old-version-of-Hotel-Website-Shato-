
var divs_p = $(".underHeader .options .row .inRow p");
var divs = $(".underHeader .options .row .inRow");
var innerRowDiv = $(".underHeader .options .row .inRow .innerP");
var scrWidth = window.innerWidth;
console.log(scrWidth); //767



var menu_trans_buttons = $('.main .navbar-nav .menuItem');

$(menu_trans_buttons[0]).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".advantages_section").offset().top},
	        1000);
});
$(menu_trans_buttons[1]).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".footer").offset().top},
	        1000);
});
$(menu_trans_buttons[3]).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".gallery_section").offset().top},
	        1000);
});

var divs_kitchen_0 = divs[0];
var divs_rooms_1 = divs[1];
var divs_advantages_2 = divs[2];
var divs_territory_3 = divs[3];
var divs_occasion_4 = divs[4];
var divs_gallery_5 = divs[5];
		
$(divs_kitchen_0).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".kitchen").offset().top},
	        700);
});

$(divs_rooms_1).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".rooms").offset().top},
	        700);
});

$(divs_advantages_2).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".advantages_section").offset().top},
	        700);
});

$(divs_territory_3).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".territory").offset().top},
	        700);
});

$(divs_occasion_4).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".occasion_section").offset().top},
	        700);
});

$(divs_gallery_5).on('click', function() {
	    $('html,body').animate({
	        scrollTop: $(".gallery_section").offset().top},
	        700);
});


if(scrWidth > 768){
	divs.hover(function() {
	// this.style.backgroundColor = "black";
	$(this).css('background-color', 'black');
	var pos = jQuery.inArray(this, divs);

	$(divs_p[pos]).css({
		top: '20%',
		transform: 'translateY(-20%)'
	});
	$(innerRowDiv[pos]).fadeIn(500);

}, function() {
	// this.style.backgroundColor = "rgba(0,0,0,0.5)";
	$(this).css('background-color', 'rgba(0,0,0,0.5)');
	var pos = jQuery.inArray(this, divs);
	$(divs_p[pos]).css({
		top: '50%',
		transform: 'translateY(-50%)'
	});
		if(this.style.display != "none"){
				$(innerRowDiv[pos]).hide();
			}
		// $(innerRowDiv[pos]).fadeOut(0);
	
});
}






// divs.mouseover(function(event) {
// 	this.style.backgroundColor = "black";
// 	var pos = jQuery.inArray(this, divs);
// 	console.log(pos);
// 	$(divs_p[pos]).css({
// 		top: '20%',
// 		transform: 'translateY(-20%)'
// 	});
	
// 	$(innerRowDiv[pos]).fadeIn(400);


// });
// divs.mouseout(function(event) {
// 	this.style.backgroundColor = "rgba(0,0,0,0.5)";
// 	var pos = jQuery.inArray(this, divs);
// 	console.log(pos);
// 	$(divs_p[pos]).css({
// 		top: '50%',
// 		transform: 'translateY(-50%)'
// 	});
	
// 	$(innerRowDiv[pos]).fadeOut(400);
// });


// $(innerRowDiv[pos]).css('display', 'block');
// $(innerRowDiv[pos]).css('display', 'none');



// divs_p.css({
// 		top: '20%',
// 		transform: 'translateY(-20%)'
// 	});
// divs_p.css({
// 		top: '50%',
// 		transform: 'translateY(-50%)'
// 	});
var roomsSection = $('.rooms');
var roomsSection_innerDiv = $('.rooms .inner_h');
var roomsSection_h1 = $('.rooms .inner_h h1');
var roomsSection_h1_line = $('.rooms .inner_h .h1_line');

var roomsSection_room_types = $('.room_types');
var roomsSectio_room_types_item = $('.rooms .room_types .room_types_item');

var room_book = $('.rooms .room_types .room_types_item .item_area .room_book');

roomsSection_h1.css('margin', '0');



var navbar = $('html body .navbar-inverse');
var navbar_items = $('html body .navbar-inverse li.menuItem a');
var logo_img = $('html body .navbar-inverse .logo_li img');
var logo = $('html body #header #mainLogo');

var collapse_items = $('#bs-example-navbar-collapse-1');

console.log(logo);
$(document).scroll(function() {
  var y = $(this).scrollTop();
  x = 200;
  	if(y > x)
   {
    $(navbar).css('background-color', '#191918');
    if(scrWidth <= 768){
    	$(collapse_items).css('background-color', '#191918');
    }
    
    $(navbar_items).css('font-size', '0.9em');
    
    
    if(scrWidth <= 768){
    	$(logo_img).css('top', '-70px');
    	$(logo).css('font-size', '2.7em');
    } else {
    	$(logo_img).css('top', '-52px');
    	$(logo).css('font-size', '2em');
    }
  } else {
    $(navbar).css('background-color', '#272726');
    if(scrWidth <= 768){
    	$(collapse_items).css('background-color', '#272726');	
    }
    $(navbar_items).css('font-size', '1em');
    $(logo).css('font-size', '2.7em');

    $(logo_img).css('top', '-70px');
  }
});

var collapse_ul_zone = $('#bs-example-navbar-collapse-1 ul');
var navbar_button = $('.navbar-header button');


$(collapse_ul_zone).on('click', function() {
	$(this).parent().removeClass('in');
});	


var menuItem_a = $('html body .main .menuItem .menuItem_a');
if(scrWidth > 768){
	menuItem_a.hover(function() {
	$(this).css('color', '#ffffff');
	$(this).css('box-shadow', '0px 9px 11px 0px rgba(0,0,0,0.7)');
	}, function() {
		$(this).css('color', '#c9c9c9');
		$(this).css('box-shadow', 'none');
	});
}






$(document).scroll(function() {
  var y = $(this).scrollTop();
  if(scrWidth > 768){
  	x = 200;
  	if(y > x)
   {
    roomsSection_innerDiv.fadeIn();
    roomsSection_h1_line.css('width', '80%');
    roomsSection_h1.css('padding', '1.5% 0%');
  } else {
    roomsSection_innerDiv.fadeOut();
    roomsSection_h1_line.css('width', '40%');
    roomsSection_h1.css('padding', '0%');
  }
}
else{
	roomsSection_innerDiv.show();
    roomsSection_h1_line.css('width', '100%');
    roomsSection_h1.css('padding', '1.5% 0%');
}
});




$(room_book).hover(function() {
	$(this).css('background-color', 'rgba(0,0,0,0.8)');
}, function() {
	$(this).css('background-color', 'rgba(0,0,0,0.4)');
});


var rooms_desc_h1 = $('.rooms .room_types .room_types_item .item_area .room_describtion h1');

$(rooms_desc_h1).hover(function() {
	$(this).css('background-color', 'rgba(0,0,0,0.8)');
}, function() {
	$(this).css('background-color', 'rgba(0,0,0,0.4)');
});








//////_______________________SLIDER_kitchen____________________






//////_______________________SLIDER_territory____________________



		// var sliderImages = document.querySelectorAll('.slide'),
		
			
		// var slider_area = $('.slider_inner_kitchen');
		// var slider_area_prev = $('#prev');
		// var slider_area_next = $('#next');

		// $('.inner_slider .active').fadeIn(2000);
		// slider_area_prev.click(function(event) {
		// 	console.log('lol');
		// });
		
		// $(slider_area_next).on('click', function() {
		// 	console.log('woa');
		// 	var currImg = $('.inner_slider .active');
		// 	var nextImg = currImg.next();
		// 	if(nextImg.length){
		// 		currImg.removeClass('active').fadeOut(500, function(){
		// 			nextImg.addClass('active').fadeIn(500);
		// 		});
		// 	}

		// });
		// $(slider_area_prev).on('click', function() {
		// 	var currImg = $('.inner_slider .active');
		// 	var prevImg = currImg.prev();
		// 	if(prevImg.length){
		// 		currImg.removeClass('active').fadeOut(500, function(){
		// 			prevImg.addClass('active').fadeIn(500);
		// 		});
		// 	}
		// });
		var advantages_section_row = $('.advantages_section .row');
		var advantages_section_h1 = $('.advantages_section h1');
		var advantages_section_h1_line = $('.advantages_section .h1_line');
		var advantage_row_items = $('.advantages_section .advantage_item');

		advantage_row_items.css('color', 'white');

		$(advantage_row_items).hover(function() {
			// $(this).css('opacity', '1');
			$(this).css('background-color', 'white');
			$(this).css('color', 'black');
			// $(this).hide();
			// $(this).fadeOut(300);

		}, function() {
			// $(this).css('opacity', '0.6');
			$(this).css('background-color', 'rgba(0,0,0,0.5)');
			$(this).css('color', 'white');
			// $(this).fadeIn(300);
			// $(this).show();

		});

		$(document).scroll(function() {
      
      var y = $(this).scrollTop();
      var x;
      if(scrWidth > 768){
          x = 1900;

      if (y > x) {
      	advantages_section_row.fadeIn();
        advantages_section_h1.fadeIn(1000);
        advantages_section_h1_line.fadeIn(1200);
        advantages_section_h1_line.css('width', '100%');
        advantages_section_h1.css('padding', '2% 0%');
        advantages_section_h1.css('padding-left', '2%');
        

      } else {
      	advantages_section_row.fadeOut();
        advantages_section_h1.fadeOut();
        advantages_section_h1_line.fadeOut();
        advantages_section_h1_line.css('width', '40%');
        advantages_section_h1.css('padding', '0%');
      }
  }
  else{
  	advantages_section_row.show();
    advantages_section_h1.show();
    advantages_section_h1_line.show();
    advantages_section_h1_line.css('width', '100%');
    advantages_section_h1.css('padding', '2% 0%');
    advantages_section_h1.css('padding-left', '2%');
  }
    });





		var occasion_section_h1 = $('.occasion_section .title_inner_occasion_section h1');
	    var occasion_section_h1_line = $('.occasion_section .title_inner_occasion_section .h1_line');
	    var occasion_section_slider = $('.occasion_section .slider_inner_occasion_section');
	    var occasion_section_describtion = $('.occasion_section .describtion_inner_occasion_section');
    $(document).scroll(function() {
      
      var y = $(this).scrollTop();
      var x;
      if(scrWidth > 768){
          x = 2650;

      if (y > x) {
        occasion_section_h1.fadeIn(700);
        occasion_section_h1_line.fadeIn(1000);
        occasion_section_h1_line.css('width', '80%');
        occasion_section_h1.css('padding', '2% 0%');
        occasion_section_h1.css('padding-left', '2%');
        occasion_section_slider.fadeIn(1000);
        occasion_section_describtion.fadeIn(1000);

      } else {
        occasion_section_h1.fadeOut(1000);
        occasion_section_h1_line.fadeOut(700);
        occasion_section_h1_line.css('width', '40%');
        occasion_section_h1.css('padding', '0%');
        occasion_section_slider.fadeOut(1000);
        occasion_section_describtion.fadeOut(1000);
      }

     }
     else{
  		occasion_section_h1.show();
        occasion_section_h1_line.show();
        occasion_section_h1_line.css('width', '100%');
        occasion_section_h1.css('padding', '2% 0%');
        occasion_section_h1.css('padding-left', '2%');
        occasion_section_slider.show();
        occasion_section_describtion.show();
  }
    });








		var kitchen_h1 = $('.kitchen .title_inner_kitchen h1');
		var kitchen_h1_line = $('.kitchen .title_inner_kitchen .h1_line');
		var kitchen_slider = $('.kitchen .slider_inner_kitchen');
		var kitchen_describtion = $('.kitchen .describtion_inner_kitchen');
		$(document).scroll(function() {
			
		  var y = $(this).scrollTop();
		  var x;
		 if(scrWidth > 768){
          x = 2000;


		  kitchen_h1.fadeIn(700);
		    kitchen_h1_line.fadeIn(1000);
		    kitchen_h1_line.css('width', '80%');
		    kitchen_h1.css('padding', '2% 0%');
		    kitchen_h1.css('padding-left', '2%');
		    kitchen_slider.fadeIn(1000);
		    kitchen_describtion.fadeIn(1000);
		}
		else
		{
			kitchen_h1.show();
		    kitchen_h1_line.show();
		    kitchen_h1_line.css('width', '100%');
		    kitchen_h1.css('padding', '2% 0%');
		    kitchen_h1.css('padding-left', '2%');
		    kitchen_slider.show();
		    kitchen_describtion.show();
		}
		});



		var territory_h1 = $('.territory .title_inner_territory h1');
		var territory_h1_line = $('.territory .title_inner_territory .h1_line');
		var territory_slider = $('.territory .slider_inner_territory');
		var territory_describtion = $('.territory .describtion_inner_territory');
		$(document).scroll(function() {
		  
		  var y = $(this).scrollTop();
		  var x;
		  if(scrWidth > 768){
          x = 200; //4150
		  territory_h1.show();
		    territory_h1_line.show();
		    territory_h1_line.css('width', '100%');
		    territory_h1.css('padding', '2% 0%');
		    territory_h1.css('padding-left', '2%');
		    territory_slider.show();
		    territory_describtion.show();
		}
		else{
			territory_h1.show();
		    territory_h1_line.show();
		    territory_h1_line.css('width', '100%');
		    territory_h1.css('padding', '2% 0%');
		    territory_h1.css('padding-left', '2%');
		    territory_slider.show();
		    territory_describtion.show();
		}
		});




		var gallery = $('.gallery');
		var gallery_h1 = $('.gallery_section h1');
		var gallery_h1_line = $('.gallery_section .h1_line');
		var gallery_grid = $('#masonry');

		$(document).scroll(function() {
		  
		  var y = $(this).scrollTop();
		  var x;
		  if(scrWidth > 768){
          x = 4900;
		  if (y > x) {
		    gallery_h1.fadeIn(700);
		    gallery_h1_line.fadeIn(1000);
		    gallery_h1_line.css('width', '80%');
		    gallery_h1.css('padding', '2% 0%');
		    gallery_grid.fadeIn(1000);

		  } else {
		  gallery_h1.fadeOut(1000);
		    gallery_h1_line.fadeOut(700);
		    gallery_h1_line.css('width', '40%');
		    gallery_h1.css('padding', '0%');
		    gallery_grid.fadeOut(1000);
		  }
		}
		else{
			gallery_h1.show();
		    gallery_h1_line.show();
		    gallery_h1_line.css('width', '80%');
		    gallery_h1.css('padding', '2% 0%');
		    gallery_grid.show();
		}
		});

	






	var gallery_array = $('#masonry .item');
	$(gallery_array).hide();
	$(gallery_array).slice(0, 10).show(1000);


	var isClicked = false;
	


	

	$(".gallery_sliderspace .load_more").on('click',function(){ // click event for load more
		console.log("button is clicked");
		if(isClicked === false){
			$(gallery_array).slice(11, gallery_array.length).fadeIn(600); // select next 10 hidden divs and show them
			
				$(this).html('<span>Скрыть</span>');
			
			
			isClicked = true;
		}
		else{
			$(gallery_array).slice(11, gallery_array.length).fadeOut(600);
			// select next 10 hidden divs and show them
			
				$(this).html('<span>Больше</span>');
			
			
			isClicked = false;
			
		}
        
    });

	if(scrWidth > 768){
	 	$(".gallery_sliderspace .load_more").hover(function() {
    	$(this).css('background-color', 'white');
    	$(".gallery_sliderspace .load_more span").css('color', 'black');
    }, function() {
    	$(this).css('background-color', '#272727');
    	$(".gallery_sliderspace .load_more span").css('color', 'white');
    });	
	 }
	

   

	








	// gallery_____________________________________gallery__________________________-gallery


    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
     /* This is basic - uses default settings */
	


     // 	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


	 // $('.gallery_section .item').on('click',function() {
  // 	$(this).toggleClass('active');
		// });
	


	 var button_footer = $('.footer .submit_button button');

	 $(button_footer).hover(function() {
		$(this).css('background-color', 'rgba(0,0,0,0.8)');

	}, function() {
		$(this).css('background-color', 'rgba(0,0,0,0.4)');
	});

   


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	if(scrWidth > 892){
	scrollFunction();

}
};
 

function scrollFunction() {
	
    if (document.documentElement.scrollTop > 200) {
        // document.getElementById("myBtn").style.display = "block";
	       $('#myBtn').fadeIn(500, function(){
	        	$('#myBtn').hover(function() {
	        	$(this).css({'opacity': '0.8'});
	        }, function() {
	        	$('#myBtn').css({'opacity': '0.5'});
	        });
        });
       
    } else {
        // document.getElementById("myBtn").style.display = "none";
        $('#myBtn').fadeOut(500);
    }

}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.body.scrollTop = 0; 
    $(document.body).animate({
        scrollTop: 0
    }, 700);
    // document.documentElement.scrollTop = 0;

    $(document.documentElement).animate({
        scrollTop: 0
    }, 700);

}



var form_section_button = $('.form_section button');
form_section_button.hover(function() {
	$(this).css('background-color', 'white');
	$(this).css('color', 'black');
}, function() {
	$(this).css('background-color', '#272726');
	$(this).css('color', 'white');
});









		