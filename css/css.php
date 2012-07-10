<?php 
if(extension_loaded('zlib')){ob_start('ob_gzhandler');} 
header("Content-type: text/css"); 
?>
* { margin:0;  padding: 0; border: none; }

/* Declaring HTML5 elements */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary{
  display: block;
}
  .FancyBold   { font-family: FancyBold; }
.Fancy 			 { font-family: Fancy; }
.Tisa 			 { font-family: Tisa; }
html 				 { background-color: #f8fcee; }
html.blog		 { background-color: #eee; }
 
body {
  font-size: .85em;
  font-family: Fancy, sans-serif;
  background-color: #dedfbb;
  color:#3c3c3c;
  }
.meatrix body   { background: #000;  color:#fff; }
.blog body      { background: #eee; }
.multimedia body{ background: none repeat scroll 0 0 transparent; color:#454747; }
.post body 	{ height: 40px; /*set same height as #program_nav*/ }

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






/****************************/
/* STRUCTURE .item
items roughly 50% float left except for index.
NOTE:: be careful with adding padding margin b/c we're controlling some of that in the javascript file, it calculates padding there.
/****************************/
.column {

}
/*margin was 0 1% 0 0, Weiling */
.item {
	width: 48%;
	float:left;
   padding: 0;
   margin: 1% 2% 1% 0;
}
.food .item {
   width: 31%;
}
.blog .item:nth-child(odd) {
  float:right;
}
.index .item,
#media .item {
	width: 100%;
}
/*default layout for .multimedia, if you want to switch grid/line view, change this CSS with what's in grid.css*/
#media .item {
   padding: 2%;
	margin:  1%;
}
#videos article {
  width: 33%;
  float:left;
  margin: 0;
  padding:0;
}
.post #videos article {
	width: 100%;
	float: none;
}
#videos article a span,
.post #videos article a img{
 display: none;
}
#videos article a img,
.post #videos article a span {
 display: block;
}

.multimedia #explore article {
  width: 31%;
  float:left;
  padding:0 1%;
}
.icon {
width: 16px;
height: 16px;
color: #fff;
font-size: 16px;
background-color: #000;
}
.icon.close::after {
content: 'x';
bottom: 3px;
right:6px;
position:absolute;
}
.icon.stop::after {
content: 'O';
}
.icon.play::after {
content: '>'; 
}
/****************************/
/* IMAGES      */
/****************************/

.bannerImage {
  width: 100%;
}
.mainImage,
.conImage {
	width: 100%;
}
.mainImage {
  border:1px solid #e3e3e1;
}

 
#associatedContent .column  img,
#searchResults img,
.blog .conImage,
.landing .conImage {
	width: 75px;
	height: 75px;
	float:left;
	margin: 0 5px 0 0;
	padding: 0;

}
.multimedia .conImage {
   margin: 1.5%;
   width: 43%;
	float:left;
}
.multimedia img {
  border: 3px solid #CCC;
}
.widget,
#stage,
.player,
.player iframe {
  width: 100%;
  padding:0; 
  }

#ads article,
#ads article img {
  width: 98%;
  margin:0 auto;
}
#ads article {
  	padding: 1%;
}
 

img.guid {
 position: relative;
 float: left;
 display: inline;
 padding: 5px;
 margin: -29px 0 0;
 background-color: #eee;
}

.filterCategory .food {
   background: url('../images/icon/item_food.gif') 5% 50% no-repeat;
}
.filterCategory .energy {
   background: url('../images/icon/item_energy.gif') 5% 50% no-repeat;
}
.filterCategory .water {
   background: url('../images/icon/item_water.gif') 5% 50%  no-repeat;
}

/*************
MEDIA IMAGES
**************/
.iframeClick .viewTitle .icon { /*hide icon sprite for popups unless a class is declared*/
	background-position:  -2000px -2000px ; }
	
.iframeClick.facebook .viewTitle .icon { background: url('../images/icon/sprite_social.png') 0 -168px no-repeat; }
.iframeClick.twitter .viewTitle .icon { background: url('../images/icon/sprite_social.png') 0 -185px no-repeat; }
.iframeClick.newsletter .viewTitle .icon { background: url('../images/icon/sprite_social.png') 0 -36px no-repeat; }
.podcast h2,
.multimedia a.podcast,
.iframeClick.podcast .viewTitle .icon,
#itunes .viewTitle {
  background: url('../images/icon/sprite.png') 0 -556px no-repeat;
}

.vids h2,
.multimedia a.vids,
.iframeClick.video .viewTitle 	{
  background: url('../images/icon/sprite.png') 0 -540px no-repeat;
}

