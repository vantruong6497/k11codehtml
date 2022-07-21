"use strict";
!(function (l) {
  function e() {
    (this.$body = l("body")),
      (this.$modal = l("#event-modal")),
      (this.$calendar = l("#calendar")),
      (this.$formEvent = l("#form-event")),
      (this.$btnNewEvent = l("#btn-new-event")),
      (this.$btnDeleteEvent = l("#btn-delete-event")),
      (this.$btnSaveEvent = l("#btn-save-event")),
      (this.$modalTitle = l("#modal-title")),
      (this.$calendarObj = null),
      (this.$selectedEvent = null),
      (this.$newEventData = null);
      
  }
  (e.prototype.onEventClick = function (e) {
    this.$formEvent[0].reset(),
      this.$formEvent.removeClass("was-validated"),
      (this.$newEventData = null),
      this.$btnDeleteEvent.show(),
      this.$modalTitle.text("Edit Event"),
      this.$modal.show(),
      (this.$selectedEvent = e.event),
      l("#event-title").val(this.$selectedEvent.title),
      l("#event-category").val(this.$selectedEvent.classNames[0]);
  }),
    (e.prototype.onSelect = function (e) {
      this.$formEvent[0].reset(),
        this.$formEvent.removeClass("was-validated"),
        (this.$selectedEvent = null),
        (this.$newEventData = e),
        this.$btnDeleteEvent.hide(),
        this.$modalTitle.text("Add New Event"),
        this.$modal.show(),
        this.$calendarObj.unselect();
    }),
    (e.prototype.init = function () {
      this.$modal = new bootstrap.Modal(
        document.getElementById("event-modal"),
        { keyboard: !1 }
      );
      var e = new Date(l.now());
      new FullCalendar.Draggable(document.getElementById("external-events"), {
        itemSelector: ".external-event",
        eventData: function (e) {
          return { title: e.innerText, className: l(e).data("class") };
        },
      });
      var e = [

          {
            title: "Anthony Jee",
            start: '2022-07-03T09:30:00' ,
            end: '2022-07-03T10:30:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-03T11:15:00' ,
            end: '2022-07-03T12:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-03T13:00:00' ,
            end: '2022-07-03T14:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-03T14:30:00' ,
            end: '2022-07-03T15:40:00',
            className: "bg-cancel",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-04T10:00:00' ,
            end: '2022-07-04T11:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-04T11:40:00' ,
            end: '2022-07-04T12:50:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-04T13:20:00' ,
            end: '2022-07-04T14:30:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-04T14:45:00' ,
            end: '2022-07-04T15:45:00',
            className: "bg-complete",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-05T09:30:00' ,
            end: '2022-07-05T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-05T11:20:00' ,
            end: '2022-07-05T12:30:00',
            className: "bg-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-05T13:00:00' ,
            end: '2022-07-05T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-05T14:40:00' ,
            end: '2022-07-05T15:45:00',
            className: "bg-active",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-06T09:30:00' ,
            end: '2022-07-06T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-06T11:20:00' ,
            end: '2022-07-06T12:30:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-06T14:40:00' ,
            end: '2022-07-06T15:45:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-07T11:20:00' ,
            end: '2022-07-07T12:30:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-08T09:30:00' ,
            end: '2022-07-08T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-08T11:20:00' ,
            end: '2022-07-08T12:30:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-08T13:00:00' ,
            end: '2022-07-08T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-08T14:40:00' ,
            end: '2022-07-08T15:45:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-09T13:00:00' ,
            end: '2022-07-09T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-09T14:40:00' ,
            end: '2022-07-09T15:45:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-18T09:30:00' ,
            end: '2022-07-18T10:30:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-18T11:15:00' ,
            end: '2022-07-18T12:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-18T13:00:00' ,
            end: '2022-07-18T14:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-18T14:30:00' ,
            end: '2022-07-18T15:40:00',
            className: "bg-cancel",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-019T10:00:00' ,
            end: '2022-07-019T11:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-019T11:40:00' ,
            end: '2022-07-019T12:50:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-019T13:20:00' ,
            end: '2022-07-019T14:30:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-019T14:45:00' ,
            end: '2022-07-019T15:45:00',
            className: "bg-complete",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-20T09:30:00' ,
            end: '2022-07-20T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-20T11:20:00' ,
            end: '2022-07-20T12:30:00',
            className: "bg-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-20T13:00:00' ,
            end: '2022-07-20T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-20T14:40:00' ,
            end: '2022-07-20T15:45:00',
            className: "bg-active",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-21T09:30:00' ,
            end: '2022-07-21T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-21T11:20:00' ,
            end: '2022-07-21T12:30:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-21T14:40:00' ,
            end: '2022-07-21T15:45:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-22T11:20:00' ,
            end: '2022-07-22T12:30:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-23T09:30:00' ,
            end: '2022-07-23T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-23T11:20:00' ,
            end: '2022-07-23T12:30:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-23T13:00:00' ,
            end: '2022-07-23T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-23T14:40:00' ,
            end: '2022-07-23T15:45:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-07-24T13:00:00' ,
            end: '2022-07-24T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-07-24T14:40:00' ,
            end: '2022-07-24T15:45:00',
            className: "bg-need-assigned",
          },
          
        ],
        a = this;
      (a.$calendarObj = new FullCalendar.Calendar(a.$calendar[0], {
        slotDuration: "01:00:00",
        slotMinTime: "09:00:00",
        slotMaxTime: "33:00:00",
        themeSystem: "bootstrap",
        bootstrapFontAwesome: !1,

        allDaySlot: false,
        buttonText: {
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
          prev: "Prev",
          next: "Next",
        },
        initialView: "dayGridMonth",
        handleWindowResize: !0,
        height: l(window).height() - 350,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        initialEvents: e,
        editable: !0,
        droppable: !0,
        selectable: !0,
        dateClick: function (e) {
          a.onSelect(e);
        },
        eventClick: function (e) {
          a.onEventClick(e);
        },
      })),
        a.$calendarObj.render(),
        a.$btnNewEvent.on("click", function (e) {
          a.onSelect({ date: new Date(), allDay: !0 });
        }),
        a.$formEvent.on("submit", function (e) {
          e.preventDefault();
          var t,
            n = a.$formEvent[0];
          n.checkValidity()
            ? (a.$selectedEvent
                ? (a.$selectedEvent.setProp("title", l("#event-title").val()),
                  a.$selectedEvent.setProp("classNames", [
                    l("#event-category").val(),
                  ]))
                : ((t = {
                    title: l("#event-title").val(),
                    start: a.$newEventData.date,
                    allDay: a.$newEventData.allDay,
                    className: l("#event-category").val(),
                  }),
                  a.$calendarObj.addEvent(t)),
              a.$modal.hide())
            : (e.stopPropagation(), n.classList.add("was-validated"));
        }),
        l(
          a.$btnDeleteEvent.on("click", function (e) {
            a.$selectedEvent &&
              (a.$selectedEvent.remove(),
              (a.$selectedEvent = null),
              a.$modal.hide());
          })
        );
    }),
    (l.CalendarApp = new e()),
    (l.CalendarApp.Constructor = e);
})(window.jQuery),
  window.jQuery.CalendarApp.init();
