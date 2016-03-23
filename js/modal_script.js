// .modal-backdrop classes

$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

//modal red
$(".red").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("color_red");
  }, 0);
});

//modal green
$(".green").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("color_green");
  }, 0);
});

//modal blue
$(".blue").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("color_blue");
  }, 0);
});

//modal yellow
$(".yellow").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("color_yellow");
  }, 0);
});

$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});