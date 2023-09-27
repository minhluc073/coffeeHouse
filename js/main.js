/*
 * show pass
 * image select
 * otp input
 * check radio
 * range slider
 * btnQuantity
 * press heart
 * Clear all
 * Clear Item History
 * Clear Checkbox
 * Suggestions
 * active Suggestions
 * fixed body popup
 * back Page
 * click sidebar
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
  /* check radio
  ------------------------------------------------------------------------------------- */
  var checkRadio = function () {
    $(".check-ip-bg:checked").parent().addClass("check");
    $(".check-ip-bg").on("click", function () {
      $(".check-ip-bg:not(:checked)").parent().removeClass("check");
      $(".check-ip-bg:checked").parent().addClass("check");
    });
  };

  /* range slider
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
  // keypress slider  ============
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

  /* btnQuantity
  ------------------------------------------------------------------------------------- */
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }

      $input.val(value);
    });
    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value + 1;
      }

      $input.val(value);
    });
  };
  /* press heart
  ------------------------------------------------------------------------------------- */
  var pressHeart = function () {
    $(".heart").on("click", function () {
      $(this).toggleClass("active");
    });
  };
  /* Clear all
  ------------------------------------------------------------------------------------- */
  var clearAll = function () {
    $(".clear-all").on("click", function () {
      $(".history").css("display", "none");
    });
  };
  /* Clear Item History
  ------------------------------------------------------------------------------------- */
  var clearItem = function () {
    $(".list-favorite").each(function () {
      var el = this.querySelector(".del-item");
      el.addEventListener("click", function (e) {
        el.closest(".list-favorite").style.display = "none";
      });
    });
  };

  var dlBlock = function () {
    $(".list-favorite").on("click", function () {
      $(this).parent(".box-favorite").find(".show-del").removeClass("show-del");
      $(this).find(".del-item").addClass("show-del");
    });
  };
  // $(document).on("click", function (e) {
  //   if (!$(event.target).closest(".del-item").length) {
  //     $(".del-item").removeClass("show-del");
  //   }
  // });
  /* Clear Checkbox 
  ------------------------------------------------------------------------------------- */
  var clearCheckbox = function () {
    $(".clear-checkbox").on("click", function () {
      $(".group-checkbox").find("input").prop("checked", false);
    });

    $(".clear-checkbox").on("click", function (e) {
      e.preventDefault();
    });
  };

  /* Suggestions
  ------------------------------------------------------------------------------------- */
  var Suggest = function () {
    $(".suggest").on("click", function () {
      var val = $(this).text();
      $(".suggest_value").val(val);
    });
  };
  /* active Suggestions
  ------------------------------------------------------------------------------------- */
  var activeSuggest = function () {
    $(".rate-suggest").click(function () {
      $(".rate-suggest.active").removeClass("active");
      $(this).addClass("active");
    });
  };
  /* fixed body popup
  ------------------------------------------------------------------------------------- */
  var fixedBody = function () {
    $(".btn-sidebar").on("click", function () {
      $("body").addClass("fixed-body");
    });
    $(".clear-fixed").on("click", function () {
      $("body").removeClass("fixed-body");
    });
  };
  /* press heart
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

  /* clear Text
  ------------------------------------------------------------------------------------- */
  const clearText = function () {
    $(".icon-close").on("click", function () {
      $(".ip-field").val("");
    });
  };
  /* message
  ------------------------------------------------------------------------------------- */
  var handleMessage = function () {
    $(".btn-message").on("click", function () {
      var ipMessage = $(".ip-message");
      var messValue = ipMessage.val();
      //   var chatEmojiArea = $(".append-media").html();

      //   var current = new Date();
      //   var ampm = current.getHours() >= 12 ? "pm" : "am";
      //   var actualTime =
      //     (current.getHours() % 12) + ":" + current.getMinutes() + " " + ampm;

      var domMessage =
        '<div class="bubble-me">' + "<p>" + messValue + "</p>" + "</div>";
      // '<div class="message-time">' +
      // actualTime +
      // "</div>" +
      // "</div>" +
      // "</div>";

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
  /* dropdown select 
  ------------------------------------------------------------------------------------- */
  var cusSelect = function () {
    if ($(".cus-select").length > 0) {
      $(".cus-select").niceSelect();
    }
  };

  /* preloader 2
  ------------------------------------------------------------------------------------- */
  const preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 100);
  };

  $(function () {
    showPass();
    selectImages();
    otpInput();
    checkRadio();
    rangeOne();
    rangeTwo();
    btnQuantity();
    pressHeart();
    clearAll();
    clearItem();
    clearCheckbox();
    Suggest();
    backPage();
    clearText();
    activeSuggest();
    handleMessage();
    lightGalleryBox();
    cusSelect();
    fixedBody();
    dlBlock();
    activePhoto();
    preloader();
  });
})(jQuery);
