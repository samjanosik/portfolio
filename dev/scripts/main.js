import { WOW } from 'wowjs';
import $ from 'jquery';
import {smoothScroll} from 'jquery-smooth-scroll';


$(function () {
    // initialize smoothScroll on all nav links
    $('nav a').smoothScroll({
        speed: 1000
    });

    // initialize wowjs
    new WOW().init();

    // animate hamburger menu on open and close, when toggle is clicked and when nav links are clicked (to close)
    // when nav is open, prevent scroll of body
    // slide nav in from above
    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('open');
        $('body').toggleClass('noScroll');
        $('.mainNav ul').toggleClass('onScreen')
    });

    $('.mainNav a').on('click', function () {
        $('.hamburger').removeClass('open');
        $('body').removeClass('noScroll');
        $('.mainNav ul').removeClass('onScreen');
    });




});
