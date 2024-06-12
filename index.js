$(document).ready(function () {
  $("#display").val("0");
});

function numberClick(number) {
  var display = $("#display").val();
  if (display == "0") {
    display = number;
  } else {
    display += number;
  }
  $("#display").val(display);
}
