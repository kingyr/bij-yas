/**
 * Created by bijannaimi on 7/13/15.
 */
var main = function() {
    /* Push the body and the nav over by 285px over */
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "285px"
        }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-285px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
    });
};


$(document).ready(main);

var d = document.getElementById('direct');
d.style.position = "absolute";
d.style.left = "0px";
d.style.top = document.getElementById('jumbo').style.top

var j = document.getElementById('jumbo');
j.height = d.style.top;