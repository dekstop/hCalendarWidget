/**
 * Loads a hCalendar Widget and populates it with events read from markup 
 * on the current page.
 */

// Adapt for your setup
var libRoot = 'http://github.com/dekstop/hCalendarWidget/tree/master/lib';

$(document).ready(function() {
	// Inject CSS
	$('head').append('<link rel="stylesheet" type="text/css" href="' + libRoot + '/fullcalendar-1.4.8/fullcalendar/fullcalendar.css" />');
	$('head').append('<style>#calendar { width: 750px; margin: 0 auto; }</style>');

	// Load widget
	new hCalendarWidget().display('#calendar');
});
