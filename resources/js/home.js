$(function () {
	var $container = $('#slider-wrapper');
	var SliderList = $.grep(sliders, function(element, index) {
        return element;
    });
 	var i = 0;
    $container.html('<div id="img-slider"><img src="'+SliderList[i].value+'"></div><div id="banner"><h1>'+SliderList[i].title+'</h1><br><p>'+SliderList[i].description+'</p><br><a href="#">Read More</a><br><br><br><div id="img-nav"><ul><li><a href="#" id="prev">&nbsp;</a></li><li><a href="#" id="next">&nbsp;</a></li></ul></div></div>');
    document.getElementById('next').onclick = function () { nextSlider(SliderList,i); }
    document.getElementById('prev').onclick = function () { prevSlider(SliderList,i); }
    document.getElementById('prev').style.opacity = "0.5";
});

function nextSlider(obj,index) {
	var $container = $('#slider-wrapper');
	var length = obj.length;
	if(index == (length-1)) {
		document.getElementById('next').style.opacity = "0.5";
	}
	else {
		var i = index + 1;
		$container.html('<div id="banner"><h1>'+obj[i].title+'</h1><br><p>'+obj[i].description+'</p><br><a href="#">Read More</a><br><br><br><div id="img-nav"><ul><li><a href="#" id="prev">&nbsp;</a></li><li><a href="#" id="next">&nbsp;</a></li></ul></div></div><div id="img-slider"><img src="'+obj[i].value+'"></div>');
		document.getElementById('next').onclick = function () { nextSlider(obj,i); }
    	document.getElementById('prev').onclick = function () { prevSlider(obj,i); }
		if(i == (length-1)) {
			document.getElementById('next').style.opacity = "0.5";
		}	
	}
}

function prevSlider(obj,index) {
	var $container = $('#slider-wrapper');
	var length = obj.length;
	if(index == 0) {
		document.getElementById('prev').style.opacity = "0.5";
	}
	else {
		var i = index - 1;
		$container.html('<div id="banner"><h1>'+obj[i].title+'</h1><br><p>'+obj[i].description+'</p><br><a href="#">Read More</a><br><br><br><div id="img-nav"><ul><li><a href="#" id="prev">&nbsp;</a></li><li><a href="#" id="next">&nbsp;</a></li></ul></div></div><div id="img-slider"><img src="'+obj[i].value+'"></div>');
		document.getElementById('next').onclick = function () { nextSlider(obj,i); }
    	document.getElementById('prev').onclick = function () { prevSlider(obj,i); }
		if(i == 0) {
			document.getElementById('prev').style.opacity = "0.5";
		}
	}
}  