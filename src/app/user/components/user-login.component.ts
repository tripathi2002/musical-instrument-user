import { Component } from '@angular/core';
import { UserLoginFormate } from '../data/user-login-data';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../data/user';
import { Router } from '@angular/router';
import { error, loading, success } from 'src/app/data/data';
import { actions } from 'src/app/data/class';
import { SharedService } from 'src/app/data/services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: '../pages/user-create.component.html',
  styleUrls: ['../styles/user-create.component.scss', '../../data/styles/form.scss'],
  animations: [loading, success, error]
})
export class UserLoginComponent extends actions {

  userbase = UserLoginFormate;

  constructor(private fb: FormBuilder,
    private us: UserService,
    private router: Router,
    private sharedService: SharedService,
  ) {
    super('LogIn');
  }


  data = {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  }

  formData = this.fb.group(this.data);

  onSubmit(): void {
    if(this.formData.invalid) {
      this.trueError('enter correct values')
    }
    console.log(this.formData.value);
    console.log(this.formData.valid);
    this.trueLoading();
    this.us.LoginUser(this.formData.value)
    .subscribe(
      (data: User)=>{
        this.trueSuccess('Login Successfully');
        this.timelate();
        if(data.token){
          for(const key in data){
            localStorage.setItem(key, data[key]);
          }
          this.sharedService.updateHeaderData();
        }
          setTimeout(function () {
            this.router.navigateByUrl('')
          }.bind(this), 3000);
          
          
      },(err)=>{
        this.trueError(err.error.message);
        this.timelate();
      },()=>{
        this.formData = this.fb.group(this.data);
    })

  }

  
  onSubmitCopy(){
    console.log("hello");
    console.error(this.formData.invalid) 
    this.trueError('enter correct values')
    // console.log(this.formData.get(name))
  }  

}
