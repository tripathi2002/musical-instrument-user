import { Component } from '@angular/core';
import { UserLogin } from '../data/user-login-data';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../data/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserLoginComponent {
  
  message:string= '';
  isError: boolean = false;
  isLoading: boolean = false;
  title: string = ' SignIn'
  toggle=false;
  userbase = UserLogin;

  constructor(private fb: FormBuilder,
     private us: UserService,
     private router: Router
    ){ }

  
  data = {
    email:[''],
    password:[''],
  }

  userDetails = this.fb.group(this.data);

  onSubmit(): void {
    this.isError= false;
    this.isLoading=true;
    this.us.LoginUser(this.userDetails.value)
    .subscribe(
      (data: User)=>{
        this.isLoading=false;
        this.isError= false;
        // console.log(data);
        if(data.token)
          for(const key in data){
            localStorage.setItem(key, data[key]);
          }
          
        setTimeout(function () {
          this.router.navigateByUrl('dashboard')
        }.bind(this), 3000);



      },(error)=>{
        this.isLoading=false;
        this.isError=true;
        console.log(error);
        this.message = "Unknown Error";
        this.isError= true;
      },()=>{
        console.log("success");
    })

    this.userDetails = this.fb.group(this.data);
  }

}
