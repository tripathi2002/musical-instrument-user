import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'
import { UserCreateFormate } from '../data/user-create-data';
import { User } from '../data/user';
import { UserService } from '../services/user.service';
import { Subject, debounce, debounceTime, map, throwError, timeout } from 'rxjs';
import { actions } from 'src/app/data/class';
import { error, loading, success } from 'src/app/data/data';


@Component({
  selector: 'app-user-create',
  // templateUrl: '../pages/user-detail.component.html',
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
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lastName:['', [Validators.pattern('[a-zA-Z ]*')]],
    email:['', [Validators.required, Validators.email]],
    mobile:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    password:['',[Validators.required, Validators.minLength(8)]],
    confirmPassword:['', [Validators.required]],
    // address:[''], 
    role:['user']
  }

  formData = this.fb.group(this.data, {
    validators: this.passwordMatchValidator
  }); 

  onSubmit(): void {
    console.log(this.formData.get('mobile')?.errors);

    return ;
    this.trueLoading();
    this.us.createUser(this.formData.value)
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
        this.formData = this.fb.group(this.data);
    })

  }

  
    // Custom validator function to check if passwords match
    passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if (password && confirmPassword && password.value !== confirmPassword.value) {
          // Set a custom error key 'passwordMismatch' if passwords do not match
          confirmPassword.setErrors({ passwordMismatch: true });
          return { passwordMismatch: true };
      }

      // Clear the error if passwords match
      confirmPassword.setErrors(null);
      return null;
  }

  ngOnInit(): void {
    
  }

}
