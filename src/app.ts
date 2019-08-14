import {RouterConfiguration, Router} from 'aurelia-router';
import { WebAPI } from './web-api';
import {PLATFORM} from 'aurelia-framework';



export class App {

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Codex-Persona';
    config.map([
      { route: ['','index'], moduleId: PLATFORM.moduleName('./home/index'), nav: true, name:'index', title: 'index'},
      { route: 'login',     moduleId: PLATFORM.moduleName('./home/login'), name:'login' },
      { route: 'register',  moduleId: PLATFORM.moduleName('./home/register'), name:'register' },  
      { route: 'home',  moduleId: PLATFORM.moduleName('./home/home'), name:'home' }   

    ]);

    this.router = router;
  }

}