.icon.pdf,
.pdf h2,
.multimedia a.pdf,
.iframeClick.pdf  .viewTitle .icon{
 background: url('../images/icon/sprite.png') 0 -600px no-repeat;
 }
.slideshow h2,
.multimedia a.slideshow,
.iframeClick.slideshow  .viewTitle .icon,
.pp_pic_holder.slides .ppt {
 background: url('../images/icon/sprite.png') 0 -568px no-repeat;
}
.flash h2,
.multimedia a.flash,
.iframeClick.flash .viewTitle	.icon	{
 background: url('../images/icon/sprite.png') 0 -635px no-repeat;
}
.map h2,
.multimedia a.map,
.iframeClick.map  .viewTitle .icon{
  background: url('../images/icon/media_map.gif') center left no-repeat;
}
.widget h2,
.multimedia a.widget,
.iframeClick.widget  .viewTitle .icon{ 
}


/*blog tag series icons */
.icon.valentine {  background-position: 16px -608px ; }
.icon.heroes { background-position: 16px -624px ;  }
.icon.fishkill 		{  background-position: 16px -640px ; }
.icon.livestock { background-position: 16px -656px ; }
.icon.seasonal {  background-position: 16px -672px ; }
.icon.fracking { background-position: 16px -688px ;  }


/*news images*/
.newsIcon {
 float:left;
 background: url('../images/icon/sprite_news.png') no-repeat;
}
.newsIcon.alternet 	{
background-position: 0 -16px;
 }
.newsIcon.awa 	{
background-position: 0 -32px;
 }
.newsIcon.circleofblue 	{
background-position: 0 -48px;
 }
.newsIcon.csmonitor 	{
background-position: 0 -64px;
 }
.newsIcon.dailymail 	{
background-position: 0 -80px;
 }
.newsIcon.discovery 	{
background-position: 0 -96px;
 }
.newsIcon.epa 	{
background-position: 0 -112px;
 }
.newsIcon.ethicurean 	{
background-position: 0 -128px;
 }
.newsIcon.foodfirst 	{
background-position: 0 -144px;
 }
.newsIcon.fsn 	{
background-position: 0 -160px;
 }
.newsIcon.forbes 	{
background-position: 0 -176px;
 }
.newsIcon.grist 	{
background-position: 0 -192px;
 }
.newsIcon.guardian 	{
background-position: 0 -208px;
 }.newsIcon.huffpo 	{background-position: 0 -224px;}.newsIcon.latimes 	{background-position: 0 -240px;}.newsIcon.nymag 	{background-position: 0 -256px;}.newsIcon.nyt 	{background-position: 0 -272px; }.newsIcon.reuters 	{background-position: 0 -288px;}.newsIcon.sciencedaily 	{
background-position: 0 -304px;} .newsIcon.atlantic 	{ background-position: 0 -320px; }.newsIcon.ecologist 	{ background-position: 0 -336px; }.newsIcon.independent 	{ background-position: 0 -350px; }.newsIcon.un 	{ background-position: 0 -366px; }.newsIcon.usnews 	{ background-position: 0 -382px; }.newsIcon.wapo 	{ background-position: 0 -398px;  }.newsIcon.waternewsupdate 	{ background-position: 0 -414px;  }.newsIcon.youtube 	{ background-position: 0 -430px; }
/****************************/
/* HEADERS
/****************************/
h1, h2, h3, h4, h5, h6  {
	line-height: 100%;
	font-family: Fancy, sans-serif;
	color: #333;
	display:block;
	/*took out clear:both, applied it on .columnHeader instead to fix .article header flow, not sure how else it will impact libby mod */
}

.meatrix h1, .meatrix h2, .meatrix h3, .meatrix h4, .meatrix h5, .meatrix h6,
.meatrix h1 a, .meatrix h2 a, .meatrix h3 a, .meatrix h4 a, .meatrix h5 a, .meatrix h6 a  {
  color:#03fb31;
 }
h1.title {
  color: #88b743;
  width:100%;
  height: 60px;
  padding: 5px 0 0;
  font-family: Helvetica,sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 2px;
}
h1.title img {
  width: 17.64%;
  padding: 10px 10px 0 0;
}
.article h1 {
  font-family: Tisa;
  font-weight: 400;
  color: #333;
  }
.article h2 {
 font-family: Tisa;
}
.article h2,
.article h3,
.article h4 {
  width: auto;
  font-weight: 800;
  color: #3c472d;
}
#relatedMedia h1 {
  padding: 2% 0 0 2%;
}
#relatedMedia h2 {
  text-transform: uppercase;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
 }
