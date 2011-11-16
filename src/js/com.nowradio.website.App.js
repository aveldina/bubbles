
/**
 * Generic onReady function called from all pages.
 * Set up your page initialisation code by adding it's ID to the switch statement
 */
/*
//target = '.dot'
function parallaxScroll(target) {
	var dot = $(target);
	var layerRepulsions = [0.3,0.2,0.1],
 		windowMiddle = $(window).scrollTop( ) + $(window).height( ) / 2;		

	var easedWindowMiddle = 0;
		easedWindowMiddle -= (easedWindowMiddle - windowMiddle) * 0.3;
	var distanceToMiddle = parseFloat($('.dot-wrap').css('top')) - easedWindowMiddle;

	dot.css('top', distanceToMiddle * 0.3);//.easeOutQuad;
}*/


function createDots() {
	var heightOfCurrentSection = $('#dots-holder').outerHeight(); //-holder

	var container = $('#dots-holder');

	var dotNumberArrays = ["one","two","three"];

	for (var m = heightOfCurrentSection / 40, p = 0; p < 40; p++) {
            var dotNumber = dotNumberArrays[Math.floor(dotNumberArrays.length * Math.random())],
            dotWrap = $("<div class='dot-wrap'></div>");
            //dotNumber = "one";
            var thisDot = $("<div class='dot " + dotNumber + " " + "'></div>").appendTo(dotWrap);
            container.append(dotWrap);
            var arcSize = 600; //arc size
            var width = parseFloat(thisDot.css("width"));
            var startPoint = 600;


            //normal bubble assignment
            var heightOffset = p * m;   //m is this section's height / 20, p is 0-20 per section (20 dots per section?)
            //6.283185307179586
            var rb = 6.283185307179586 * heightOffset / heightOfCurrentSection,
                ma = Math.cos(0.5 * rb);
            //console.log("rb:" + rb + " hOf:" + heightOffset + " hoS:" + heightOfCurrentSection + " ma:" + ma + " width: " + width);
                //480 + 600 * SIN(rb) - 280 * 0.5
            //console.log("sin: " + Math.sin(rb));
            //console.log(480 + pb * Math.sin(rb) - width * 0.5);

            dotWrap.css("left", startPoint + arcSize * Math.sin(rb) - width * 0.5);

            //console.log("top: " + heightOffset);
            dotWrap.css("top", heightOffset);

            //(looks like only multi layer on sides? 
            //if (ma < -0.9 || ma > 0.9) q.addClass("layer3");
            //else ma < -0.4 || ma > 0.4 ? q.addClass("layer2") : q.addClass("layer1");
            //this.Yc.push(x)
        }
}


$(document).ready(function(){
	
	/*
		Determine which page we are on...
	*/
	
	var html = document.getElementsByTagName( "html" )[0];
	var page = html.getAttribute( "id" );
	
	Logger.debug( "document.ready :: " + page );
	
	var	controller,
		model,
		view,
		dom = {};
	
	switch( page ) {
		
		case "index" : default :
		
			dom.output = $("#output");
			
			model		= new com.nowradio.website.Model();
			controller	= new com.nowradio.website.Controller( model );
			view		= new com.nowradio.website.View( model, controller, dom );
			
			controller.startTimer();
			
		break;
	}
	
	createDots();
	//$(window).bind('scroll', function( ){dotObject.scrolled.dispatch('.dot')});
	
	
});