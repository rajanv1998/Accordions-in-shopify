var $question_one = $('.accordion_head');
var $answer_one = $('.accordion_body');
$question_one.click(function() {
	// Hide all answers
	$answer_one.slideUp();
	// Check if this answer is already open
	if ($(this).hasClass('active')) {
		// If already open, remove 'open' class and hide answer
		$(this).removeClass('active').next($answer_one).slideUp();
		// If it is not open...
	} else {
		// Remove 'open' class from all other questions
		$question_one.removeClass('active');
		// Open this answer and add 'open' class
		$(this).addClass('active').next($answer_one).slideDown();
	}
});
