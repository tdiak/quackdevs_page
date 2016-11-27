app.controller('newOfferCtr', function($scope) {
    $scope.offer= {
        'name': '',
        'email': '',
        'technology': '',
        'msg': '',
        'question': '',
        'min_price': '',
        'max_price': ''
    };

    $scope.technologies = [
        {
            'value': 'Python/Backend',
            'label': 'Python/Backend'
        },
        {
            'value': 'Javascript/Web',
            'label': 'Javascript/Web'
        },
        {
            'value': 'Python/Linux',
            'label': 'Python/Linux'
        },
        {
            'value': 'PHP/Symfony',
            'label': 'PHP/Symfony'
        },
        {
            'value': 'Mobile/Android',
            'label': 'Mobile/Android'
        },
        {
            'value': 'Mobile/IOS',
            'label': 'Mobile/IOS'
        }
    ];
});