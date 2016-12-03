function watchFormSubmission() {
	$('.js-text-form').submit(function(event) {
		event.preventDefault();
		var userText = $(this).find('#user-text').val();
		
	})
}