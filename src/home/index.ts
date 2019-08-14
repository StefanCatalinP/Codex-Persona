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
          this.importUsers();
        }
      }

    // imports the users from our static JSON into local/session/cookies
    importUsers() {

        localStorage.setItem('Users', JSON.stringify(this.users));
        sessionStorage.setItem('Users', JSON.stringify(this.users));
        create_cookie('Users', this.users);


        function create_cookie(cname, cvalue) {

            document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + ";path=/";
        }

    }

    navigateLogin() {
        this.router.navigateToRoute("login");
    }

    navigateRegister() {
        this.router.navigateToRoute("register");
    }


}