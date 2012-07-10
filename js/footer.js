$('.hide').hide();
compactLayoutWidth = 850;
imageRatio = .4755;
playerRatio = .75; /*  85% of 280px  for ads*/
wrapperWidth = $('#wrapper').width();
windowWidth = $(window).width();
windowHeight = $(window).height();
htmlClasses = $('html').attr('class').split(' ');
pageClass = htmlClasses[0];
templateClass = htmlClasses[1];
	var ua = navigator.userAgent;
	var event = (ua.match(/iPad/i)) ? "touchstart" : "click"; // ipad fix? doesn't work. 
	var IE = ua.match(/MSIE/i); 
/*********
VIDEOS
**********/ 	
 	
function  doVideo(video, videoFile, service) { 
    $('#video-player').remove(); //remove player so that sound doesn't continue in IE
    $('#videos  h3').removeClass('current'); //add current class to active videos
    $('a[data-url='+videoFile+']').parent('h3').addClass('current');
     if (service == 'youtube') { var embedURL = 'http://www.youtube.com/embed/' + videoFile + '?wmode=opaque';  }
     if (service == 'vimeo')   { var embedURL = 'http://player.vimeo.com/video/' + videoFile + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;wmode=transparent';  }
     if (service == 'blip') 	  { var embedURL = 'http://blip.tv/play/' + videoFile + '.html?p=1'; }
     var embedCode = '<iframe src="' + embedURL + '" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>';
     if(service == 'blip') { var embedCode = embedCode + '<embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#' + videoFile + '" style="display:none" wmode="opaque"></embed>'; }
     $('<div id="video-player"></div>').append(embedCode).prependTo('#stage');
     sizePlayer();
    }
    
function sizePlayer() {
    var playerWidth =  $('#stage').width(),
		      playerHeight = playerWidth*playerRatio, 
		      featVidWidth = $('#featuredVideo .meta').width(), 
		      featVidHeight = featVidWidth*playerRatio;
	    if(playerWidth != null) { $('#video-player, #video-player iframe').width(playerWidth).height(playerHeight);  }
	    if(featVidWidth != null) { $('#featuredVideo iframe').width(featVidWidth).height(featVidHeight); }
	}
  $('#videos a').bind(event, function(e) {
     video 		= $(this); 
     videoFile = video.attr('data-url');
     service    = video.attr('class');
     doVideo(video, videoFile, service);
     });
 

 
  function doAudio(podcastFile){ 
      audio = document.createElement('audio');
		 if((audio.canPlayType) && (IE != 'MSIE')) { 
		  $('.podcast').each(function(e) {
		       var podcast = $(this),
		  		podcastFile = podcast.children('h3').children('a').attr('data-url'); 		 		
		  		podcastFiles = '<source src="'+ podcastFile +'.mp3" type="audio/mpeg">'+
		  				  			    '<source src="'+ podcastFile +'.ogg" type="audio/ogg">';
		  		podcast.prepend('<audio id="audio-player-'+e+'" controls>'+ podcastFiles +'<p>Your browser does not support the audio element.</p></audio>');
		  		
		  		$('#audio-player-'+e).bind('loadedmetadata', function(e) { 
		  		 //console.log('loadedmetadata fired'); 
		  			audioObj = e.srcElement? e.srcElement : e.target; //firefox fix. e.srcElement undefined in firefox. http://www.webmasterworld.com/forum91/2195.htm
		  			duration =  audioObj.duration; 
		  		    minutes = Math.floor(duration/60), seconds = Math.floor(duration % 60); 
					if (seconds < 10) seconds = '0' + seconds;
					duration = minutes + ':' + seconds;
		  			podcast.children('h3').append('<span class="duration">['+ duration + ']</span>');
			  		});

		  });
		
	  }
	  else {
	    $('.podcast').each(function(e) {
		        var podcast = $(this),
		  		podcastFile = podcast.children('h3').children('a').attr('data-url'); 	
		  		audio = '<object  type="application/x-shockwave-flash" data="/flash/niftyplayer/niftyplayer.swf?file='+ podcastFile +'.mp3&as=0" width="100%" height="100%" class="blkTrp" >'+
								 '<param name=movie value="/flash/niftyplayer/niftyplayer.swf?file='+ podcastFile +'.mp3&as=0">'+
								 '<param name=quality value="high">'+
								 '<param name=bgcolor value="#3d3d29">'+
					                         '<param name="wmode" value="opaque" />'+
								 '<embed href="/flash/niftyplayer/niftyplayer.swf?file='+ podcastFile +'.mp3&as=0" width="100%" height="100%" name="niftyPlayer1" align="" class="blkTrp" type="application/x-shockwave-flash" wmode="opaque" />'+
								 '</object>';
				  podcast.prepend(audio);
			 	});

	  }
	  
  }

/*********
MEDIA BOX
**********/
function resizeMediaBox() {
    var marginFactor = 22;
    
   if ( $('#mediaBox').hasClass('video') == 1) {   var mediaBoxHeightFactor = playerRatio; }
   else {  var mediaBoxHeightFactor = .5;  }
   //console.log( mediaBoxHeightFactor );
   
   var sidebarBWidth =  Math.ceil($('#sidebarB').width()) + marginFactor;
   
    //large post
    if ($(window).width() > compactLayoutWidth) {
        //  var  mediaBoxWidth  = Math.ceil(($('#wrapper').width() * .5)), 
       // var  mediaBoxWidth  = Math.ceil( sidebarBWidth+$('#sidebarA').width() ), 
       var  mediaBoxWidth  = Math.ceil(($('#wrapper').width() * .44)), mediaBoxHeight = Math.ceil(mediaBoxWidth * mediaBoxHeightFactor);
        $('#mediaBox, #mediaBox iframe, #mediaBox embed').width(mediaBoxWidth).height(mediaBoxHeight);
        $('#mediaBox').css({  marginRight: "-" + sidebarBWidth + "px",  float: "right"  });
        $('.post #right').css({ marginTop: (mediaBoxHeight + marginFactor) + "px" });
        $('.post #sidebarA').width(mediaBoxWidth*.5).css({  marginTop: marginFactor, marginBottom: marginFactor, marginLeft: marginFactor }); 
    }
    //small post
    else {
        var mediaBoxWidth = Math.ceil($('#wrapper').width()),  mediaBoxHeight = Math.ceil(mediaBoxWidth * mediaBoxHeightFactor);        //same height factor
        $('#mediaBox, #mediaBox iframe, #mediaBox embed').width(mediaBoxWidth).height(mediaBoxHeight);
        $('#mediaBox').css({ marginRight: 0,  float: "none" });
        $('.post #sidebarA').width(250).css({ marginBottom: marginFactor, marginRight: 0, marginLeft: marginFactor });
    }
}

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
         var slideWrapWidth = Math.ceil($('#wrapper').width() * .62), 
             slideWrapHeight = Math.ceil(slideWrapWidth * imageRatio),
             slideImageWidth = slideWrapWidth; 
    } 
    $('#slideWrap').width(slideWrapWidth).height(slideWrapHeight);
    $('#slideshow li , #slideshow li img, .meta, .slideControls').width(slideImageWidth);
    $('#slideshow, #slideshow li, #slideshow li img').height(slideWrapHeight); //added after cycle upgrade   

    if (pageClass == 'index') {
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
	var section = $(this).parent().attr('id'), marginTop = 0, width = $('#wrapper').width();
        /*set exceptions */
        if ((pageClass == 'index') && ($(window).width() > compactLayoutWidth)) {
            var width = Math.ceil($('#wrapper').width() - $('#program_nav').width());
            var marginTop = '-' + $(this).position().top;
            marginLeft = $(this).width();
        } else {
            //not large index
            var marginTop = 34;
            marginLeft = $(this).position().left;
            
            
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
$('.toggleView').click(
    function () {
        if ($(this).hasClass('showThis')) {
            $(this).prev().slideDown('slow');
            $(this).removeClass('showThis').addClass('hideThis');
        } else {
            $(this).prev().slideUp('slow');
            $(this).removeClass('hideThis').addClass('showThis');
        }
    });
$('.showHide').toggle(
    function () {
	var divToHide = $(this).parent().attr('id');
	var divHeight = $('#'+divToHide).outerHeight();
	if(divToHide=='issues') {divHeight = divHeight - 25 }
	$(this).parent().css({ bottom: '-'+divHeight+'px'});
	$(this).children('.icon').removeClass('showThis').addClass('hideThis');
    },
    function() {
	var divToHide = $(this).parent().attr('id');
	var divHeight = 0;
	$(this).children('.icon').removeClass('hideThis').addClass('showThis');
	$(this).parent().css({ bottom: divHeight+'px'});
    });
$('.show_menu').click(function () {
   var childHeight = $(this).children('.the_menu').outerHeight();
   var tbHeight = $('#socialToolBar').outerHeight();
   $(this).children('.the_menu')
    .css({ marginTop: '-'+(childHeight+27)+'px'})
    .slideToggle('fast');
    });
function accordionMenu() {
    $('#sidebarB h2').each(function () {
        var nextDiv = $(this).next('div'),
	    firstDiv = $('#sidebarB h2').eq(1);
        nextDiv.hide();
        //firstDiv.children('a.icon').addClass('down');
	//firstDiv.next('div').show();
        $(this).click(function () {
	    var targetIcon = $(this).children('.icon'),
		allIcons   = $('#sidebarB h2').children('.icon');
            if (targetIcon.hasClass('down')) {
                targetIcon.removeClass('down');
                nextDiv.slideToggle('slow'); /*weiling bug A76*/
                return;
            }
            allIcons.removeClass('down'),
	    targetSib = nextDiv.siblings('div:visible');
            targetIcon.addClass('down');
            if (targetSib.length) {
                targetSib.slideUp(function () {
                    nextDiv.show('slow');
                });
            } else {
                nextDiv.slideToggle('slow');
            }
        });
    });
}

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
	
function generateFWEnergyDots() {
	//i hate this hack. fix this immediately! script dies at class split b/c returns undefined for <li> (list with no class)
	$('li').addClass('fixit');
    $('#left li, #right li').each(function () { 
        var classes = $(this).attr('class').split(' ');
        var linkURL = $(this).children('a').attr('href');
        classes = jQuery.grep(classes, function (listClass) { return (listClass == 'food' || listClass == 'energy' || listClass == 'water')  });
        for (lc = 0; lc < classes.length; lc++) { $(this).children('a').append('<span class="icon fwe ' + classes[lc] + '" /></span>');  }        
    });
  $('li').removeClass('fixit');
}
function generateHoverText() {
  $('.hoverText a, a.hoverText').hover(
    function () {
        var desc = $(this).prop("title");
        $(this).prop("hideBox", desc);
        if (desc) {
            var parent = $(this).parent(), linkHeight = $(this).height();
            console.log(parent);
            $("<div class='hover'></div>").append(desc).prependTo(parent)
            $(this).prop("title", "");
        }
        $("div.hover").addClass("triangle-border"); /* weiling bug A28 orig class left */
        $("#sidebarA div.hover").addClass("left");
        $("#left div.hover").addClass("right");
        $("#socialToolbar div.hover").addClass("top");
    }, function () {
        $("div.hover").remove();
        var title = $(this).prop("hideBox");
        $(this).prop("title", title);
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

function tabMenu() {
    $('.menuWrapper').each(function () {
        $(this).children('.submenu').not(':first').hide()
    });
    /*put CSS in here so that it degrades w/ js disabled*/
    $('.tabNav.vert').css({
        float: "left"
    }).width(40 + "%");
    $('.menuWrapper.horiz').css({
        clear: "both"
    });
    $('.menuWrapper.vert').css({
        float: "right"
    }).width(60 + "%");
    $('.vert .submenu').css({
        marginTop: "-" + 14 + "%"
    });
    //noMargin class is for the Blog Series group, which is different from all the others
    $('.vert.noMargin .submenu').css({
        marginTop: 0
    });
    $('#sidebarBlog .tab').addClass('striped');
    $('.tabNav').each(function () {
        $(this).children('.tab').eq(0).addClass('active')
    });
    $('.tab').click(function () {
        var menuToHide = $(this).siblings('.active').find('a').attr('coords');
        $(menuToHide).hide();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var menuToShow = $(this).find('a').attr('coords');
        $(menuToShow).show();
        return false;
    });
}

function preloadSiteSearch() {

    $('#siteSearch').autocomplete({
        appendTo: "#searchResults",
        minLength: 1,
        source: [{
	    //need con id, title, excerpt, image? can we just use photo(conid).jpg?, 
            label: 'Sustainable Table'
        }, {
            label: 'Eat Well Guide'
        }, {
            label: 'The Meatrix'
        }, {
            label: 'H2O conserve'
        }, {
            label: 'NNEC'
        }],
	create: function (event, ui) {
	  //when autocomplete is created, i.e. page load
	},
	search: function (event, ui) {
	  //Before a request (source-option) is started, after minLength and delay are met. 
	  $('#searchResults').show();
	},
        open: function (event, ui) {
	    //suggestion menu is opened

	},
	select: function(event, ui) {
	    //when list item is selected, add some sort of window.location clickthrough?
	    $('#searchResults').hide();
	}
    });
}

$('.print').click(function () {
//window.print();
});

/***
 social toolbar
***/
var popupBodyWidth = 630;
var url = 'http://www.ecocentricblog.org/2012/02/02/our-hero-josh-dolan-sapsquatch-pure-maple-syrup/'; //document.URL;
var title = 'Our Hero: Josh Dolan, Sapsquatch Pure Maple Syrup'; //document.title;


$('.iframeClick').click(function (event) {
       //put url of iframe/flash in a href spot to load into popup. if more complicated functionality required, but it in if/else loop
    event.preventDefault();
    closePopup();
    var parent 	     = $(this).parent().attr('id');
    var link 	     = $(this).children('a');
    var iframeSRC    = link.attr('href');
    var title 	     = link.attr('title');
    var desc         = $(this).children('.popupDesc').html();
    var body         = $(this).children('.popupBody').html();
    var otherClasses = $(this).attr('class');
    var conImage     = $(this).find('.conImage').attr('src'); //try to pull just the image name, not the img src in here so i can resize appropriately.
    
    if ( $(this).hasClass('podcast') == 1 ) {
       var iframeBody = '<img src="'+ conImage + '" width="252px" />'+
				                        '<audio width="252px"  controls preload="auto" autobuffer> '+
				                           ' <source src="'+ iframeSRC +'" /> '+ body +
				                           '<p>Your browser does not support the audio element.</p>  '+
				                           ' <!-- now include flash fall back --> '+
				                          '</audio> ';
   }
    else if( $(this).hasClass('pdf') == 1 ) {
     var iframeBody = $(this).children('.popupBody').html();
    }
    else {
     var iframeBody = '<iframe src="' + iframeSRC + '" id="popupiframe"></iframe>';
    }

    $('body').append(socialToolbarPopupMarkup);
    $('#socialToolbarPopup').addClass(otherClasses);
    $('.popupToolBarHeader .viewTitle').append(title);
    $('.popupToolBarHeader .viewDesc').prepend(desc);
    $('.popupToolBarBody').prepend(iframeBody);

    sizeSocialPopup(iframeSRC, otherClasses);
    placeSocialPopup();

});

/*
 if (/iPhone|iPod|iPad/.test(navigator.userAgent))
 console.log('ipad');
            $('iframe').wrap(function(){
                var iframe = $(this);
                console($this);
                return $('<div />').css({
                    width: $this.attr('width'),
                    height: $this.attr('height'),
                    overflow: 'auto',
                    '-webkit-overflow-scrolling': 'touch'
                });
            });
*/
            
function sizeSocialPopup(iframeSRC, otherClasses) {
    /*default values, leave up here for calc below
        slideshow padding has to be added in css file b/c this event isnt fired
    */

    var popupPadding = 15;
    var popupFooterHeight   = 20;
    var popupMenuHeight     = $('.viewMenu').height();
    var popupTitleHeight    = $('.viewTitle').height();
    var popupDescHeight     = $('.viewDesc').height();
    var popupHeaderHeight   = $('.popupToolBarHeader').height();

    var customParameters    = $.deserialize(iframeSRC);
    var paramCount = 0;
    for (i in customParameters) {  if (customParameters.hasOwnProperty(i)) { paramCount++; } }
    if (paramCount > 1) {
         customParam = customParameters;
        //if it has width then reset effected values to custom width
         var popupWidth       = parseInt(customParam.width);
         var popupHeaderWidth = parseInt(customParam.width);
         var popupBodyWidth   = parseInt(customParam.width);
         var popupBodyHeight  = parseInt(customParam.height); 
          var popupHeight     = parseFloat(popupHeaderHeight);
            popupHeight      += parseFloat(popupBodyHeight);
            popupHeight      += parseFloat(popupFooterHeight);

    }

    else {

        if( $('#socialToolbarPopup').hasClass('video') == 1 || $('#socialToolbarPopup').hasClass('podcast') == 1) {
            //is it a media vid/podcast?
            var popupWidth          = 800; //normally 1000 but i think it's a bit too wide for ipad
            var popupHeight         = 330;
            if( $('#socialToolbarPopup').hasClass('podcast') == 1 ) {
                var popupBodyWidth      = 350;
                var popupHeaderWidth    = popupWidth-popupBodyWidth;
                var popupHeaderHeight   = popupHeight-popupPadding;
            }
            else {
                var popupHeaderWidth    = popupWidth*.49;
                var popupHeaderHeight   = popupHeight-popupPadding;
                var popupBodyWidth      = popupHeaderWidth;
            }
            var popupBodyHeight     = popupHeaderHeight;
            $('.viewDesc').height(popupHeaderHeight-popupMenuHeight-popupTitleHeight).css({ overflowY: "auto" });
            $('.popupToolBarBody').addClass('floatleft');
            $('.popupToolBarHeader').addClass('floatright').height(popupHeaderHeight).css({ overflow: "hidden" });
        }
        else if( ($('#socialToolbarPopup').hasClass('footnote') == 1) || ($('#socialToolbarPopup').hasClass('glossary') == 1)   ) {
            //is it a footnote?
            //console.log('footnote');
            //$('.popupToolBarBody, #popupiframe').height(0);
            //var popupBodyHeight = 0; 
            var popupWidth = popupBodyWidth = popupHeaderWidth = 300;
            var popupHeight     = parseFloat(popupHeaderHeight);
                  popupHeight      += parseFloat(popupBodyHeight);
                  popupHeight      += parseFloat(popupFooterHeight);
        }
        else {
            //its a social popup with fixed stuff
            //console.log('fixed popup/social');
            var popupWidth  = 630;
            var popupHeight = 600;
            var popupHeaderWidth = popupWidth;
            var popupBodyWidth   = popupWidth;
            var popupBodyHeight  = Math.ceil(popupHeight-popupFooterHeight-popupHeaderHeight);
        }
        if( $('#socialToolbarPopup').hasClass('pdf') == 1  ) {
            $('.popupToolBarBody').css({ overflowY: "auto", overflowX: "hidden" });
        }
    }
 if( $('#socialToolbarPopup').hasClass('gallery') == 1  ) {
    var popupWidth  = popupBodyWidth = 800;
    var popupBodyHeight = 600; 
    var popupHeight     = parseFloat(popupHeaderHeight);
                popupHeight      += parseFloat(popupBodyHeight);
                popupHeight      += parseFloat(popupFooterHeight);
                 }
/* console.log(
        'END: ' +
        ' padding: ' + popupPadding +
        ' viewMenu: ' + $('.viewMenu').height() +
        ' viewTitle: ' + $('.viewTitle').height() +
        ' viewDesc: ' + $('.viewDesc').height() +
        ' popupHeaderHActual: ' + $('.popupToolBarHeader').height() +
        ' popupHeaderHeight: ' + popupHeaderHeight +
        ' popupBodyHActual: ' + $('.popupToolBarBody').height() +
        ' popupBodyHeight: ' + popupBodyHeight +
        ' popupFooterHActual: ' + $('.popupToolBarFooter').height()  +
        ' popupFooterHeight: ' + popupFooterHeight +
        ' popupHeightActual: ' + $('#socialToolbarPopup').height() +
        ' popupHeight: ' + popupHeight +
        ' popupWidthActual: ' + $('#socialToolbarPopup').width() +
        ' popupWidth: ' + popupWidth
        )*/

$('#socialToolbarPopup').width( popupWidth ).height( popupHeight );
$('#socialToolbarPopup').css({ padding:popupPadding });
// $('.popupToolBarHeader').height( popupHeaderHeight ); adding height here messes shit up
$('.popupToolBarHeader').width(popupHeaderWidth);
$('#popupiframe').width(popupBodyWidth).height(popupBodyHeight);
$('.popupToolBarBody').width(popupBodyWidth).height(popupBodyHeight);
$('.popupToolBarFooter').width(popupWidth).height(popupFooterHeight);
}

var socialToolbarPopupMarkup =
'<div id="socialToolbarPopup">' +
 '<div class="popupToolBar">' +
    '<div class="popupToolBarHeader">' +
        '<div class="viewMenu">' +
            //'<a class="icon close" onclick="closePopup()"> </a>'+
            //'<a class="icon floatleft openNew external" onclick="openNewWindow()"> </a>' +
        '</div>' +
        '<span class="viewTitle"><span class="icon"></span> </span>' +
        '<span class="viewDesc"></span>' +
    '</div><!--- end popupToolBarHeader --->' +
    ' <div class="popupToolBarBody"> </div><!--- end popupToolBarBody--->' +
    '<div class="popupToolBarFooter">' + '<a class="icon close" onclick="closePopup()"> </a><a onclick="closePopup()" class="clear">close window</a>' + '</div><!--- end popupToolBarFooter--->' +
 '</div><!--- end popupToolBar --->' +
'</div>' +
'<div class="overlay">';

function _get_scroll() {
            if (this.pageYOffset) {
                return {
                    scrollTop: this.pageYOffset,
                    scrollLeft: this.pageXOffset
                };
            } else if (document.documentElement && document.documentElement.scrollTop) {
                return {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                };
            } else if (document.body) {
                return {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                };
            };
        };
function placeSocialPopup() {
    //IE equivalents are "document.body.scrollLeft" and "document.body.scrollTop
    scroll_pos = _get_scroll(), contentHeight = $('#socialToolbarPopup').height(), windowHeight = $(window).height(), contentwidth = $('#socialToolbarPopup').width(), projectedTop = (windowHeight / 2) + scroll_pos['scrollTop'] - (contentHeight / 2);
    if (projectedTop < 0) projectedTop = 0;
    if (contentHeight > windowHeight)
    return;
    $('#socialToolbarPopup').css({ 'top': projectedTop, 'left': ( $(window).width() / 2) + scroll_pos['scrollLeft'] - (contentwidth / 2)  });
    };

function closePopup() {
    $('#socialToolbarPopup').remove();
    $('.overlay').remove();
    $('.pp_pic_holder').remove();
}

function openNewWindow() {
    url = $('#socialToolbarPopup iframe').attr('src');
    window.open(url);
    closePopup();
}
function captions() {
    $('figcaption').each(function () {
        var imgInfoHeight = $('.imageInfo').outerHeight(),
	    figHeight  = parseFloat($(this).outerHeight());
            figHeight += parseFloat(imgInfoHeight);
        $('.imageInfo').css({
            marginTop: "-" + imgInfoHeight + "px"
        });
        $(this).css({
            marginTop: "-" + figHeight + "px"
        });

    });

    $('.caption')
    .toggle(
    function () {
        $('figcaption').animate({
            zIndex: 120
        }, 0, function () {});
        $(this).children('a.icon').addClass('up');
    },
    function () {
        $('figcaption').animate({
            zIndex: 100
        }, 0, function () {});
        $(this).children('a.icon').removeClass('up');
    });
}
function keepProgramNavLeftForIE() {
    wrapperLeft = $('#wrapper').offset().left;
    $('#program_nav').css({ left: wrapperLeft });
}

function init() {
	keepProgramNavLeftForIE();
    programAndIssueNavHovers();
    resizeMediaBox();
    captions(); //keep captions after resize function so it calculates correctly.
    preloadSiteSearch(); //all
    accordionMenu(); //all
    generateFWEnergyDots(); //anything with class fwe
    generateHoverText(); //anything with class hoverText
    tabMenu(); //recipes and blog
    if( $('html').find('#slideshow') != '') {  slideshows();    }  //verticalIndexProgramNav() called from within this if index page
    if($('.post #sidebarA').height() == '0') $('.post #sidebarA').css({ border: 'none' });
}

function scroller() {
    placeSocialPopup();
}

function resizer() {
	keepProgramNavLeftForIE()
    //navs can't resize themselves if pane is open, so close them so the calculation can be redone after it's over
    $('.levelsContainer, .level3, .level4').hide();
    $('.level1, .levelsContainer li').removeClass('active'); 
    resizeMediaBox();
    captions();
    if( $('html').find('#slideshow') != '') { slideshows();   }  //verticalIndexProgramNav() called from within this if index page
    sizePlayer();
    placeSocialPopup();
    verticalIndexProgramNav();
    placeSocialPopup();
}

$(window).on('resize', resizer);
$(window).on('scroll', scroller);

