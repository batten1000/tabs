<?php 
if(extension_loaded('zlib')){ob_start('ob_gzhandler');} 
header("Content-type: text/css"); 
?>
* { margin:0;  padding: 0; border: none; }

/* Declaring HTML5 elements */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary{
  display: block;
}

body {
  font-size: .85em;
  font-family: Fancy, sans-serif;
  background-color: #dedfbb;
  color:#fff;
  }

h1, h2, h3 { clear: both;}

/****************************/
/* links      */
/****************************/
a,
a:active,
a:visited,
a:focus,
p.count.active {
  color: #002d5a;
  text-decoration:none;
  outline: none;
  cursor: pointer;
}
li {
 list-style: none;
}
/****************************/
/* STRUCTURE
/****************************/
#wrapper 			{
  width: 90%;
   max-width: 1120px;
   min-width: 500px;
   min-height: 30px;
  /*  	buggy IE5.5+ http://reference.sitepoint.com/css/max-width */
  margin:50px auto;
  padding:0 0 10px; 
}

.close {
 font-size:18px;
 padding: 0 2px;
 color: #fff;
 background-color: red;
 position: absolute;
 bottom:0;
 right:0;
}
.close:hover {
cursor: pointer;
}



/****************************/
/*    SLIDESHOWS -Presets      */
/****************************/
#slideWrap,
#slideshow li,
#slideshow li img {
  position: relative;
  width: 100%; 
}
#slideshow li,
#slideshow li img { /*expand all these to fit wrapper*/
  margin:0;
  padding:0;
}
#slideshow li {
  position:  absolute;
  background: transparent !important; /*IE8 interits body bg color*/ 
  top: 0;
  left: 0;  
}
a#slideControl {
  margin:0 3px 10px;
  float:right;
}
#slideWrap a.external {
 z-index: 5000;
 position: absolute;
 right:0;
 top:0;
 background-color: yellow;
 cursor: pointer;
}
#slidePager {
  float:right;
}
#slidePager a {
  background: #fff;
  font-size: 11px;
  font-family: Georgia, serif;
  margin: 0 3px 0 0;
  padding: 1px 4px 3px;
}
/*play and pasue button*/
#slidePager a {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
   border-radius: 5px;
}
#slidePager a:hover,
#slidePager a.activeSlide {
 background: yellow;
}
a.activeSlide {
  text-decoration: none;
}
 
/****************************/
/*    SLIDESHOWS - Home       */
/****************************/
#slideWrap {
  margin:0 auto; 
  
}
.slideControls{
  width: 100%;
  height: 22px;
  position: absolute;
  z-index: 1100; 
  bottom:0;
}

.meta{
  position: absolute;
  z-index: 1100;
  padding-bottom: 30px;
  bottom: 0;
  width:100%;
}
.meta.blkTrp *{
  color: #fff !important;
}
.meta.blkTrp p {
  border-bottom: gray 1px solid;
  margin:0;
}
.meta h2,
.meta p {
	padding:10px 20px;
}
 
 
/****************************/
/* NAV PANELS BASIC SETTINGS */
/****************************/

.level1 {
  background-repeat: no-repeat;
  display:block;
  float:left;
  position: relative;  
  border: 1px solid #fff;
  margin: 0 ;
  font-size: 22px;
  color: #6e6d68;
   width: 100%; 
   z-index:11000;
   margin-top: -2px;
}
.levelsContainer {
  position: absolute;
  z-index: 10000;
  background: #fff;
  font-size: 12px;
  box-shadow: 0 0 5px #fff;
  -moz-box-shadow: 0 0 5px #fff; /*shadow effect*/
  -webkit-box-shadow: 0 0 5px #fff;
  -o-box-shadow: 0 0 5px #fff;
  text-transform: lowercase;
  left:0;
}
.levelsContainer ul {
  float:left;
  margin:1%;
  padding:1%;
  background: transparent;
  background: #fff;
}
.levelsContainer li {
  width: 98%;
  margin:  0;
  padding: 1%;
  border-bottom: 1px dotted #c6cabc;
  text-transform: normal;
}
.levelsContainer li.active,
.levelsContainer li:hover {
  background-color: #c6cabc;
  cursor: pointer;
}

