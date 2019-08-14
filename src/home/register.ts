import { Router } from 'aurelia-router';
import { WebAPI } from '../web-api';
import { autoinject } from 'aurelia-framework';


interface User {
    id: number;
    name: string;
    password: string;
    confirmPassword: string;
    surName: string;
    email: string;

}


@autoinject
export class register {
 
    routerConfig;
    users: any;
    user: User; 
    
    constructor(private router: Router, private api: WebAPI) {


    }

    activate(params){

            this.users = JSON.parse(localStorage.getItem('Users'));
}


    register()
    {

        const initialUsers  = this.users || [];
        const registeredUsers = {
            'id' : "getId()",
            'userName': this.user.name,
            'password' : this.user.password,
            'surName' : this.user.surName,
            'email' : this.user.email

        };

        initialUsers.push(registeredUsers);
         
         localStorage.setItem('Users', JSON.stringify(initialUsers));
         sessionStorage.setItem('Users', JSON.stringify(initialUsers));
         this.create_cookie('Users', initialUsers);
         this.router.navigateToRoute("login");

    }

    create_cookie(cname, cvalue) {

        document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + ";path=/";
      }
}