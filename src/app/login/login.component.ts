import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    login(username:string, password:string){
        let data ={
          username: username,
          password: password
        }

        // this.axiosClient.post(, data)
        fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
    }   
}
