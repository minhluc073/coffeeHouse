window.console =
  window.console ||
  (function () {
    var e = {};
    e.log =
      e.warn =
      e.debug =
      e.info =
      e.error =
      e.time =
      e.dir =
      e.profile =
      e.clear =
      e.exception =
      e.trace =
      e.assert =
        function () {};
    return e;
  })();

$(document).ready(function () {
  var e =
    '<div class="modal fade action-sheet full" id="color">' +
    '<div class="modal-dialog" role="document">' +
    '<ul class="modal-content modal-themes-color">' +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="primary_color" name="theme_color" value="theme-primary">' +
    '<label for="primary_color"></label>' +
    '<span class="fw-5">Primary</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="green_color" name="theme_color" value="theme-green">' +
    '<label for="green_color"></label>' +
    '<span class="fw-5">Green</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="orange_color" name="theme_color" value="theme-orange">' +
    '<label for="orange_color"></label>' +
    '<span class="fw-5">Orange</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="blue_color_1" name="theme_color" value="theme-blue">' +
    '<label for="blue_color_1"></label>' +
    '<span class="fw-5">Blue</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="blue_color_2" name="theme_color" value="theme-blue-2">' +
    '<label for="blue_color_2"></label>' +
    '<span class="fw-5">Blue</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="orange_color_2" name="theme_color" value="theme-orange-2">' +
    '<label for="orange_color_2"></label>' +
    '<span class="fw-5">Orange</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="color_pink" name="theme_color" value="theme-pink">' +
    '<label for="color_pink"></label>' +
    '<span class="fw-5">Pink</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="orange_color_3" name="theme_color" value="theme-orange-3">' +
    '<label for="orange_color_3"></label>' +
    '<span class="fw-5">Orange</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="purple_color" name="theme_color" value="theme-purple">' +
    '<label for="purple_color"></label>' +
    '<span class="fw-5">Purple</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="green_color_2" name="theme_color" value="theme-green-2">' +
    '<label for="green_color_2"></label>' +
    '<span class="fw-5">Green</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="blue_color_3" name="theme_color" value="theme-blue-3">' +
    '<label for="blue_color_3"></label>' +
    '<span class="fw-5">Blue</span>' +
    "</li>" +
    '<li class="color-item">' +
    '<input type="radio" class="check-color" id="dark_color" name="theme_color" value="theme-dark">' +
    '<label for="dark_color"></label>' +
    '<span class="fw-5">Dark</span>' +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</div>";
  $("body").append(e);
});


