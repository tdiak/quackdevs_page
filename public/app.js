'use strict';

var app = angular.module('myPage', [
    'ngRoute',
    'pascalprecht.translate'
]).config(function($routeProvider, $translateProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'mainCtr'
        })
        .when('/offer',{
            templateUrl: 'app/offer/offer.html',
            controller: 'offerCtr'
        });

    $translateProvider.translations('en', {
        OFFER: 'Offer',
        PROJECTS: 'Projects',
        ABOUT: 'About me',
        EXPERIENCE: 'Experience',
        CONTACT: 'Contact'
    });

    $translateProvider.translations('pl', {
        OFFER: 'Oferta',
        PROJECTS: 'Realizacje',
        ABOUT: 'O mnie',
        EXPERIENCE: 'Doświadczenie',
        CONTACT: 'Kontakt'
    });

    $translateProvider.preferredLanguage('pl');

}).run(function () {


}); 
