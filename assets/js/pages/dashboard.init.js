"use strict";
!(function (e) {
    function a() {
        this.$realData = [];
    }
    (a.prototype.createBarChart = function (e, a, r, t, o, i) {
        Morris.Bar({ element: e, data: a, xkey: r, ykeys: t, labels: o, hideHover: "auto", resize: !0, gridLineColor: "rgba(173, 181, 189, 0.1)", barSizeRatio: 0.2, dataLabels: !1, barColors: i });
    }),
        (a.prototype.createLineChart = function (e, a, r, t, o, i, n, s, l) {
            Morris.Line({
                element: e,
                data: a,
                xkey: r,
                ykeys: t,
                labels: o,
                fillOpacity: i,
                pointFillColors: n,
                pointStrokeColors: s,
                behaveLikeLine: !0,
                gridLineColor: "rgba(173, 181, 189, 0.1)",
                hideHover: "auto",
                resize: !0,
                pointSize: 0,
                dataLabels: !1,
                lineColors: l,
            });
        }),
        (a.prototype.createDonutChart = function (e, a, r) {
            Morris.Donut({ element: e, data: a, resize: !0, colors: r, backgroundColor: "transparent" });
        }),
        (a.prototype.init = function () {
            e("#morris-bar-example").empty(), e("#morris-line-example").empty(), e("#morris-donut-example").empty();
            this.createBarChart(
                "morris-bar-example",
                [
                    { y: "01", a: 1800 },
                    { y: "02", a: 900 },
                    { y: "03", a: 1200 },
                    { y: "04", a: 1100 },
                    { y: "05", a: 1400 },
                    { y: "06", a: 900 },
                    { y: "07", a: 1500 },
                    { y: "08", a: 1200 },
                    { y: "09", a: 1000 },
                    { y: "10", a: 2000 },
                    { y: "11", a: 1000 },
                    { y: "12", a: 2000 },
                    { y: "13", a: 900 },
                    { y: "14", a: 400 },
                    { y: "15", a: 1000 },
                    { y: "16", a: 1200 },
                    { y: "17", a: 1400 },
                    { y: "18", a: 1600 },
                    { y: "19", a: 800 },
                    { y: "20", a: 900 },
                    { y: "21", a: 1000 },
                    { y: "22", a: 2000 },
                    { y: "23", a: 700 },
                    { y: "24", a: 900 },
                    { y: "25", a: 1100 },
                    { y: "26", a: 1000 },
                    { y: "27", a: 1900 },
                    { y: "28", a: 1300 },
                    { y: "29", a: 1200 },
                    { y: "30", a: 1100 },
                    { y: "31", a: 2000 },
                ],
                "y",
                ["a"],
                ["User"],
                ["#D72650"]
            );
            this.createBarChart(
                "morris-bar-example-2",
                [
                    { y: "01", a: 1800 },
                    { y: "02", a: 900 },
                    { y: "03", a: 1200 },
                    { y: "04", a: 1100 },
                    { y: "05", a: 1400 },
                    { y: "06", a: 900 },
                    { y: "07", a: 1500 },
                    { y: "08", a: 1200 },
                    { y: "09", a: 1000 },
                    { y: "10", a: 2000 },
                    { y: "11", a: 1000 },
                    { y: "12", a: 2000 },
                    { y: "13", a: 900 },
                    { y: "14", a: 400 },
                    { y: "15", a: 1000 },
                    { y: "16", a: 1200 },
                    { y: "17", a: 1400 },
                    { y: "18", a: 1600 },
                    { y: "19", a: 800 },
                    { y: "20", a: 900 },
                    { y: "21", a: 1000 },
                    { y: "22", a: 2000 },
                    { y: "23", a: 700 },
                    
                ],
                "y",
                ["a"],
                ["User"],
                ["#D72650"]
            );
            this.createBarChart(
                "morris-bar-example-3",
                [
                    { y: "Sun 1", a: 1800 },
                    { y: "Mon 2", a: 900 },
                    { y: "Tue 3", a: 1200 },
                    { y: "Web 4", a: 1100 },
                    { y: "Thu 5", a: 1400 },
                    { y: "Fri 6", a: 900 },
                    { y: "Sat 7", a: 1500 },
                    
                ],
                "y",
                ["a"],
                ["User"],
                ["#D72650"]
            );
            this.createLineChart(
                "morris-line-example",
                [
                    { y: "2008", a: 50, b: 0 },
                    { y: "2009", a: 75, b: 50 },
                    { y: "2010", a: 30, b: 80 },
                    { y: "2011", a: 50, b: 50 },
                    { y: "2012", a: 75, b: 10 },
                    { y: "2013", a: 50, b: 40 },
                    { y: "2014", a: 75, b: 50 },
                    { y: "2015", a: 100, b: 70 },
                ],
                "y",
                ["a", "b"],
                ["Series A", "Series B"],
                ["0.9"],
                ["#ffffff"],
                ["#999999"],
                ["#10c469", "#188ae2"]
            );
            this.createDonutChart(
                "morris-donut-example",
                [
                    { label: "Download Sales", value: 12 },
                    { label: "In-Store Sales", value: 30 },
                    { label: "Mail-Order Sales", value: 20 },
                ],
                ["#ff8acc", "#5b69bc", "#35b8e0"]
            );
        }),
        (e.Dashboard1 = new a()),
        (e.Dashboard1.Constructor = a);
})(window.jQuery),
    (function (a) {
        a.Dashboard1.init(),
            window.addEventListener("adminto.setBoxed", function (e) {
                a.Dashboard1.init();
            }),
            window.addEventListener("adminto.setFluid", function (e) {
                a.Dashboard1.init();
            });
    })(window.jQuery);
