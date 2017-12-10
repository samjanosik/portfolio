import { WOW } from 'wowjs';
import $ from 'jquery';
import {smoothScroll} from 'jquery-smooth-scroll';


$(function () {
    $('nav a').smoothScroll({
        speed: 1000
    });
    new WOW().init();

    $('.hamburger, .mainNav a').on('click', function () {
        $('.hamburger').toggleClass('open');
    });

    $('.hamburger, .mainNav a').on('click', function () {
        $('.mainNav ul').slideToggle();
    });
});
