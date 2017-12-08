import { WOW } from 'wowjs';
import $ from 'jquery';
import {smoothScroll} from 'jquery-smooth-scroll';


$(function () {
    $('nav a').smoothScroll({
        speed: 1000
    });
    new WOW().init();
});
