app.config(function($translateProvider) {

    $translateProvider.translations('en', {
        OFFER: 'Offer',
        PROJECTS: 'Projects',
        ABOUT: 'About me',
        EXPERIENCE: 'Experience',
        CONTACT: 'Contact',
        SHOW: 'Show',
        Other: 'Other'
    });

    $translateProvider.translations('pl', {
        OFFER: 'Oferta',
        PROJECTS: 'Realizacje',
        ABOUT: 'O mnie',
        EXPERIENCE: 'Doświadczenie',
        CONTACT: 'Kontakt',
        SHOW: 'Pokaż',
        Other: 'Inne'
    });

    $translateProvider.preferredLanguage('en');

});
