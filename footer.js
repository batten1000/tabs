
function programAndIssueNavHovers() {

    $('.level1').click(
       function () {
    //set up overrides
      //keep nav from flickering when click or select text
	//if( $(this).hasClass('active') ) { return false; }
      //show landing page description, b/c its the first in the list. 
	$('.levelsContainer:visible .landingDesc').show();
      //close windows
	$('.close').click(function() {  $('.level1, .levelsContainer li').removeClass('active');   $('.levelsContainer, .level3, .level4').hide();  return false;  });
      //redirect links
	$('.navLink').click(function() {  window.location = $(this).attr('href');  return false;  });
    
    //level3 click 
	$('.level3 li').click(function () {
	    $(".level3 li").removeClass("active");
	    $(this).addClass("active");
	    $(".level4").hide();
	    var level4Match = $(this).find("span").attr("coords"); 
	    $(level4Match).fadeIn('fast');
	    return false;
	});
    //level2 click
	$('.level2 li').click(
	  function () {
	    $(".level3, .level4, .levelsContainer:visible .landingDesc").hide();
	    $(".levelsContainer li").removeClass("active"); //do not remove keeps nav stable
	    $(this).addClass("active");
	    var level3Match = $(this).find("span").attr("coords"),
		level3FirstListItem = $(level3Match).find('li:first');
	    $(level3Match).fadeIn('fast');
	    if( $(level3FirstListItem).hasClass('hasKids') ) {
		$(level3FirstListItem).addClass('active');
		level4Match = $(level3Match).find("span").attr("coords");
		$(level4Match).fadeIn('fast');
		}
	    return false;
	});
    //level1 resets
        $('.level1, .levelsContainer li').removeClass('active'); 
        $('.levelsContainer, .level3, .level4').hide();
    //size the levelsContainer
	var section = $(this).parent().attr('id'), marginLeft = $(this).position().left, marginTop = 0, width = $('#wrapper').width();
	        if ((pageClass == 'index') && ($(window).width() > compactLayoutWidth)) {
            var width = Math.ceil($('#wrapper').width() - $('#program_nav').width());
            //large index program nav
            if (section == 'program_nav') {
                var marginTop = '-' + $(this).position().top;
            }
        } else {
            //not large index
            if (section == 'program_nav') {
                var marginTop = 34;
            }
            //all issues
            else { 
	            //subtract border on issues bar
	            var border = 10, marginLeft = (marginLeft - $('#wrapper').offset().left + border), 
	            width = Math.ceil( $('#wrapper').width() - border), issuesWidth = $('#issues').outerWidth(), issuesHeight = $('#issues').outerWidth();
	            //small issues
	            if( $(window).width() < compactLayoutWidth) {
		            marginTop = -( $(this).children('.levelsContainer').outerHeight() + $(this).position().top + 20);
		            }
            }
        }
        var marginLeft = '-' + marginLeft;
        $(this).addClass('active')
			.children('.levelsContainer')
			.css({ width: width + 'px', marginLeft: marginLeft + 'px', marginTop: marginTop + 'px'})
			.fadeIn('slow');
		 //show level1 first sections
        var level2Match = $(this).find('.levelsContainer:visible .level2 li:first span').attr('coords'), level3Match = $(level2Match).find('li:first span').attr('coords');
	    $(level2Match).show(), $(level3Match).show(), $(this).find('.levelsContainer:visible .level2 li:first').addClass('active');
    });
}