#relatedMedia h2 ,
#relatedMedia h3 {
 /*video/podcasts titles, etc*/
  font-family: Tisa;
  font-size: 90%;
  margin: 5px 0;
}
#relatedMedia #videos h3 a {
  padding-left: 18px;
}
.columnHeader {
  font-size: 170%;
  line-height:75%;
  text-transform: uppercase;
  border-bottom: 4px solid #94958d;
  margin: 30px 0 0;
  text-transform: uppercase;
  clear:both;
}

.meatrix #sidebarA .columnHeader,
.columnHeader,
h2.columnHeader {
  /*default orange*/
  color:#cb6a09;
  font-family: FancyBold;
  margin: 30px 0 0; /* original margin: 30px 0 3px; changed margin top to help with .index .filterCategory spacing weiling bug A15*/
}

/*fixes the explore bump on  media page libby*/
.multimedia .columnHeader {
  margin-top:0;
}
.index #food.level1,
.index #water.level1,
.index #energy.level1,
.index #mission.level1 {
  color: #fff;
}
/*override orange*/
.food .columnHeader,
.food .columnHeader a,
.food #topicName h1,
.food #featuredLinks h2,
.recipes .columnHeader,
.recipes .columnHeader a,
.recipes #topicName h1,
.recipes #featuredLinks h2,
.red  { color:#BD4C00;  !important;}
.food #issues,
.food #issues .showHide a { background-color: #BD4C00  !important;}
 
.water .columnHeader,
.water .columnHeader a,
.water #topicName h1,
.water #featuredLinks h2,
.blue
  {color:#0072d2 !important;}
.water #issues,
.water #issues .showHide a { background-color: #0072d2 !important; }

.energy .columnHeader,
.energy .columnHeader a,
.energy #topicName h1,
.energy #featuredLinks h2,
.green { color:#2b9d00 !important;}
.energy #issues,
.energy #issues .showHide a {  background-color: #2b9d00;  !important;}
 
.blog #right h1,
.multimedia #topicName h1,
.multimedia #featuredLinks h2
{color:#cb6a09;}

a.pink,
.pink { color: #d51c56; }

#topicName h1  {
  text-transform:lowercase;
}
#featuredLinks h2 {
  float:right;
  margin:0;
  display: inline;
  border: none;
}
#sidebarB h2 {
  font-size: 120%;
  font-family: Tisa;
  font-weight: 600;
  padding: 5px 5px 5px 0;
  text-transform: uppercase;
  clear:both;
  border-top: 1px dotted black;
}
#sidebarB h2:hover {
  text-decoration: none;
  cursor: pointer;
}
#sidebarB h2 .icon {
  float:left;
  margin-right: 5px;
}
h2.current {
  cursor: default;
}
/*slideshow titles*/
.blog .meta h2,
.landing .meta h2 {
    font-family: 'Tisa', Georgia, serif;
    font-weight: 200;
}
.index .meta h2 a{
  font-style:  italic;
  font-family: Georgia, serif;
  font-weight: 600;
  font-size:   120%;
  text-shadow: 0 0 3px #000000;
}
/*multimedia item headers, so they float right of titles and icon displays*/
#media h2 {
  margin-left: 47%;
  padding-left: 18px;
}
/* post titles and popup titles */
.item h2,
.viewTitle,
.ppt {
  font-size: 120%;
  line-height: 110%;
  font-family: 'Tisa', Georgia,serif;
  font-weight: 400;
}
.viewTitle,
.ppt {
  padding-left: 18px;
  font-weight: 200;
  font-size: 170%;
  }
#socialToolbarPopup.glossary .viewTitle,
#socialToolbarPopup.footnote .viewTitle {
padding-left: 0;
}
#socialToolbarPopup.glossary .viewTitle .icon,
#socialToolbarPopup.footnote .viewTitle .icon {
width: 0; 
height:0; 
}
/* form title */
#contact h2 {
  padding: 2% 2% 2% 0;
}

/* digDeeper, etc */
.blog #right h1 {
  background-color: #c4beae;
  width: 98%;
  height: 25px;
  padding:2% 0 2% 2%;
  float:left;
  text-transform: none;
}
  .lower {
    font-family: Fancy, sans-serif;
    font-size: 14px;
    font-weight: 100;
    vertical-align: top;
    text-transform: lowercase;
  }
  .upper {
    font-family: FancyBold, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: -1.5%;
  }
/* featured, emailed, comments etc */
#sidebarBlog h2.tab {
  text-transform: lowercase;
}
#sidebarBlog h2.tab.active {
  text-transform: uppercase;
  background:transparent !important;
  font-family: FancyBold;
}

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
#sidebarB h2:hover,
.meatrix a.showMore,
.meatrix a:hover,
a:hover {
 color: #026495;
 cursor: pointer;
 /* this causes assorted bumping when hovering over navigations border-bottom:1px #026495 dotted;*/
}
.article a {
border-bottom: 1px dotted #959595;
}
#issues a:hover {
  text-decoration:none;
  }

 

