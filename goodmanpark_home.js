$(function() {
  $('.menu_button').on('click', function (e) {
	  e.preventDefault();
	  $('.menu_panel').toggleClass('menu_open');
	  $('.menu_button').toggleClass('menu_open');
  });
});


//switch to dog page
$(function() {
	$('.about_gp').on('click', function (e) {
		e.preventDefault();
		$('.main_content').load('about.html', function() {
			$('body').scrollTop(0);
	});
});
});

//switch back to home
$(function() {
	$('.pro_bono').on('click', function (e) {
	  e.preventDefault();
	  $('.main_content').load('pro_bono.html', function() {
		  $('body').scrollTop(0);
	  });
  });
});

//switch to about me
$(function() {
  $('.contact').on('click', function (e) {
	  e.preventDefault();
	  $('.main_content').load('contact.html', function() {
			$('body').scrollTop(0);
	  });
  });
});