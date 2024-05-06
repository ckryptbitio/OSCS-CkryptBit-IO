// ja.js
import moment from 'moment';

const ja = {
  closeText: '閉じる',
  prevText: '&#x3C;前',
  nextText: '次&#x3E;',
  currentText: '今日',
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  monthNamesShort: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  dayNames: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日'
  ],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
  dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
  weekHeader: '週',
  dateFormat: 'yy/mm/dd',
  firstDay: 0,
  isRTL: false,
  showMonthAfterYear: true,
  yearSuffix: '年'
};

export default moment.defineLocale('ja', ja);


// ja-fullcalendar.js
import moment from 'moment';
import fullCalendar from 'fullcalendar';

fullCalendar.datepickerLocale('ja', {
  closeText: '閉じる',
  prevText: '&#x3C;前',
  nextText: '次&#x3E;',
  currentText: '今日',
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  monthNamesShort: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  dayNames: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日'
  ],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
  dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
  weekHeader: '週',
  dateFormat: 'yy/mm/dd',
  firstDay: 0,
  isRTL: false,
  showMonthAfterYear: true,
  yearSuffix: '年'
});

fullCalendar.locale('ja', {
  buttonText: {
    month: '月',
    week: '週',
    day: '日',
    list: '予定リスト'
  },
  allDayText: '終日',
  eventLimitText: function(e) {
    return '他 ' + e + ' 件';
  },
  noEventsMessage: '表示する予定はありません'
});

export default fullCalendar;


// index.js
import moment from 'moment';
import fullCalendar from './ja-fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

// Initialize the calendar
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new fullCalendar.Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    locale: 'ja',
    businessHours: true,
    editable: true,
    eventLimit: true,
    events: [
      {
        title: 'All Day Event',
        start: '2023-02-01'
      },
      {
        title: 'Long Event',
        start: '2023-02-07',
        end: '2023-02-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2023-02-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2023-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2023-02-11',
        end: '2023-02-13'
      },
      {
        title: 'Meeting',
        start: '2023-02-12T10:30:00',
        end: '2023-02-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2023-02-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2023-02-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2023-02-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2023-02-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2023-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2023-02-28'
      }
    ]
  });

  calendar.render();
});
