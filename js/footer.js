$('.hide').hide();
compactLayoutWidth = 850;
imageRatio = .4755;
wrapperWidth = $('#wrapper').width();
windowWidth = $(window).width();
windowHeight = $(window).height(); 

function slideshows() {
    //small
    if ($(window).width() < compactLayoutWidth) {
        var slideWrapWidth = Math.ceil($('#wrapper').width()), 
        slideWrapHeight = Math.ceil(slideWrapWidth * imageRatio), 
        slideImageWidth = slideWrapWidth;
        $('.meta').addClass('blkFade').removeClass('hide');
    }
    //large
    else {
         var slideWrapWidth = Math.ceil($('#wrapper').width() * .9), 
             slideWrapHeight = Math.ceil(slideWrapWidth * imageRatio),
             slideImageWidth = slideWrapWidth; 
    } 
    $('#slideWrap').width(slideWrapWidth).height(slideWrapHeight);
    $('#slideshow li , #slideshow li img, .meta, .slideControls').width(slideImageWidth);
    $('#slideshow, #slideshow li, #slideshow li img').height(slideWrapHeight); //added after cycle upgrade   

    if ($('html').hasClass('index')) {
        verticalIndexProgramNav(slideWrapWidth, slideWrapHeight);
    }
}
function verticalIndexProgramNav(slideWrapWidth, slideWrapHeight) {
	level1Count = $('#program_nav .level1').size();
    var level1MarginFactor =  (1/level1Count); 
    var level1Height = Math.floor(slideWrapHeight * level1MarginFactor),
        programWidth = Math.ceil(($('#wrapper').width() - slideWrapWidth) * .5),
        wrapperRight = ($('#wrapper').position().left + $('#wrapper').width());
    if ($(window).width() < compactLayoutWidth) {
        $('#program_nav .level1').height(35);
        $('#program_nav').css({ top:  Math.floor($('#slideWrap').position().top - $('#program_nav').height() ) });
    } else {
        $('#program_nav .level1').height(level1Height);
        $('#program_nav').width(programWidth);
        $('#program_nav').css({ top: $('#slideWrap').position().top });
    }
}

function programAndIssueNavHovers() {

    $('.level1').click(
       function () {
       
	$('.levelsContainer:visible .landingDesc').show();
      //close windows
	$('.close').click(function() {  
	$('.level1, .levelsContainer li').removeClass('active');   
	$('.levelsContainer, .level3, .level4').hide();  
	return false;  
	});
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
	var width = Math.ceil($('#wrapper').width()); 
        /*set exceptions */
        if ($(window).width() > compactLayoutWidth) {
            var width = Math.ceil( width - $('#program_nav').width()),
                marginLeft = $('#program_nav').outerWidth(),
                marginTop = '-' + $(this).position().top;
                
        } else {
        	var marginTop = 34,
        		marginLeft = '-'+Math.ceil( $(this).offset().left - $('#wrapper').offset().left );
        }  
        $(this).addClass('active')
			.children('.levelsContainer')
			.css({ width: width + 'px', marginLeft: marginLeft+'px', marginTop: marginTop + 'px' })
			.fadeIn('slow');
		 //show level1 first sections
        var level2Match = $(this).find('.levelsContainer:visible .level2 li:first span').attr('coords'), level3Match = $(level2Match).find('li:first span').attr('coords');
	    $(level2Match).show(), $(level3Match).show(), $(this).find('.levelsContainer:visible .level2 li:first').addClass('active');
    });
}
 
//slideshow controls
$('#slideControl').toggle(function () {
    $('#slideshow').cycle('pause');
    $(this).addClass('play').removeClass('stop');
    }, function () {
    $('#slideshow').cycle('resume');
    $(this).addClass('stop').removeClass('play');
});

function keepProgramNavLeftForIE() {
    wrapperLeft = $('#wrapper').offset().left;
    $('#program_nav').css({ left: wrapperLeft });
}
function tabMenu() {
	$('.tabNav').each(function() {
		$(this).children('.tab').eq(0).addClass('active')
	});
	$('.tab').click(function() {
		var menuToHide = $(this).siblings('.active').find('a').attr('coords');
		console.log(menuToHide);
		$(menuToHide).hide();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var menuToShow = $(this).find('a').attr('coords');
		$(menuToShow).show();
		return false;
	});
	$('.submenu').eq(0).show();
}
$('.toggleNav').toggle(function() {
	$('.tabNav, .menuWrapper').addClass('vert').removeClass('horiz');
	$('.view').text('horiz');
	},
	function() {
	$('.tabNav, .menuWrapper').removeClass('vert').addClass('horiz');
	$('.view').text('vert');	
	});

function init() {
	keepProgramNavLeftForIE();
    programAndIssueNavHovers();    
    slideshows(); 
    tabMenu();
   }
 

function resizer() {
	keepProgramNavLeftForIE()
    //navs can't resize themselves if pane is open, so close them so the calculation can be redone after it's over
    $('.levelsContainer, .level3, .level4').hide();
    $('.level1, .levelsContainer li').removeClass('active'); 
    slideshows(); 
    verticalIndexProgramNav();
    
}

$(window).on('resize', resizer);