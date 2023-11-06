import { Validators } from "@angular/forms";

export const UserCreateFormate = [
    {
        placeholder: "First Name",
        type: 'text',
        for: 'firstName',
        name: 'firstName',
        id: 'firstName',
        validators: [Validators.required, Validators.pattern('[a-zA-Z]*')],
        err: [{
            key: "required",
            message: "Required"
        }, {
            key: "pattern",
            message: " Only Alphabets"
        }
        ]
    },
    {
        placeholder: "Last Name",
        type: 'text',
        for: 'lastName',
        name: 'lastName',
        id: 'lastName',
        validators: [Validators.pattern('[a-zA-Z ]*'),],
        err: [{
            key: "pattern",
            message: "Only Alphabets and spaces"
        }]
    },
    {
        placeholder: "Email ID",
        type: 'email',
        for: 'email',
        name: 'email',
        id: 'email',
        validators: [Validators.required, Validators.email],
        err: [{
            key: "required",
            message: "Email is a Required Field"
        }, {
            key: "email",
            message: "please provide a valid mail id"
        }]
    },
    {
        placeholder: "Mobile Number",
        type: 'number',
        for: 'mobile',
        name: 'mobile',
        id: 'mobile',
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
        err:[{
            key: "required",
            message: "Number is a Required Field"
        },{
            key: "minlength",
            message: "entered number is less than 10"
        },{
            key: "maxlength",
            message: "field must be equal to 10"
        }]
    },
    // {
    //     placeholder:"Full Address",
    //     type:'text',
    //     for:'address',
    //     name:'address',
    //     id:'address',
    // err:["Required"]
    // },
    {
        placeholder: "Password",
        type: 'password',
        for: 'password',
        name: 'password',
        id: 'password',
        validators: [Validators.required, Validators.minLength(8),],
        err: [{
            key: "required",
            message: "Password is required field"
        },{
            key: "minlength",
            message: "minmum length required is 8"
        },{

        }]
    },
    {
        placeholder: "Confirm Password",
        type: 'password',
        for: 'confirmPassword',
        name: 'confirmPassword',
        id: 'confirmPassword',
        validators: [Validators.required,],
        err: [{
            key: 'passwordMismatch',
            message: "please enter correct password!"
        }, {
            key: "required",
            message: "Required"
        },
        ]
    },

]