.highlights h3 { /* Weiling bug A51, switch back to black */
  color: #000;
  font-size: 100%;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
padding-top:55px;

}
a.white:hover {/*weiling bug A73 */
  color: #fff;
  text-decoration: underline;
}
/****************************/
/* PARAGRAPH TYPOGRAPHY/DEFAULTS  */
/****************************/
p {
  font-size: 110%;
  line-height: 140%;
  margin: 2% 0;
  padding: 0;
  text-transform:normal;
}
p.indent {
 margin-left: 5%;
 margin-right: 5%;
}
#sidebarA p,
#sidebarB p,
.author,
.copyright,
.date,
.vcard {
  font-size:90%;
}
.error p {
	margin:0;
}
.copyright {
    font-size: 80%;
    width: 100%;
	text-align:right;
	clear:both;
   border-bottom: 10px solid #dedfbb;
}
p.eatwell {
  color: #c7f89c;
  font-size: 200%;
}

.description {
 /*margin: 4% 0 0;weiling bug A9*/
 margin-bottom: 2%;
}
.description p { /*weiling bug A52*/
  font-size: 130%;
}
#mission p {
  color: #333;
  width: 700px;
  float:left;
  margin: 5px;
  padding: 10px;
  font-size: 120%;
}
.question {
  font-family: Tisa;
  font-weight: 400;
  padding:5px;
  font-size: 110%;
  line-height: 170%;
  background: #fff;
  display:inline;
}
p.allCaps {
  font-size: 95%; /*5% less than p 110 was (105%) updated by Fu 12/13/2011*/
  text-transform: uppercase;
}
.fraction {font-size: 1em; }
.fraction sub, .fraction sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
.fraction sub { bottom: -0.5em; }
.fraction sup { top: -0.5em; }

/* set font size style for footnote and glossary 7/6/12  weiling */
 
sup a {  padding:0 3px;   border: none;  font-size:7px;  text-decoration: none;  height: 0;
	    line-height: 0;	    vertical-align: baseline;    _vertical-align: bottom;	    position: relative;  }
sup.glossary a { 
     color: white !important;
    background-color: green; 
    bottom: .5ex;
}
sup.footnote a {
  color: white !important;
  background-color: #2440c7; bottom:.5ex;
}

/****************************/
/* LISTS      */
/****************************/
li {  /*line-height was 120% and margin: 10px auto; weiling 7-6*/
  list-style: none;
  vertical-align: middle;
  line-height: 110%;
  margin: 8px auto;
}
.article > ul,
.article > ol { /*weiling bug D8*/
  margin: 0 auto;
  padding: 5px;
  width: 95%;
  }
.article li {
  line-height: 130%;
  margin: 10px auto;
}
.article > ol > li > ol,
.article > ul > li > ul  { /*nested ul*/
  margin: 20px;
}
.article > ul li,
.highlights li  {
  list-style: disc inside;
}
.article > ol li {
  list-style-type:decimal;
}
.article > ul > li > ul > li { /*nested li*/
    list-style: circle;
}
.article > ol > li > ol > li { /*nested li*/
  list-style-type: lower-alpha;
}
#right li {
  font-size: 90%; /*p size for content is 110%, bug Weiling A7*/
}
#associatedContent h4 {
	font-size: 120%;
   font-family: FancyBold;
   clear:both;
	text-transform: uppercase;
   margin-top: 5px;
}
ul.floatedList li {
 float:left;
 padding-right: 10px;
}
footer ul > li > ul {
  width: 95%;
  display: block;
  padding-left: 5%;
}
footer li {
  line-height: 150%;
  padding:0;
  margin:1% 0 0;
  font-family: FancyBold;
}
footer li li {
font-size:90%;
  line-height: 120%;
  font-family: Fancy,sans-serif;
  margin-top:0;
}
/****************************/
/* MULTIMEDIA
/****************************/
#grid_view,
#list_view {
 float:left;
}
#grid_view  {
  background-position: 0px -112px;
  }
#list_view {
  background-position: 16px -112px;
}
/****************************/
/* gracenav  */
/****************************/
#gracenav li {
  float:left;
  font-weight: normal;
  padding: 12px 5px;
}
#gracenav li a {
   color:#dedfbb;
   margin: auto 0;
}
/****************************/
/*    RESIZE        */
/****************************/
#resize  li,
#resize  li a {
	vertical-align:top;
	text-align:center;
   line-height: 18px;
}
#resize  li {
	float:right;
	position: relative;
   margin:0; padding:0;
   width: 18px;
}
#resize li a {
  	padding: 0 3px;
   margin:  3px;
}
a#small {
  color:#fff;
  background-color: #000;
  text-decoration:none;
  cursor: default;
}
#small 	{ font-size: 10px; }
#medium 	{ font-size: 14px; }
#large 	{ font-size: 18px; }
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
#featuredVideo iframe {
  width: 48%;
}

