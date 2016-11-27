app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../app/main/main.html',
            controller: 'mainCtr'
        })
        .when('/offer',{
            templateUrl: '../app/offer/offer.html',
            controller: 'offerCtr'
        })
        .when('/downloads', {
            templateUrl: '../app/downloads/downloads.html',
            controller: 'downloadsCtr'
        })
        .when('/about', {
            templateUrl: '../app/about/about.html',
            controller: 'aboutCtr'
        })
        .when('/contact', {
            templateUrl: '../app/contact/contact.html',
            controller: 'contactCtr'
        })
        .when('/experience', {
            templateUrl: '../app/experience/experience.html',
            controller: 'experienceCtr'
        })
        .when('/new-offer', {
            templateUrl: '../app/new_offer/new_offer.html',
            controller: 'newOfferCtr'
        });
});