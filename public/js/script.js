$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Aivaras Razvodovskis"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["-Naujas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".pagrindai", {
        strings: ["Pagrindai"],
        typeSpeed: 1000,
        backSpeed: 1000,
        loop: true
    });
    var typed = new Typed(".pagrindai2", {
        strings: ["Pagrindai"],
        typeSpeed: 500,
        backSpeed: 500,
        loop: true
    });
    var typed = new Typed(".pagrindai3", {
        strings: ["Pagrindai"],
        typeSpeed: 250,
        backSpeed: 250,
        loop: true
    });
    var typed = new Typed(".pagrindai4", {
        strings: ["Pagrindai"],
        typeSpeed: 125,
        backSpeed: 125,
        loop: true
    });
    var typed = new Typed(".pagrindai5", {
        strings: ["Pagrindai"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".pagrindai6", {
        strings: ["Pagrindai"],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true
    });
});