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
    $('.hamburger, .mainNav a').on('click', function () {
        $('.hamburger').toggleClass('open');
        $('body').toggleClass('noScroll');
    });

    // slide nav down when hamburger clicked, and close when hamburger or any nav link is clicked
    $('.hamburger, .mainNav a').on('click', function () {
        $('.mainNav ul').slideToggle();
    });
});
