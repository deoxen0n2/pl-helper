export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('home.start', {
      url: '/start',
      templateUrl: 'app/start/start.html',
      controller: 'StartController',
      controllerAs: 'start'
    })
    .state('home.frontend', {
      url: '/frontend',
      templateUrl: 'app/components/useRuby/use_ruby.html',
    })
    .state('home.backend', {
      url: '/backend',
      templateUrl: 'app/components/useRuby/use_ruby.html',
    })
    .state('home.fullstack', {
      url: '/fullstack',
      templateUrl: 'app/components/useRuby/use_ruby.html',
    });

  $urlRouterProvider.otherwise('/');
}
