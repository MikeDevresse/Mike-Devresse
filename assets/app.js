/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

import './js/full-page-scroll';

new fullScroll({
    mainElement: "container",
    displayDots: true,
    dotsPosition: "right",
    animateTime: 0.5,
    animateFunction: "ease",
});

import './js/particles.min';
import * as particleData from './particles.json'

particlesJS("particles-js",particleData);

/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/
