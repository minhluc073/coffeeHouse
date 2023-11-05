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

  var rangeTwoKeypress = function () {
    if ($("#keypress-two-val").length > 0) {
      var skipSlider = document.getElementById("keypress-two-val");
      var skipValues = [
        document.getElementById("ip-val-lower"),
        document.getElementById("ip-val-upper"),
      ];

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

      skipSlider.noUiSlider.on("update", function (val, e) {
        skipValues[e].value = val[e];
      });
    }
  };

  var rangeSoftLimit = function () {
    if ($("#limit-val").length > 0) {
      var limitVal = document.getElementById("limit-val");
      noUiSlider.create(limitVal, {
        start: 50,
        range: {
          min: 0,
          max: 100,
        },
        pips: {
          mode: "values",
          values: [20, 80],
          density: 5,
        },
      });
      var limitHandle = limitVal.noUiSlider;
      limitHandle.on("change", function (val, e) {
        if (val[e] < 20) {
          this.set(20);
        } else if (val[e] > 80) {
          this.set(80);
        }
      });
    }
  };
  var rangePips = function () {
    if (jQuery("#pips-val").length > 0) {
      var pipsSlider = document.getElementById("pips-val");
      noUiSlider.create(pipsSlider, {
        range: {
          min: 0,
          max: 100,
        },
        start: [50],
        pips: {
          mode: "count",
          values: 5,
          density: 5,
        },
      });
    }
  };

  var rangeDirection = function () {
    if ($("#slider-dir").length > 0) {
      var dirSlider = document.getElementById("slider-dir");
      noUiSlider.create(dirSlider, {
        start: 80,
        range: {
          min: 0,
          max: 100,
        },
      });

      var dirVal = document.querySelector(".field-dir");
      dirSlider.noUiSlider.on("update", function (val, e) {
        dirVal.innerHTML = val[e];
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
    rangeTwoKeypress();
    rangeSoftLimit();
    rangePips();
    rangeDirection();
  });
})(jQuery);
