(function($) {
	
	var defaults = { option_data:'my options' };
	var options;

	$.fn.contentEdit = function(params){
		
	options = $.extend({}, defaults, options, params);
	
	$(this).data('option_data', options.option_data);

	$(this).on('click',function() {
		if ( !$(this).find('textarea').length ){
			$(this).append('<textarea name="data">'+ $(this).text() +'</textarea> <input class="frm-submt"  type="submit" />');
		}	
	});

	$(this).on('click', '.frm-submt', function(e) {
		
		console.log($(this).parent().data('option_data'));

		$(this).closest($(this).parent()).text( $(this).closest($(this).parent()).find('textarea').attr('value') );
			return false;
		});
		
		return this;  
	};

})(jQuery);