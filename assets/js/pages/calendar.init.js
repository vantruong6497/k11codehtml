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
      this.$modalTitle.text("Asign room"),
      this.$modal.show(),
      (this.$selectedEvent = e.event),
      l("#event-title").val(this.$selectedEvent.title),
      l("#event-description").val(this.$selectedEvent.description),
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
            title: "Anthony Jee 3",
            start: '2022-08-14T09:30:00' ,
            end: '2022-08-14T10:30:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-14T11:15:00' ,
            end: '2022-08-14T12:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-14T13:00:00' ,
            end: '2022-08-14T14:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-14T14:30:00' ,
            end: '2022-08-14T15:40:00',
            className: "bg-cancel",
          },

          {
            title: "Anthony Jee",
            start: '2022-08-15T10:00:00' ,
            end: '2022-08-15T11:15:00',
            className: "bg-complete",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-15T11:40:00' ,
            end: '2022-08-15T12:50:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-15T13:20:00' ,
            end: '2022-08-15T14:30:00',
            className: "bg-cancel",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-15T14:45:00' ,
            end: '2022-08-15T15:45:00',
            className: "bg-complete",
          },

          {
            title: "Anthony Jee",
            start: '2022-08-16T09:30:00' ,
            end: '2022-08-16T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-16T11:20:00' ,
            end: '2022-08-16T12:30:00',
            className: "bg-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-16T13:00:00' ,
            end: '2022-08-16T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-16T14:40:00' ,
            end: '2022-08-16T15:45:00',
            className: "bg-active",
          },

          {
            title: "Anthony Jee",
            start: '2022-08-17T09:30:00' ,
            end: '2022-08-17T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-17T11:20:00' ,
            end: '2022-08-17T12:30:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-17T14:40:00' ,
            end: '2022-08-17T15:45:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-08-11T11:20:00' ,
            end: '2022-08-11T12:30:00',
            className: "bg-need-assigned",
          },

          {
            title: "Anthony Jee",
            start: '2022-08-19T09:30:00' ,
            end: '2022-08-19T10:40:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-19T11:20:00' ,
            end: '2022-08-19T12:30:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-19T13:00:00' ,
            end: '2022-08-19T14:10:00',
            className: "bg-need-assigned",
          },
          {
            title: "Anthony Jee",
            start: '2022-08-19T14:40:00' ,
            end: '2022-08-19T15:45:00',
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
        height: l(window).height() - 450,
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
