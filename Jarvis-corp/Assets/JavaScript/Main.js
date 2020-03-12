function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
    $("#test .tab-pane").hide();
    $("#test .tab-pane:first").show();

    $('#loadbox article:lt(4)').show();
    $('#loadMore').on("click", function () {
        $('#loadbox article').show();
        $(this).hide();
    });
    
});
function onLoad() {
    console.log("finally calleds")
}
function Vision(clicked) {
    var els = document.getElementsByClassName("tab-pane");
    
    var myFunc = function myFunction(item) {
        if (item.id == "comp-" + clicked) {
           
            document.getElementById(item.id).style.display = "block";
        } else {
            
            document.getElementById(item.id).style.display = "none";
        }
    }
    Array.prototype.forEach.call(els, myFunc);
    
}

//$(document).ready(function () {
//    $('#loadbox article:lt(4)').show();
//    $('#loadMore').on("click", function () {
//        $('#loadbox article').show();
//        $(this).hide();
//    });
//});

function OpenLeader(id) {
    console.log("hhgjhhj>>>>>>>>>>>>", id);
    document.getElementById("Profile-Wrap-" + id).style.display = "block";
}
function CloseLeader(id) {
    document.getElementById("Profile-Wrap-" + id).style.display = "none";
}
