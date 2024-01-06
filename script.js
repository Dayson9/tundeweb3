const navbar = document.querySelector("#navbar")
var nav_is_opened = false;


$(document).ready(()=>{
const nav= $("#navbar");
nav.click(()=>{
$("#ic").slideToggle();

if(nav_is_opened){
navbar.className= "fa fa-bars w3-xlarge w3-right blue"
nav_is_opened = false;
} else {
navbar.className= "fa fa-times w3-xlarge w3-right blue"
nav_is_opened = true;
}
})


$.fn.isInView = function(){
    var top_of_element = this.offset().top;
    var bottom_of_element = this.offset().top + this.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    return true;
    }else{
     return false;
    }
}

$(window).scroll(() =>{
if($("#about").isInView()){

}
})
})