.level2 { 
  width: 25%;
}
.level3 {
  width: 100%;
}
.landingDesc {
  width: 65.5%;
  float:right;
  padding: 1%;
  margin: 1% 1% 0 0;
  background: #fff;
}
.landingDesc p{
  width: 100%;
}
.level3 p {
  width: 47%;
  background: #fff;
  float:right;
}
.landingDesc p,
.level3 p {
  line-height: 150%;
  text-transform: none;
}
img.levelsImage{
 	-webkit-box-shadow: 0 1px 3px rgba(0,0,0, .7);
	-moz-box-shadow: 0 1px 3px rgba(0,0,0, .7);
	box-shadow: 0 1px 3px rgba(0,0,0, .7);
}
img.levelsImage,
img.levelsImage:hover {
  width: 100%;
  border: none;
  cursor: default;
}
.levelsContainer li span,
.levelsContainer li a,
.levelsContainer li a:hover {
color: #696969;
}

/****************************/
/* PROGRAM NAV SETTINGS */
/****************************/
#program_nav {
  position:absolute;
  top: 0px;   
  /*set left in js to make IE happy*/
  }
 
#program_nav .level1 .first {
  width: auto;
  cursor: pointer;
  text-transform: lowercase;
}
.navLandingLink {
 float: left; 
 width: 25px;
 height: 32px;
}
 
#program_nav .level4 ul,
#program_nav .level3 ul {
  width:  30%;   
} 
    
   
/******
KIDS/LINKS
******/
li.hasKids {
  position: relative;
  display: inline-block;
}
li.hasKids:after {
  content: '>';
  position: absolute;
  margin: 0 0 0 -10px;
  top: 0;
  left: 100%;
  width: 10px;
  height: 14px;
  font-weight: bold;
  font-size: 16px;
  /*color: #c6cabc;*/
}
li.hasKids.active:after  {
  color: #d17601;
}
li.hasKids span {
 display: inline-block;
 width: 80%;
}

.first,
.second {
  float:left;
}
.first {
  font-size: 140%;
  font-family: FancyBold;
}
.second {/* if you add color it stays and won't inherit the white color:#6E6D68; */
  font-size: 14px;
  font-family: Fancy,sans-serif;
  font-weight: 100;
  text-transform: lowercase;
}

#program_nav .first {
  /* orig padding: 0 0 0 30px; */
  margin: 0 5px 0 0;
  font-size: 120%; /*bug Weiling A22 orig font-size: 26px for index below */
}
.index #program_nav .first {
  margin-top: 5px; /*originally 25px Weiling A61 changed alignment to top b/c of resizing*/
  padding-left: 3%;
  font-size: 100%;
}
.level1.active .first {
  text-shadow: 0 0 5px #fff;
  -moz-text-shadow: 0 0 5px #fff; /*shadow effect*/
  -webkit-text-shadow: 0 0 5px #fff;
}
 
#program_nav .second {
  display: none;
}
.index #program_nav .second {
  margin-top: 15px;/*originally 40px Weiling A61 */
  color:#fff;
  text-shadow: 0 0 3px #000000;
  display:block;
}

/****************************/
/* RECIPE NAV AND BLOG NAV (CLICK/TAB METHOD) HORIZONTAL AND VERTICAL CLASSES */
/****************************/


.tab {
 background:#ccc;
 font-size:18px;
 text-transform:uppercase
}
.horiz .tab {
 float:left;
 padding:1%;
 margin:0 1%;
}

.tabNav.vert {
 float:left;
 width:40%; 
}
.vert .tab {
 width: 100%;
 clear: both; 
 display: block;
}
.tab.active {
 background:#819500
}

.menuWrapper.horiz {
 clear:both;
 width: 100%; 
}
.menuWrapper.vert {
 float:right;
 width:60%;
}

.submenu {
 display:inline-block;
 clear:both;
 background:#ccc;
}

.horiz .submenu {
 width:95%;
 padding: 1%;
 margin-left: 1%;
 font-size:14px;
 border:4px solid #fff;
 box-shadow:0 0 3px 3px rgba(100,100,0,.4);
 -moz-box-shadow:0 0 3px 3px rgba(100,100,0,.4);
 -o-box-shadow:0 0 3px 3px rgba(100,100,0,.4);
 -webkit-box-shadow:0 0 3px 3px rgba(100,100,0,.4)
}
 
.vert .submenu {
 width:98%;
 padding: 0 0 0 2%;
 background: #eee;
}

.toggleNav {
font-size: 11px;
width: 80px; 
color: #ccc;
}


