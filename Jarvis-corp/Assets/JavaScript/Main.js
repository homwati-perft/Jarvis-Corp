function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

function abc() {
    alert("called");
    console.log("bdmsvdhsvdhsdhjgsdjh>>>>");
}

$(document).ready(function () {
    $("#test .tab-pane").hide();
    $("#test .tab-pane:first").show();
    
});
function onLoad() {
    console.log("finally calleds")
}
function Test(clicked) {
    console.log("dhgkjhdsgfhsghfgdkhsgfhkbvdsjfgkj")
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

