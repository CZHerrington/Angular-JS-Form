import angular from 'angular';

// Import controllers
import { FormController } from './controllers/form.controller';

// Import constants
import { serverConstant } from './server.constant';

angular
  .module('app', [])
  .constant('SERVER', serverConstant)
  .controller('FormController', FormController);
