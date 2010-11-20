
function hCalendarWidget() {

}

hCalendarWidget.prototype = {
	getEvents: function() {
		var events = Array();

		$('.vevent').each(function(idx, e) {
			var topic = $(e).attr('title');
			var title = $(e).find('.summary').html();
			var start = $(e).find('.dtstart').html();
			var end = $(e).find('.dtend').html();
			var location = $(e).find('.location').html();
			var url = $(e).find('.url').html();

			events.push({
				title: (topic ? topic + ": " + title : title),
				start: start,
				end: end,
				allDay: true,
				url: url
			});
		});

		return events;
	},
	
	display: function(container, events, parameters) {
		if (!events) {
			events = this.getEvents();
		}
		if (!parameters) {
			parameters = {};
		}
		$(container).fullCalendar($.merge({
			editable: false,
			events: events
		}, parameters));
	}
};
