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
 * touchSpin
 * theme setting color
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
    $(".show-pass3").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field3").attr("type") == "password") {
        $(".password-field3").attr("type", "text");
      } else if ($(".password-field3").attr("type") == "text") {
        $(".password-field3").attr("type", "password");
      }
    });
    $(".show-pass4").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field4").attr("type") == "password") {
        $(".password-field4").attr("type", "text");
      } else if ($(".password-field4").attr("type") == "text") {
        $(".password-field4").attr("type", "password");
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

  /* delete Item 
  ------------------------------------------------------------------------------------- */
  var delItem = function () {
    if ($("div").hasClass("wd-list-item")) {
      $(".del-item").on("click", function () {
        this.closest(".wd-list-item").remove();
      });
    }
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
      var currentTime = new Date();
      var hours = currentTime.getHours() >= 12 ? "PM" : "AM";
      var realTime =
        (currentTime.getHours() % 12) +
        ":" +
        currentTime.getMinutes() +
        " " +
        hours;

      var domMessage =
        '<div class="bubble bubble-me">' +
        '<div class="content">' +
        "<p>" +
        messValue +
        "</p>" +
        '<span class="time">' +
        realTime +
        "</span>" +
        "</div>" +
        "</div>";

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
    if ($("#lightgallery3").length > 0) {
      lightGallery(document.getElementById("lightgallery3"), {
        plugins: [lgZoom, lgThumbnail],
      });
    }
  };


  /* image select
  ------------------------------------------------------------------------------------- */
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* active Suggestions
  ------------------------------------------------------------------------------------- */
  var activeSuggest = function () {
    $(".press-toggle").on("click", function () {
      $(this).toggleClass("active");
    });

    $(".active-suggest").click(function () {
      $(".active-suggest.active").removeClass("active");
      $(this).toggleClass("active");
    });

    $(".active-suggest2").click(function () {
      $(".active-suggest2.active").removeClass("active");
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

  /* touch spin
  ----------------------------------------------------------------------------------------- */
  var touchSpin = function () {
    if ($(".stepper").length > 0) {
      $(".stepper").TouchSpin();
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

  /* theme setting color
  ------------------------------------------------------------------------------------- */
  var themeSettingColor = function () {
    $('input[name="theme_color"]').on("click", function () {
      $("body").attr("data-theme-color", this.value);
      localStorage.setItem("themeColor", this.value);
    });
  };
  /* toggle theme
  ------------------------------------------------------------------------------------- */
  var toggleTheme = function () {
    $("body").toggleClass(localStorage.toggled);
    var toggle = $(".toggle-theme");

    toggle.on("click", function () {
      if (localStorage.toggled != "dark-theme") {
        $("body").toggleClass("dark-theme", true);
        localStorage.toggled = "dark-theme";
        $(".theme-dark-icon").show();
        $(".theme-light-icon").hide();
        toggle.prop("checked", true);
      } else {
        $("body").toggleClass("dark-theme", false);
        localStorage.toggled = "";
        $(".theme-dark-icon").hide();
        $(".theme-light-icon").show();
        toggle.prop("checked", false);
      }
    });
  };
  /* set toggle theme
  ------------------------------------------------------------------------------------- */
  var setToggleTheme = function () {
    var theme = localStorage.toggled;
    if (theme) {
      $(".theme-dark-icon").show();
      $(".theme-light-icon").hide();
    } else {
      $(".theme-dark-icon").hide();
      $(".theme-light-icon").show();
    }
  };
  /* set color theme
  ------------------------------------------------------------------------------------- */
  var setLocalColor = function () {
    var themeColor = localStorage.getItem("themeColor");
    if (themeColor) {
      $("body").attr("data-theme-color", themeColor);
    } else {
      $("body").attr("data-theme-color", "theme-primary");
    }
  };
  /* tree view
  ------------------------------------------------------------------------------------- */
  var treeView = function () {
    if ($("#treeview1").length > 0) {
      $("#treeview1").jstree({
        plugins: ["dnd", "types"],
      });
    }
    if ($("#treeview2").length > 0) {
      $("#treeview2").jstree({
        plugins: ["dnd", "wholerow", "checkbox", "types"],
      });
    }
  };

  $(function () {
    showPass();
    otpInput();
    delItem();
    backPage();
    clearText();
    handleMessage();
    lightGalleryBox();
    activeSuggest();
    selectImages();
    loadmore();
    touchSpin();
    treeView();
    preloader();
    setLocalColor();
    themeSettingColor();
    toggleTheme();
    setToggleTheme();
   
  });
})(jQuery);
