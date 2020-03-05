function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
function load() {
    //document.getElementById("loadbox").style.display = "none";
    document.getElementsByClassName("morebox").style.display = "none";
}

function loadmore() {
    document.getElementById("loadbox").style.display = "block";
    document.getElementById("loadMore").style.display = "none";
}

//$(document).ready(function () {
//    $(".morebox").slice(0, 3).show();
//    if ($(".general:hidden").length != 0) {
//        $("#loadMore").show();
//    }
//    $("#loadMore").on('click', function (e) {
//        e.preventDefault();
//        $(".morebox:hidden").slice(0, 6).slideDown();
//        if ($(".morebox:hidden").length == 0) {
//            $("#loadMore").fadeOut('slow');
//        }
//    });
//});