/****************************/
/*    SLIDESHOWS - Home       */
/****************************/
#slideWrap {
  margin:0 auto; 
  border: 1px solid #fff; 
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
/*    SLIDESHOWS - POST   */
/****************************/



/****************************/
/*   filterCategory()     */
/****************************/
.filterCategory {
  color:#676863;
  font-size: 120%;
}
.filterCategory a {
  color: #026495;
  padding-left: 18px;
}
.filterCategory a:nth-child(1) {
  padding-left:0;
}
.filterCategory a.active  {
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}
.index .filterCategory {
  width: 100%;
  clear:both;
  margin: 2% 0 -2%;
  float:left;
}
.multimedia .filterCategory {
  width: 60%;
  display:block;
  margin-bottom: 2%;
  float:left;
}

/****************************/
/* RECIPE NAV AND BLOG NAV (CLICK/TAB METHOD) HORIZONTAL AND VERTICAL CLASSES */
/****************************/

div.horiz h2.tab {
  float:left;
}
div.horiz .submenu {
 display:inline-block;
 width: 100%;
 clear:both;
}
div.horiz .submenu li {
 width: 46%;
 float:left;
}
div.vert h2.tab {
  width: 96%;
  padding:3% 2%;
}
div.vert .submenu {
  display:inline-block;
  width: 98%;
  padding:0 0 0 2%;
  clear:both;
}
#sidebarBlog h2.tab a {
  color: #918668;
  font-weight: 100;
}
#sidebarBlog .vert .submenu {
 background: #eee;
}
#blogAuthors li{
  float:left;
  width: 42px;
}
#blogAuthors li img {
  clear:both;
  width: 100%;
}
#Series {
  margin-top: -14%;
  background: #eee;
  height: 37px;
}
#Series li {
 float:left;
 padding: 1%;
}
.vert.noMargin ul:nth-child(1) li:nth-child(1) { /*series label*/
  font-size: 140%;
  font-weight: bold;
  margin: 5px 0 0;
  padding:0;
  height: 28px;
}
/* calendar */
table#wp-calendar {
width: 80%;
margin:0 auto 10px;
}
#wp-calendar tbody td {
text-align: center;
}
td#prev,
td#next {
  font-size: 110%;
}
#next {
  text-align:right;
}
table#wp-calendar a {
  color:black;
  background-color:#c0c9ad;
  padding:3px;
}
#recipe_nav .menuWrapper  {
 background: url('../images/nav/recipes_box.png') 0 0  repeat;
 border:3px solid #ccc;
 padding:1%;
 margin: 3% 0;
/* margin (1%), incresed, fu*/
}
#recipe_nav h2.tab  {
  font-size: 18px;
  padding: 1%;
  color: #2d2e29;
  background: #c6cabc;
  text-transform: uppercase;
  margin: 0 5px 5px 0 ;
}
#recipe_nav h2.tab.active {
  background: #878f78;
}
#recipe_nav h2.tab.active a {
  color: #fff;
}
#recipe_nav .submenu {
 font-size:14px;
 background: #819500;
 padding:2%;/* added padding. ---fu*/
 width: 96%;/* added padding. ---fu*/

}
#recipe_nav .submenu li,
#recipe_nav .submenu a {
 padding: 1%;
 margin:0;
}
#recipe_nav .submenu a {
 border-bottom: 1px dotted #819500;
 color: #fff;
}
#recipe_nav .submenu a:hover {
  border-bottom: 1px dotted #fff;
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
#program_nav .level1 {
  margin: 0 5px 0 0;
  font-size: 22px;
  color: #6e6d68;
}
#program_nav .level1 .first {
  width: auto;
  margin: 5px 0 0 27px;
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
    /****************************/
    /* homepage exceptions */
    /****************************/
    .index #program_nav {     }
    .index #program_nav .level1 {
      width: 85%; 
      z-index:11000;
    }
    .index #program_nav .level1 > a { /*selector required to keep other li black in opera*/
      /*color: #fff;*/
    }
    .index #program_nav .levelsContainer {
      left: 100%;
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
/*     PAGE HEADER     */
/****************************/

/******************
SIDEBAR A IMAGES/ SECTIONS ETC
*******************/
  /*sidebarA only top and bottom with 3px border, inside devided 1px border  weiling7/5/12 */
#sidebarA {
border-top:    3px solid #94958D;
  border-bottom: 3px solid #94958D;
  }
