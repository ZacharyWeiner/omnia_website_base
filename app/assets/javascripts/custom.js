var ready = function() {
	var $window = $(window);
	$('section[data-type="background"]').each(function(){
		var section_with_tag = $(this);
		//add a scroll method in this scope 
		$(window).scroll(function(){
				var top_distance = $window.scrollTop();
				//alert(top_distance);
				var speed = section_with_tag.data('speed');
				var y_coord = -(top_distance / speed);
				//alert(y_coord);
				var final_coordinate = '50% ' + y_coord + 'px';
				section_with_tag.css({backgroundPosition: final_coordinate});
		});
	});



};

$(document).ready(ready);
$(document).on('page:load', ready);