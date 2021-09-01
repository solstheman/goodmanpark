//switch to about me
$(function () {
  $(".home").on("click", function (e) {
    e.preventDefault();
    $(".main_content").load("home.html");
    $(".contact").removeClass("active");
    $(".home").addClass("active");
  });
});

$(function () {
  $(".contact").on("click", function (e) {
    e.preventDefault();
    $(".main_content").load("home.html");
    $(".home").removeClass("active");
    $(".contact").addClass("active");
  });
});
