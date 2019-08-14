import userData from '../static/userData.json';

let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let users = userData;

export class WebAPI {
  isRequesting = false;
  


  getUsers(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = users.map(x =>  { return {
          id:x.id,
          userName:x.userName,
          password:x.password,
          surName:x.surName,
          email:x.email
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }



}
