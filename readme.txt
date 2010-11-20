2010-11-20 14:07:37

 =======================
 = hCalendar JS Widget =
 =======================

A JavaScript widget that loads hCalendar markup from the current page and displays them in a Google Calendar-style UI. It's really just a bit of glue code around the hCalendar microformat, and the FullCalendar JQuery plugin.

Martin Dittus, 2010-11-14

 ===========
 = Example =
 ===========

Dependencies (included):
* JQuery, http://jquery.com/
* FullCalendar JQuery plugin, http://arshaw.com/fullcalendar/

Code example:
  <script type='text/javascript' src='hCalendarWidget.js'></script>
  <script type="text/javascript">
    $(document).ready(function() {
      new hCalendarWidget().display('#calendar');
    });
  </script>
  
  <div id="calendar"></div>

More complete example:
* Cf. example.html

 =============
 = MediaWiki =
 =============

To embed this in a MediaWiki you would also need:
* The WikiScript MediaWiki plugin, http://www.mediawiki.org/wiki/Extension:WikiScript
* A <wikiscript ... /> tag for every javascript dependency
* A custom launcher script that injects CSS, constructs the widget, and packages up any other customisations. 
  * This is needed since WikiScript does not allow inline JavaScript. 
  * Cf. mediawiki-hCal.js

Example:

  <wikiscript type="text/javascript" src="http://github.com/dekstop/hCalendarWidget/raw/master//lib/fullcalendar-1.4.8/jquery/jquery-1.4.3.min.js"></wikiscript>
  <wikiscript type="text/javascript" src="http://github.com/dekstop/hCalendarWidget/raw/master//lib/fullcalendar-1.4.8/jquery/jquery-ui-1.8.5.custom.min.js"></wikiscript>
  <wikiscript type="text/javascript" src="http://github.com/dekstop/hCalendarWidget/raw/master//lib/fullcalendar-1.4.8/fullcalendar/fullcalendar.min.js"></wikiscript>
  <wikiscript type="text/javascript" src="http://github.com/dekstop/hCalendarWidget/raw/master//hCalendarWidget.js"></wikiscript>
  <wikiscript type="text/javascript" src="http://github.com/dekstop/hCalendarWidget/raw/master//mediawiki-hCal.js"></wikiscript>

  <div id="calendar"></div>