/****************************/
/*MISCELLANY           */
/****************************/
.hide,
.hidden     { display:none; }
.show       {display:block;}
.top        { vertical-align: top;  }
.middle     { vertical-align: middle; }
.baseline   { vertical-align: baseline; }
.floatleft  { float:left; }
.floatright { float:right; }
.clear      { clear:both; }
.clearright { clear:right; }
.clearleft  { clear:left; }
.center     { text-align: center; }
.bold       { font-weight: bold;   }
.italic     { font-style: italic; } /*colors for posts pages */
.uppercase  { text-transform: uppercase; }
.lowercase  { text-transform: lowercase; }
.orange     { color:#cb6a09; }
.white, a.white      { color: #fff;   }
.gray       { color: #555346; }

.smallScreen { display: none; } /*turn this on in compact.css */
.blkFade {
  background-image:  url('../images/nav/pixel_trp.png'); 
  background-image:  -webkit-gradient( linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,.7)));
  background-image:  -moz-linear-gradient( top left -90deg, rgba(0,0,0,0), rgba(0,0,0,.7) );
  background-image:  -o-linear-gradient( bottom, black, rgba(255,255,255,0) );
  background-image:  url('../images/photos/pixel_trp.png');
}
.blkTrp { 
  background-image:  url('../images/nav/pixel.png');
  background-image:  -webkit-gradient( linear, left top, left 45%, from( rgba(0, 0, 0, .7) ), to( rgba(0, 0, 0, .7) ) );
  background-image:  -moz-linear-gradient( bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) );
  background-image:  -o-linear-gradient( bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7) ); 
}
.fffTrp {
  background-image:  url('../images/nav/pixel_fff.png');  
  background-image:  -webkit-gradient( linear, left top, left 45%, from( rgba(255, 255, 255, .8) ), to( rgba(255, 255, 255, .8) ) );
  background-image:   -moz-linear-gradient( bottom, rgba(255, 255, 255, .8),rgba(255, 255, 255, .8) );
  background-image:  -o-linear-gradient( bottom, rgba(255, 255, 255, .8), rgba(255, 255, 255, .8) );
}
.grayTrp {
/*background: url('../images/photos/pixel.png'); */
  background: transparent    -webkit-gradient( linear, left top, left 45%, from( rgba(198,202, 188, .9) ), to( rgba(198,202, 188, .9) ) );
  background: transparent -moz-linear-gradient( bottom, rgba(198,202, 188, .9), rgba(198,202, 188, .9) );
  background: transparent -o-linear-gradient( bottom, rgba(198,202, 188, .9), rgba(198,202, 188, .9) );
}
 
.striped {
  /*webkit chrome + safari*/
	 background:
		-webkit-gradient(linear, 0% 0%, 0% 100%,
		  from(transparent),
		  color-stop(0.33, transparent),
		  color-stop(0.33, rgba(255,255,255,1)),
		  color-stop(0.66, rgba(255,255,255,1)),
		  color-stop(0.66, transparent),
		  color-stop(1, transparent),
		  to(rgba(255,255,255,1))
		);
		-webkit-background-size: 3px 3px; /*required for webkit repeating gradients*/
  /*mozilla*/
	 background-repeat: repeat;/*required for moz*/
	 background: -moz-repeating-linear-gradient(top left -90deg, /*negative value is important*/
			#fff,
			#fff 3px,
			transparent 3px,
			transparent 6px);
  /*opera*/
  background: -o-repeating-linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,1) 3px, rgba(255,255,255,0) 6px);
  background: linear-gradient(transparent, #fff);

  /*explorer*/
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='transparent', endColorstr='#fff');
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='transparent', endColorstr='#fff')";

  /*fallback*/
  background: linear-gradient(transparent, #fff 50%, transparent 100% );
 
}




/**********
SMALL SCREEN
**************/
@media screen and (max-width: 850px) {	
			h1.title {
			  padding: 40px 0 0;
			}
			h1.title img {
			  padding: 10px 10px 0 0;
			}
			
			#wrapper {
			  min-width: 500px;
			}
			#gracenav {
			  width: 100%;
			  min-width:750px;
			}
			
			
			
			div#right.narrow,
			div#left.wide,
			.blog div#left,
			.blog div#right,
			div#left,
			div#right,
			footer,
			.post footer,
			#contact,
			#extras {
			  clear: both;
			  margin: 0;
			  width: 100%;
			}
			
						/****************************/
			/* PROGRAM NAV AND ISSUES NAV (HOVER METHOD)*/
			/****************************/
			.index #program_nav {
			/*have to fix these widths to override CSS in css.php*/
			  width: 450px;
			  min-width: 450px;
			  max-width: 450px;
			  position:absolute;
			  top:0; 
			}
		 
			.index #program_nav .level1 {
			  width: auto;
			}
	
}
<?php if(extension_loaded('zlib')){ob_end_flush();}?>