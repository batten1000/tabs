//filterClass on index/multimedia page
$('.filterCategory a').click( function() {
	$('a.active').removeClass('active');
		var filterClass = $(this).prop('class').toLowerCase().replace(' ','-');
		$(this).addClass('active');
		if(filterClass == 'latest') {
				$('#left article, .index #sidebarA li').fadeIn('slow').removeClass('hidden');
		} else {
		$('#left article, .index #sidebarA li').each(function() {
			if(!$(this).hasClass(filterClass)) {
				$(this).fadeOut('normal').addClass('hidden');
			} else {
				$(this).fadeIn('slow').removeClass('hidden');
			}
		});
	  }
		return false;
	}).eq(0).addClass('active');