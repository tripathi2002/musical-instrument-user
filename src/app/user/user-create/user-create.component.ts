import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { UserCreate } from '../data/user-create-data';
import { User } from '../data/user';
import { UserService } from '../user.service';
import { Subject, debounce, debounceTime, map, throwError, timeout } from 'rxjs';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  message:string= '';
  isError: boolean = false;
  isLoading: boolean = false;
  title: string = ' SignUp Page '
  toggle=true;
  userbase = UserCreate;

  constructor(private fb: FormBuilder, private us: UserService){ }

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
    this.isError= false;
    this.isLoading=true;
    this.us.createUser(this.userDetails.value)
    .subscribe(
      (data)=>{
        this.isLoading=false;
        this.isError= false;
        console.log(data);

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

  ngOnInit(): void {
    
  }

}
