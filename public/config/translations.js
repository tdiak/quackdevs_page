app.config(function($translateProvider) {
    
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

    $translateProvider.preferredLanguage('en');

});
