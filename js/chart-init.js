(function ($) {
  /* "use strict" */

  var tfChart = (function () {
    var donutChart1 = function () {
      var options = {
        series: [50, 18, 17, 15],
        colors: ["#873B0A", "#FF8A00", "#1E7F11", "#E7E7E7"],
        chart: {
          width: 400,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          opacity: 1,
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                },
              },
            },
          },
        },
        labels: ["Item 01", "Item 02", "Item 03", "Item 04"],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 303,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var chart = new ApexCharts(
        document.querySelector("#donut-chart"),
        options
      );
      chart.render();
    };
    var pieChart1 = function () {
      var options = {
        series: [44, 55, 13, 43],
        colors: ["#E38B52", "#FFCB8D", "#26ADE4", "#68EE76"],

        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 1,
        },
        labels: ["Team A", "Team B", "Team C", "Team D"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 303,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
      chart.render();
    };

    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        donutChart1();
        pieChart1();
        barChart1();
        areaChart1();
      },
      resize: function () {},
    };
  })();

  jQuery(document).ready(function () {});

  jQuery(window).on("load", function () {
    tfChart.load();
  });

  jQuery(window).on("resize", function () {});
})(jQuery);
