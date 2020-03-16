function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
    $("#test .tab-pane").hide();
    $("#test .tab-pane:first").show();

    $('#loadbox article').hide();
    $('#loadbox article:lt(4)').show();
    $('#loadMore').on("click", function () {
        $('#loadbox article').show();
        $(this).hide();
    });
    
});
function onLoad() {
    console.log("finally calleds")
}
function Test(clicked) {
    console.log("test function called")
    var els = document.getElementsByClassName("tab-pane");
    var myFunc = function myFunction(item) {
        if (item.id == "comp-" + clicked) {
            console.log("item.id>>>>", item.id)
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

function communityPartner(partner) {
    console.log("function called commmnjasafgjshvdhj")
    console.log(partner);
    var com = document.getElementsByClassName("partners-overlay");
    console.log("hello boys:-   ", com.id);
    var abc = function ABC(item) {
        var akojfo = document.getElementById(item.id);
       
    }
    Array.prototype.forEach.call(com, abc);
}


$(function () {
    //$('.partners-overlay').hide();
    $('.parter-link-click').on('click', function () {
        console.log("on click")
        $('.partners-overlay').slideToggle();
    });
});