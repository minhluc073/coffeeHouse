(function ($) {
  "use strict";

  var rangeSliderOne = function () {
    if ($("#basic-slider-one").length > 0) {
      var skipSlider = document.getElementById("basic-slider-one");
      noUiSlider.create(skipSlider, {
        start: 50,
        connect: [true, false],
        behaviour: "snap",
        step: 1,
        range: {
          min: 0,
          max: 100,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });
    }
  };

  var rangeSliderTwo = function () {
    if ($("#basic-slider").length > 0) {
      var skipSlider = document.getElementById("basic-slider");
      noUiSlider.create(skipSlider, {
        start: [30, 70],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 100,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });
    }
  };

  var rangeSliderTooltip = function () {
    if ($("#slider-tooltip").length > 0) {
      var skipSlider = document.getElementById("slider-tooltip");

      noUiSlider.create(skipSlider, {
        start: [30, 70],
        connect: true,
        tooltips: [true, true],
        step: 1,
        range: {
          min: 0,
          max: 100,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });
    }
  };

  var rangeSliderDisable = function () {
    if ($("#slider-disable").length > 0) {
      var skipSlider = document.getElementById("slider-disable");
      var checkbox = document.getElementById("checkbox-slider");
      function handleCheck(e) {
        if (this.checked) {
          e.setAttribute("disabled", true);
        } else {
          e.removeAttribute("disabled");
        }
      }

      noUiSlider.create(skipSlider, {
        start: 50,
        connect: [true, false],
        range: {
          min: 0,
          max: 100,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });

      checkbox.addEventListener("click", function () {
        handleCheck.call(this, skipSlider);
      });
    }
  };

  var rangeOne = function () {
    if ($("#range-one-val").length > 0) {
      var directionSlider = document.getElementById("range-one-val");
      noUiSlider.create(directionSlider, {
        start: 20,
        behaviour: "snap",
        connect: [true, false],
        range: {
          min: 0,
          max: 50,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });

      var directionField = document.getElementById("field-range");
      directionSlider.noUiSlider.on("update", function (values, handle) {
        directionField.innerHTML = values[handle] + "km";
      });
    }
  };

  var rangeTwo = function () {
    if ($("#range-two-val").length > 0) {
      var skipSlider = document.getElementById("range-two-val");
      var skipValues = [
        document.getElementById("skip-value-lower"),
        document.getElementById("skip-value-upper"),
      ];

      noUiSlider.create(skipSlider, {
        start: [0, 20],
        connect: true,
        behaviour: "drag",
        step: 1,
        range: {
          min: 0,
          max: 80,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });

      skipSlider.noUiSlider.on("update", function (values, handle) {
        skipValues[handle].innerHTML = "$" + values[handle];
      });
    }
  };

  $(function () {
    rangeSliderOne();
    rangeSliderTwo();
    rangeSliderTooltip();
    rangeSliderDisable();
  });
})(jQuery);
