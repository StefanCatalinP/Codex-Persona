import { Router } from 'aurelia-router';
import { WebAPI } from '../web-api';
import { autoinject } from 'aurelia-framework';

interface User {
    id: number;
    userName: string;
    password: string;
    surName: string;
    email: string;

}



@autoinject
export class Index {
    users;
    user: User;

    constructor(private router: Router, private api: WebAPI) {


    }

    public message: string = 'Welcome to Codex-Persona!';





      async activate() {
        const users = await this.api.getUsers();
        if (users) {
          this.users = users;
          if(localStorage.length == 0){
            console.log('Users have been loaded into localstorage')
            this.importUsers(); 
          } else {
            console.log('Users already loaded into localstorage')
          }

        }
      }

    // imports the users from our static JSON into local/session/cookies
    importUsers() {

        localStorage.setItem('Users', JSON.stringify(this.users));

    }

    navigateLogin() {
        this.router.navigateToRoute("login");
    }

    navigateRegister() {
        this.router.navigateToRoute("register");
    }


}