function parallaxElement(element, properties){
	var init = parseInt(element.css(properties.horizontal ? "left" : "top"))/element.parent()[properties.horizontal ? "width" : "height"]()*100;
	if (typeof init != "number" || isNaN(init)){
		init = 0;
	}
	$(window).on("scroll", function(){
		if ($(document).scrollTop() >= properties.startPos && $(document).scrollTop() <= properties.endPos) {
			element.css(
				properties.horizontal ? "left" : "top", 
				init + ($(document).scrollTop() - properties.startPos)/properties.endPos*properties.speed*100 + "%"
			)
		}
	});
}

$(function(){
	$("#mask").css("opacity","1"); //Cover Screen 
	//Begin Preparations
	parallaxElement($("#slogan"), {
		startPos: 0,
		endPos: $(window).height(),
		speed: -.5
	});
	
	
	//Parallax Landing Background
	$(window).on("scroll", function(){
		
		//Parallax Landing Background
		var bkgParallaxingFactor = .5;
		var scale = $(document).scrollTop()/$(window).height();
		if (scale <= 1){
			$("#landing").css("background-position", "center " + (scale*100*bkgParallaxingFactor) + "%");
		}

	
	})
	
	
	
	//Preparations Complete
	setTimeout(function(){ //Unveil
		$("#mask").animate({opacity: 0}, 1000);
	}, 125);
})

///








function parallaxElement(element, properties){
	var init = parseInt(element.css(properties.horizontal ? "left" : "top"))/element.parent()[properties.horizontal ? "width" : "height"]()*100;
	if (typeof init != "number" || isNaN(init)){
		init = 0;
	}
	$(window).on("scroll", function(){
		if ($(document).scrollTop() >= properties.startPos && $(document).scrollTop() <= properties.endPos) {
			element.css(
				properties.horizontal ? "left" : "top", 
				init + ($(document).scrollTop() - properties.startPos)/properties.endPos*properties.speed*100 + "%"
			)
		}
	});
}

$(function(){
	$("#mask2").css("opacity","1"); //Cover Screen 
	//Begin Preparations
	parallaxElement($("#slogan2"), {
		startPos: 0,
		endPos: $(window).height(),
		speed: -.5
	});
	
	
	//Parallax Landing Background
	$(window).on("scroll", function(){
		
		//Parallax Landing Background
		var bkgParallaxingFactor = .5;
		var scale = $(document).scrollTop()/$(window).height();
		if (scale <= 1){
			$("#landing2").css("background-position", "center " + (scale*100*bkgParallaxingFactor) + "%");
		}

	
	})
	
	
	
	//Preparations Complete
	setTimeout(function(){ //Unveil
		$("#mask2").animate({opacity: 0}, 1000);
	}, 125);
})
///