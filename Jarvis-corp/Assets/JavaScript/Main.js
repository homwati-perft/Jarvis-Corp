function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
    $("#test .tab-pane").hide();
    $("#test .tab-pane:first").show();


    


    $('#servicesLink').hide();
    $('#servicesLink:lt(0)').show();
    $('#loadServices').on("click", function () {
        $('#servicesLink').show();
        $(this).hide();
    });
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


function OpenLeader(id) {
    console.log("hhgjhhj>>>>>>>>>>>>", id);
    document.getElementById("Profile-Wrap-" + id).style.display = "block";
}
function CloseLeader(id) {
    document.getElementById("Profile-Wrap-" + id).style.display = "none";
}

function communityPartner(partner) {

    var com = document.getElementsByClassName("partners-overlay");
    var abc = function ABC(item) {
        if (item.id == "part-" + partner) {
            document.getElementById(item.id).style.display = "contents";
        } else {
            document.getElementById(item.id).style.display = "none";
        }
    }
    
    Array.prototype.forEach.call(com, abc);
}


function Close(id) {
    console.log("vfdfdhsgfdhghfdjhfhdsgfh",id)
    document.getElementById("part-"+id).style.display = "none";
}


