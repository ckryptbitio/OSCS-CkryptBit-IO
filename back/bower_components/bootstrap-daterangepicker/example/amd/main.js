requirejs.config({
  "paths": {
    "jquery": "https://code.jquery.com/jquery-1.11.3.min",
    "moment": "../../moment",
    "daterangepicker": "../../daterangepicker"
  },
  "shim": {
    "daterangepicker": {
      "deps": ["moment"]
    }
  }
});

requirejs(['jquery', 'moment', 'daterangepicker'], function($, moment) {
  $(document).ready(function() {

    // Handle the keyup event on the #config-text input
    $('#config-text').keyup(function() {
      try {
        eval($(this).val());
      } catch (e) {
        console.error('Error evaluating code:', e);
      }
    });

    // Handle the change event on the .configurator input and select elements
    $('.configurator input, .configurator select').change(updateConfig);

    // Handle the click event on the .demo i elements
    $('.demo i').click(function() {
      $(this).parent().find('input').click();
    });

    // Initialize the #startDate and #endDate daterangepickers
    $('#startDate').daterangepicker({
      singleDatePicker: true,
      startDate: moment().subtract(6, 'days')
    });

    $('#endDate').daterangepicker({
      singleDatePicker: true,
      startDate: moment()
    });

    // Initialize the options object with default values
    var options = {
      singleDatePicker: false,
      showDropdowns: false,
      showWeekNumbers: false,
      showISOWeekNumbers: false,
      timePicker: false,
      timePicker24Hour: false,
      timePickerIncrement: 1,
      timePickerSeconds: false,
      autoApply: false,
      dateLimit: { days: 7 },
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      locale: {
        format: 'MM/DD/YYYY HH:mm',
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        firstDay: 1
      },
      linkedCalendars: true,
      autoUpdateInput: true,
      alwaysShowCalendars: false,
      parentEl: null,
      startDate: null,
      endDate: null,
      minDate: null,
      maxDate: null,
      opens: 'right',
      drops: 'down',
      buttonClasses: 'btn btn-sm',
      applyClass: 'btn-success',
      cancelClass: 'btn-default'
    };

    // Update the options object based on the form input values
    function updateConfig() {
      options.singleDatePicker = $('#singleDatePicker').is(':checked');
      options.showDropdowns = $('#showDropdowns').is(':checked');
      options.showWeekNumbers = $('#showWeekNumbers').is(':checked');
      options.showISOWeekNumbers = $('#showISOWeekNumbers').is(':checked');
      options.timePicker = $('#timePicker').is(':checked');
      options.timePicker24Hour = $('#timePicker24Hour').is(':checked');
      options.timePickerIncrement = parseInt($('#timePickerIncrement').val(), 10);
      options.timePickerSeconds = $('#timePickerSeconds').is(':checked');
      options.autoApply = $('#autoApply').is(':checked');
      options.dateLimit = {
        days: $('#dateLimit').is(':checked') ? 7 : null
      };
      options.ranges = $('#ranges').is(':checked') ? {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      } : null;
      options.locale = $('#locale').is(':checked') ? {
        format: 'MM/DD/YYYY HH:mm',
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        firstDay: 1
      } : null;
      options.linkedCalendars = !$('#linkedCalendars').is(':checked');
      options.autoUpdateInput = !$('#autoUpdateInput').is(':checked');
      options.alwaysShowCalendars = $('#alwaysShowCalendars').is(':checked');
      options.parentEl = $('#parentEl').val();
      options.startDate = $('#startDate').val();
      options.endDate = $('#endDate').val();
      options.minDate = $('#minDate').val();
      options.maxDate = $('#maxDate').val();
      options.opens = $('#opens').val() || 'right';
      options.drops = $('#drops').val() || 'down';
      options.buttonClasses = $('#buttonClasses').val() || 'btn btn-sm';
      options.applyClass = $('#applyClass').val() || 'btn-success';
      options.cancelClass = $('#cancelClass').val() || 'btn-default';
    }

    // Update the #config-text and #config-demo inputs with the current options object
    updateConfig();
    $('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");
    $('#config-demo').daterangepicker(options, function(start, end, label) { console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); });

  });
});
