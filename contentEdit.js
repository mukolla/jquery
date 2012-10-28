(function($) {
	
	var defaults = { tag:'div' };
	var options;

	$.fn.contentEdit = function(params){
		

		options = $.extend({}, defaults, options, params);
	$(this).data('tag', options.tag);

	$(this).on('click',function() {
		if ( !$(this).find('textarea').length ){
			$(this).append('<textarea name="data">'+ $(this).text() +'</textarea> <input class="frm-submt"  type="submit" />');
		}	
	});

	$(this).on('click', '.frm-submt', function(e) {
		
		console.log($(this).parent().data('tag'));

		$(this).closest($(this).parent()).text( $(this).closest($(this).parent()).find('textarea').attr('value') );
			return false;
		});
		
		return this;  
	};

})(jQuery);



$('.contentedit').contentEdit({'tag':'span'});

$('.content').contentEdit({'tag':'div'});

$('h1').contentEdit();