import { Router } from 'aurelia-router';
import { WebAPI } from '../web-api';
import { autoinject } from 'aurelia-framework';

let attempt = 3;

interface User {
    id: number;
    name: string;
    password: string;
    confirmPassword: string;
    surName: string;
    email: string;

}

@autoinject
export class login {

    routerConfig;
    user: User;



    constructor(private router: Router, private api: WebAPI) {


    }

    login() {



        const users = JSON.parse(localStorage.getItem('Users'));
        const user = users.find(x => x.email == this.user.email);


        if (attempt !== 0) {

            if (users != null) {
                if (this.user.password == this.user.confirmPassword) {
                    if (this.user.email == user.email && this.user.password == user.password) {
                        alert('Success! - you will be redirected towards the homepage')
                        this.router.navigateToRoute("home");
                    } else {
                        alert('Failure! - incorrect login information' + '\n' +
                            'Attempts left - ' + attempt + ';');
                        attempt--;
                    }

                } else {
                    alert('Passwords did not match!' + '\n' +
                        'Attempts left - ' + attempt + ';');
                    attempt--;

                }

            } else {
                attempt--;
                alert('Login system error! - retry later' + '\n' +
                    'Attempts left - ' + attempt + ';');
            }

        } else {
            alert('Too many login attemps! Login disabled retry later')

        }
    }

    canLogin() {

        if (attempt !== 0 ) {
            return true;
        } else {
            return false;
        }
    }


}