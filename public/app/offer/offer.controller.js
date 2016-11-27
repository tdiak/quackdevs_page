app.controller('offerCtr', function($scope, $mdDialog) {
    $scope.message = 'Oferta';
    $scope.skills = [
        {
            'name': 'Python',
            'technologies': [
                {
                    'name': 'Django',
                    'short_description': 'Aplikacje Backendowes',
                    'description': [
                        'Zarówno duże długoletnie projekty jak i małe systemy',
                        'Posiadam doświadczenie w utrzymywaniu i rozwijaniu aplikacji w starszych wersjach jak i bieżących',
                        'Kod oparty o testy jednostkowe',
                        'Współpraca z aplikacjami mobilnymi i Single Page Application z wykorzystaniem moduły Django Rest Framework',
                        'Projektowanie i wdrażanie aplikacji z systemem zarządzania treśćią DjangoCMS'
                    ]
                },
                {
                    'name': 'Flask',
                    'short_description': 'Idealne rozwiązanie dla REST API',
                    'description': [
                        'Doświadczenie komercyjne w większych aplikacjach',
                        'Zazwyczaj w mniejszych aplikacjach backendowych, nie zalecam wykorzystania w sporych systemach',
                        'Rest API z wykorzystaniem FlaskRestFull',
                        'Jako ORM preferowane SqlAlchemy',
                        'Idealne rozwiązanie backendowe dla aplikacji w stylu SinglePageApplication'
                    ]
                },
                {
                    'name': 'Tornado',
                    'short_description': 'Asynchronous is power',
                    'description': '...'
                }
            ]
        },
        {
            'name': 'Web',
            'technologies': [
                {
                    'name': 'Angular',
                    'short_description': 'Backend applications',
                    'description': '...'
                },
                {
                    'name': 'React',
                    'short_description': 'Perfect solution for APIs',
                    'description': '...'
                },
                {
                    'name': 'HTML',
                    'short_description': 'Asynchronous is power',
                    'description': '...'
                }
            ]
        }
    ];


    $scope.showAdvanced = function(ev, item) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/offer/dialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            locals: {
                'technology': item
            },
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog, technology) {
        $scope.technology = technology;
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
});