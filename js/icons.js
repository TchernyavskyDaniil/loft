"use strict";

var i = 0;
var blog = document.querySelectorAll(".blog__item");
console.log(blog.length);

$(document).ready(function () {
    $(".watch__checkbox").on("click", (function (){
        var hidden = $(this).closest(".blog__item");
        if (this.checked) {
            i++;
            hidden.find(".blog__animation").removeClass("visually-hidden");
            setTimeout( function () {
                hidden.addClass("visually-opacity");
            }, 1000);
            var check = this;
            setTimeout( function() {
                $(check).closest(".blog__item").hide();
            }, 2000);
            console.log(i);
            console.log(blog.length);
            if (i == (blog.length)) {
                $(".page-main__blog").addClass("visually-opacity");
                setTimeout( function() {
                    $(".page-main__complete").removeClass("visually-hidden");
                }, 1400);
            };
        };
    }));
});

