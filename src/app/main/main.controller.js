export class MainController {
  constructor ($timeout, $state, $mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$state = $state;
  }

  isAutoRenewBtnDisabled() {
    return this.$state.current.name === 'home' || this.$state.current.name === 'home.start';
  }

  showAbout(ev) {
    var useFullScreen = true;

    this.$mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/components/aboutDialog/dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,
      openFrom: {
        top: -50,
        width: 30,
        height: 80
      },
      closeTo: {
        left: 0
      }
    });
  }
}

function DialogController ($scope, $mdDialog) {
  "ngInject";

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
