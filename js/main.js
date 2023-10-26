/*
 * show pass
 * otp input
 * range slider one
 * range slider two
 * clear Item
 * block delete
 * active photo
 * back Page
 * press toggles
 * clear Text
 * message
 * gallery
 * custom select
 * active Suggestions
 * preloader
 */
(function ($) {
  "use strict";

  /* show pass
  ------------------------------------------------------------------------------------- */
  var showPass = function () {
    $(".show-pass").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field").attr("type") == "password") {
        $(".password-field").attr("type", "text");
      } else if ($(".password-field").attr("type") == "text") {
        $(".password-field").attr("type", "password");
      }
    });
    $(".show-pass2").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field2").attr("type") == "password") {
        $(".password-field2").attr("type", "text");
      } else if ($(".password-field2").attr("type") == "text") {
        $(".password-field2").attr("type", "password");
      }
    });
  };

  /* otp input
  ------------------------------------------------------------------------------------- */
  var otpInput = function () {
    if ($(".digit-group").length > 0) {
      $(".digit-group")
        .find("input")
        .each(function () {
          $(this).attr("maxlength", 1);
          $(this).on("keyup", function (e) {
            var valNum = $(this).val();
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
              var prev = parent.find("input#" + $(this).data("previous"));

              if (prev.length) {
                $(prev).select();
              }
            } else if (
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              (e.keyCode >= 65 && e.keyCode <= 90) ||
              (e.keyCode >= 96 && e.keyCode <= 105) ||
              e.keyCode === 39
            ) {
              var next = parent.find("input#" + $(this).data("next"));
              if (!$.isNumeric(valNum)) {
                $(this).val("");
                return false;
              }

              if (next.length) {
                $(next).select();
              } else {
                if (parent.data("autosubmit")) {
                  parent.submit();
                }
              }
            }
          });
        });
    }
  };

  /* range slider one
  ------------------------------------------------------------------------------------- */
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
  /* range slider two
  ------------------------------------------------------------------------------------- */
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

  /* clear Item 
  ------------------------------------------------------------------------------------- */
  var clearItem = function () {
    $(".list-favorite").each(function () {
      var el = this.querySelector(".del-item");
      el.addEventListener("click", function (e) {
        el.closest(".list-favorite").style.display = "none";
      });
    });
  };
  /* block delete 
  ------------------------------------------------------------------------------------- */
  var dlBlock = function () {
    $(".list-favorite").on("click", function (event) {
      $(this).toggleClass("mr-lf");
      $(this).find(".del-item").toggleClass("show-del");
    });
  };

  /* active photo
  ------------------------------------------------------------------------------------- */
  var activePhoto = function () {
    $(".edit-photo").on("click", function () {
      $(this).toggleClass("active");
    });
  };
  /* back Page
  ------------------------------------------------------------------------------------- */
  var backPage = function () {
    $(".back-btn").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      window.history.go(-1);
    });
  };

  /* press toggles
  ------------------------------------------------------------------------------------- */
  var pressToggle = function () {
    $(".press-toggle").on("click", function () {
      $(this).toggleClass("active");
    });
  };
  /* clear Text
  ------------------------------------------------------------------------------------- */
  var clearText = function () {
    $(".icon-cancel").on("click", function () {
      $(".ip-field").val("");
    });
  };
  /* message
  ------------------------------------------------------------------------------------- */
  var handleMessage = function () {
    $(".btn-message").on("click", function () {
      var ipMessage = $(".ip-message");
      var messValue = ipMessage.val();
      var domMessage =
        '<div class="bubble-me">' + "<p>" + messValue + "</p>" + "</div>";
      if (messValue.length > 0) {
        var appendMess = $(".chat-area").append(domMessage);
      }

      window.scrollTo(0, document.body.scrollHeight);
      var clearMess = ipMessage.val("");
    });
  };
  /* gallery
  ------------------------------------------------------------------------------------- */
  var lightGalleryBox = function () {
    if ($("#lightgallery").length > 0) {
      lightGallery(document.getElementById("lightgallery"), {
        plugins: [lgZoom, lgThumbnail],
      });
    }
    if ($("#lightgallery2").length > 0) {
      lightGallery(document.getElementById("lightgallery2"), {
        plugins: [lgZoom, lgThumbnail],
      });
    }
  };
  /* custom select 
  ------------------------------------------------------------------------------------- */
  var cusSelect = function () {
    if ($(".cus-select, .lo-select, .time-select").length > 0) {
      $(".cus-select, .lo-select, .time-select").niceSelect();
    }
  };

  /* active Suggestions
  ------------------------------------------------------------------------------------- */
  var activeSuggest = function () {
    $(".active-suggest, .lo-select").click(function () {
      $(".active-suggest.active, .lo-select.active").removeClass("active");
      $(this).toggleClass("active");
    });

    $(".rate-suggest").click(function () {
      $(".rate-suggest.active").removeClass("active");
      $(this).toggleClass("active");
    });

    $(".time-select, .time-st").click(function () {
      $(".time-select.active, .time-st.active").removeClass("active");
      $(this).toggleClass("active");
    });
  };
  /* load more
  ------------------------------------------------------------------------------------- */
  var loadmore = function () {
    if ($("ul").hasClass("loadmore-item")) {
      $(".fl-item").slice(0, 3).show();
      $("#button-loadmore").on("click", function (e) {
        e.preventDefault();
        $(".fl-item:hidden").slice(0, 3).slideDown();
        if ($(".fl-item:hidden").length == 0) {
          $("#button-loadmore").hide();
        }
      });
    }
  };
  /* preloader 
  ------------------------------------------------------------------------------------- */
  var preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 500);
  };

  function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + 30 * 60 * 1000); /* 30 Minutes */
    var expires = "expires=" + d.toString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  /*
  ------------------------------------------------------------------------------------- */
  var themeSetting = function () {
    // var theme = getUrlParameter("color-theme");
    // console.log(theme);
    var isCookieSet = true;
    $('input[name="theme_color"]').on("click", function () {
      alert("hhh");
      $("body").attr("data-theme-color", this.value);
      if (isCookieSet) {
        setCookie("themeColor_value", this.value);
      }
    });
  };

  $(function () {
    showPass();
    otpInput();
    rangeOne();
    rangeTwo();
    clearItem();
    backPage();
    clearText();
    handleMessage();
    lightGalleryBox();
    cusSelect();
    dlBlock();
    pressToggle();
    activePhoto();
    activeSuggest();
    loadmore();
    preloader();
    themeSetting();
  });
})(jQuery);