#sidebarA > section,
#sidebarA > div {
  clear:both;
  margin: 1% 0;
  min-height: 80px;
  width:100%; 
}
.post #sidebarA > section,
.post #sidebarA > div {
border-top:    1px solid #94958D;
  border-bottom: 1px solid #94958D;
  }
  
#sidebarA > section img,
#sidebarA > div img {
/*img are resized to 252px*/
	width: 100%;
}
.widget object {  
/*flash floats center. sidebar ranges from 169 - 250px*/
 display: block;
 margin:0 auto;
 }
 #map_canvas { 
 width : 100%; 
 height: 200px;   
  }
.mediaFeature,
.mediaMeta {
  width: 47%;
}
.mediaFeature {
  float:left;
}
.mediaMeta {
  float:right;
}
/****************************/
/* podcast/videos    */
/****************************/
.playlist {  
background-color:#9a9a68;
border: 1px solid transparent; 
}
#videos.playlist  article,
#podcasts.playlist  article {
 margin: 5% 3%;  
 }
.playlist  h3  {
 font-size:100%;
 font-weight: normal;
}
.playlist .current,
.playlist .current a,
#videos.playlist a:hover {
 color:#fff;
}
 
 /******
podcast player
*************/
#podcasts object embed,
#podcasts object  { 
 height: 70px;
}
span.duration {
	float:right;
	font-style: italic;
	padding-left: 3px;
	}
audio {
	width: 100%;  
}
.offscreen { 
	position:absolute;
	left:-10000px;
	top:auto;
	width:1px;
	height:1px;
	overflow:hidden;
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
#sidebarBlog .striped {
  border-top: 1px solid #c4beae;
}
#sidebarBlog .striped:nth-child(1) {
  border-top: none;
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


/************************/
/********PRETTY PHOTO **/
/************************/



/****
.ppt = caption text above media
***/
div.ppt {
  display:none;
  z-index:15000;
  min-height: 20px;
  margin-bottom: 15px;
}

.pp_description {
  clear: both;
  background: #fff;
}
.pp_content {
	margin: 0 auto;
}
.pp_content_container {
	position:relative;
	text-align:left;
	width:100%;
   padding-bottom: 20px;
}

/****
.gallery
***/
.item .gallery {
 display:none;
}
.pp_gallery {
  background: #fff;
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  height: 55px;
  margin-top: 16px;
}
.pp_gallery ul a {
	border:1px rgba(0, 0, 0, 0.5) solid;
	display:block;
	float:left;
	height:33px;
	overflow:hidden;
}
.pp_gallery li,
.pp_gallery li img {
  border:0;
}
 .gallery li {
 float:left;
 width: 75px;
 height: 75px;
 padding: 3px 3px 5px;
 }
.pp_gallery li {
  	float:left;
   margin:0;
   padding: 3px 3px 5px;
   width: 50px;
   height: 33px;
}
.pp_gallery li.default a {
	background:url('../images/icon/default_thumbnail.gif') 0 0 no-repeat;
	display:block;
	height:33px;
	width:50px
}
#mediaBox #slideshow li img:hover,
#mediaBox figure a img:hover,
.pp_gallery ul a:hover,
.pp_gallery li.selected a {
	opacity: .4;
	cursor: pointer;
}
#mediaBox #slideshow li img.default:hover {
	opacity: 1;
	cursor: none;
}
/*hover panels in slideshows*/
div.pp_hoverContainer {
   width: 95%;
   height: 80%;
   clear:both;
	z-index:15000;
   display: none;
   position: absolute;
  /* margin: -70px 0 0;assign top value in utitlites to push it above gallery*/
}
div.pp_hoverContainer a{ 
top: 45%;
}
a.pp_previous { float:left; }
a.pp_next { float:right; }

.pp_loaderIcon {
	background:url('../images/icon/loader.gif') center center no-repeat
}
.pp_nav {
	float:right;
}
.pp_nav p {
	float:left;
}
a.pp_arrow_previous,
a.pp_arrow_next {
	display:block;
	float:left;
	height:16px;
	width:16px;
	overflow:hidden;
}
div.pp_pic_holder a:focus {
	outline:none
}
#pp_full_res {
	line-height:1!important;
}
#fullResImage {
border: none;
}
#pp_full_res .pp_inline {
	color:#000
}
.pp_loaderIcon {
	display:block;
	height:24px;
	left:50%;
	position:absolute;
	top:50%;
	width:24px;
	margin:-12px 0 0 -12px;
	border:1px solid #EEEEEE;
}
.pp_top, .pp_bottom {
	position:relative
}
.pp_top .pp_left,
.pp_bottom .pp_left {
	left:0;
	position:absolute;
}
.pp_top .pp_middle,
.pp_bottom .pp_middle {
	position:absolute;
}
* html .pp_top .pp_middle,
* html .pp_bottom .pp_middle {
	left:0;
	position:static
}
.pp_top .pp_right,
.pp_bottom .pp_right {
	left:auto;
	position:absolute;
	right:0;
	top:0;
}
.pp_fade,
.pp_gallery li.default a img,
.currentTextHolder {
	display:none;
}
.pp_expand,
.pp_contract { 
}
/**************
social toolbar
**************/

