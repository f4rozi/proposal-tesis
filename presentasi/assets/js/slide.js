'use strict';

var logoKampus = document.querySelector("#logo-kampus");

Reveal.initialize({
	autoSlide: false,
	transition:'zoom',
	history:true,
	slideNumber: 'c/t',
	parallaxBackgroundImage: 'assets/images/main-bg-2.jpg',
	parallaxBackgroundSize:'1816px 900px',
	parallaxBackgroundHorizontal: 50,
    parallaxBackgroundVertical: 20,
    keyboard: {
    	13: function() {
    		var state = Reveal.getState();
    		
    		if ( state.indexh < 4 ) {
    			Reveal.slide(4,2);
    		} else if ( state.indexh >= 4 && state.indexh < 6 ) {
    			Reveal.slide(6,1);
    		} else {
    			return Reveal.next();
    		}
    	}
    },
    dependencies: [
    	{ 
    		src: 'bower_components/reveal.js/plugin/highlight/highlight.js', 
    		async: true, 
    		callback: function() { 
    			hljs.initHighlightingOnLoad(); 
    		} 
    	}
    ]
});

Reveal.addEventListener('ready', function (event) {
	var mainBackground = document.querySelector('.backgrounds');
	mainBackground.style['opacity'] = 0.2;
	mainBackground.style['background-color'] = '#000';
	
	if ( Reveal.isFirstSlide() ) {
		logoKampus.setAttribute("style", "top:0px;left:0px;float:none;width:150px;position:relative;");
	}

	if ( Reveal.isLastSlide() ) {
		event.currentSlide.setAttribute("style","text-align:center");
	}
});

Reveal.addEventListener('slidechanged', function (event) {
	if ( Reveal.isFirstSlide() ) {
		logoKampus.setAttribute("style", "top:0px;left:0px;float:none;width:150px;position:relative;");
	}
	if ( Reveal.isLastSlide() ) {
		event.currentSlide.setAttribute("style","text-align:center");
	}
});