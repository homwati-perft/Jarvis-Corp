function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
    $('#loadbox article:lt(4)').show();
    $('#loadMore').on("click",function () {
        $('#loadbox article').show();
        $(this).hide();
    });
});