#socialToolbar {
 bottom: 0;
 height: 35px;
 line-height: 14px;
 position: fixed;
 position: device-fixed;
 min-width: 700px;
 width: 100%;
 margin: 0;
 display: block;
 z-index: 9999999;
 box-shadow: 0px 0px 5px 5px rgba(100, 100, 0, .4);
  -webkit-box-shadow: 0px 0px 5px 5px rgba(100, 100, 0, .4);
  -moz-box-shadow: 0px 0px 5px 5px rgba(100, 100, 0, .4);
 background: rgb(255,255,255); 
 background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(227,229,215,1) 50%, rgba(201,206,181,1) 51%, rgba(243,247,222,1) 100%);
 background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(50%,rgba(227,229,215,1)), color-stop(51%,rgba(201,206,181,1)), color-stop(100%,rgba(243,247,222,1)));
 background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(227,229,215,1) 50%,rgba(201,206,181,1) 51%,rgba(243,247,222,1) 100%);
 background: -o-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(227,229,215,1) 50%,rgba(201,206,181,1) 51%,rgba(243,247,222,1) 100%);
 background: -ms-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(227,229,215,1) 50%,rgba(201,206,181,1) 51%,rgba(243,247,222,1) 100%);
 background: linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(227,229,215,1) 50%,rgba(201,206,181,1) 51%,rgba(243,247,222,1) 100%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f3f7de',GradientType=0 );
}

.overlay { 
 background: #000 url('../images/photos/pixel.png') repeat;
 filter: alpha(opacity=75);
 -moz-opacity: 0.75;
 opacity: 0.75;
 left:0;
 top:0;
 height: 100%;
 width: 100%;
 position: fixed;
 z-index: 99000;
}
div.pp_pic_holder {
 display:none;
 padding-bottom: 25px;
}
div.pp_pic_holder,
#socialToolbarPopup {
 border: 5px solid #e3e3e1;
   border-radius:10px;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
    -o-border-radius:10px;
   text-decoration: none;
 position:absolute;
 z-index: 100000;
 background:#fff;
 font-size: 100%;
   width: 49%;/*for some reason, it doesn't calculate the heights correctly unless a width specified here, despite being overwritten in js*/
  }
.socialToolbar_wrapper {
 position: fixed !important;
 width: 100%;
 margin: 5px auto 0;
 display: block;
}
.socialToolbar_holder {
 position: relative;
 width: 98%;
 height: 100%;
 margin-left: auto !important;
 margin-right: auto !important;
 padding-right: 9px !important;
 padding-left: 9px !important;
}
.showHide {
 cursor: pointer;
 height: 16px;
 width: 16px;
 float:left;
 margin-top: -20px;
}
.soc_button a,
.soc_button .spriteImage {
  color: #666;
}
.soc_button .spriteImage {
text-align: right;
}
.soc_button {
  float:left;
  width: 80px;
  font-size: 16px;
  font-weight: normal;
  border: 1px solid transparent !important;
}
.socialToolbar_divider{
background-color:#fff;
display: block;
height: 48px;
width: 2px;
margin: 0 5px;
}

#socialToolbarPopup.glossary,
#socialToolbarPopup.footnote {
  border:5px solid #babc00;
}
.popupToolbar {
 background-color: #fff;
 z-index: 100;
 position: relative;
 background: #fff;
}
.pp_bottom,
.popupToolBarFooter  {
  clear:both;
  text-align: right;
  min-height: 20px;
}

.popupToolBarBody { 
/*
fix for ipad/iphone/itouch
http://stackoverflow.com/questions/4599153/iframes-and-the-safari-on-the-ipad-how-can-the-user-scroll-the-content/8214891#8214891
https://gist.github.com/2388015
*/
overflow: auto; 
-webkit-overflow-scrolling:touch; 
}
.popupToolBarBody li {
 clear:both;
 min-height: 69px;
 margin: 5px 0;
}
.popupToolBarBody li img {
 float:left;
 margin: 0 2% 0 0;
 width: 61px;
 height: 61px;
}
.post-share {
  height: 20px;
  padding:10px 0;
  position: absolute;
}
.post-share > div {
 float:left;
 width: auto;
 height: 20px;
 display: inline-block;
}
.post-share a {
   border: none;
}

