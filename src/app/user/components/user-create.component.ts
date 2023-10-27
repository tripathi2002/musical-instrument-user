import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { UserCreateFormate } from '../data/user-create-data';
import { User } from '../data/user';
import { UserService } from '../services/user.service';
import { Subject, debounce, debounceTime, map, throwError, timeout } from 'rxjs';
import { actions } from 'src/app/data/class';
import { error, loading, success } from 'src/app/data/data';


@Component({
  selector: 'app-user-create',
  templateUrl: '../pages/user-create.component.html',
  styleUrls: ['../styles/user-create.component.scss', '../../data/styles/form.scss'],
  animations:[ error, success, loading]
})
export class UserCreateComponent extends actions implements OnInit {

  userbase = UserCreateFormate;

  constructor(private fb: FormBuilder, private us: UserService){
    super('SignUp Page', true)
   }

  data = {
    firstName: [''],
    lastName:[''],
    email:[''],
    mobile:[''],
    password:[''],
    // confirmPassword:[''],
    // address:[''], 
    role:['user']
  }

  userDetails = this.fb.group(this.data) 

  onSubmit(): void {
    this.trueLoading();
    this.us.createUser(this.userDetails.value)
    .subscribe(
      (data)=>{
        this.trueSuccess("Created User");
        this.message='Congratulation!!';
        setTimeout(function () {
          this.router.navigateByUrl('user/login')
        }.bind(this), 3000);
      },(err)=>{
        this.trueError(err.error.message);
        this.timelate();
      },()=>{
        this.userDetails = this.fb.group(this.data);
    })

  }

  ngOnInit(): void {
    
  }

}
