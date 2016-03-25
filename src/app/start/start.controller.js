export class StartController {
  constructor () {
    'ngInject';

    this.year = (new Date()).getFullYear();
  }
}