/****
.gallery
***/
.clearfix {
height:0;
width:0;
margin: -999999px;
}
.pp_gallery {

}
.pp_gallery ul a {
 display:block;
 float:left;
 height:33px;
 overflow:hidden;
}
.pp_gallery li,
.pp_gallery li img {
  border:0;
}
.pp_gallery li {
   float:left;
   margin:0;
   padding: 3px 3px 5px;
   width: 50px;
   height: 33px;
}
.pp_gallery li.default a {
 background:url('../images/icon/default_thumbnail.gif') 0 0 no-repeat;
 display:block;
 height:33px;
 width:50px
}
.pp_gallery li.selected,
.pp_gallery li:hover,
.gallery a:hover  {
 opacity: .4;
}
 

.iframeClick .popupBody,
.iframeClick .popupDesc {
display: none;
}

/******
socBar rollups
font control under header section
*******/


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
			
			.energy #topicName,
			.food #topicName,
			.water #topicName  { background: none; }
			#page_header { }
			#topicName         { margin:15px 0 0; height: auto; }
			#topicName .first  { padding-left: 0; margin-top: 0;}
			#topicName .second { margin:15px 0 0; padding:0; }
			
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
			#extras {
			  float:none;
			  position: relative;
			  top: auto;
			  right: auto;
			}
			#extras img {
			  width: 75px;
			  float:left;
			}
			#extras div {
			  position:absolute;
			  width: 48%;
			  clear:none;
			}
			.index .column,
			.index #eccBlog.column {
			  width: 98%;
			  float: right;
			  padding: 0 1% 0 0;
			}
			.index .item {
				width: 49%;
				float:left;
			   margin-bottom: 10px;
			}
			div.overflow{
			  height: auto;  /*weiling bug*/
			  overflow: visible;
			}
			.landing .conImage,
			.conImage {
				width: 75px;
				height: 75px;
				float:left;
				margin: 0 5px 5px 0;
				padding: 5px 5px 5px 0;
			
			}
			#sidebarA, #sidebarB {
			  float:none;
			  clear: both;
			}
			#sidebarB {
			  margin:0;
			  width: 100%;
			}
			#featuredLinks {
			  display: block;
			  float:none;
			  width: 100%;
			  clear: both;
			}
			.landing .meta {
			 left: 0;
			}
			/****************************/
			/* POST PAGES*/
			/****************************/
			.post div#right {
			width: 100%;
			clear: both;
			float:none;
			}
			.post div#left {
			width: 100%;
			}
			.post div#right,
			.post div#left {
			/*added after we moved issuesNav to bottom for compact view*/
			 margin-top: 40px;
			}
			
			.multimedia .filterCategory {
			width: 90%;
			}
			.filterCategory a{
			height: 22px;
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
			  top: 50px;
			}
		 
			.index #program_nav .level1 {
			  width: auto;
			}
			.index #program_nav #mission.level1 {
			  padding:0%;
			}
			.index #mission.level1,
			.index #program_nav .level1 > a { /*selector required to keep other li black in opera*/
			  color: #666;
			}
		 
			.index #foodProgram 	{
				background-image: url('../images/nav/programnav_sprite.png');
			   background-position: 0 10px;
			}
			.index #foodProgram.level1.active {
			   background-position: 0 -30px;
			}
			.index #waterProgram {
				background-image: url('../images/nav/programnav_sprite.png');
				background-position: 0 -60px;
			}
			.index #waterProgram.level1.active {
				background-position: 0 -98px;
			}
			.index #energyProgram {
				background-image: url('../images/nav/programnav_sprite.png');
			   background-position: 0 -130px;
			}
			.index #energyProgram.level1.active {
				background-position: 0 -166px;
			}
			.index #mission.level1 {
			 	background-image: none;
			}
			.index #program_nav .first {
			 padding: 0 0 0 30px;
			 margin: 0 5px 0 0;
			 font-size: 120%;
			}
			.index #program_nav .second { display: none; }
			
			footer {
			padding-bottom: 80px;
			}
			
			#issues {
			 position: fixed;
			 bottom:0;
			 width: 100%;
			 left:0;
			 margin:0;
			}
			#issues .showHide { display: block; }
			#issues .level1,
			#left.wide #issues .level1,
			.post #issues .level1  {
			 width: 48%;
			}
			#issues .level2 {
			  width: 45%;
			}
			#issues .level3 ul {
			  width: 45%;
			}
			#issues .level3 p {
			  float:none;
			  width: 93%;
			  margin: 2%;
			  clear:both;
			}
			#issues .level3 ul li:first-child,
			img.levelsImage {
			display: none;
			}
			.triangle-border {
			  margin-top: 25px;
			  margin-left: 0px;
			}

}
<?php if(extension_loaded('zlib')){ob_end_flush();}?>