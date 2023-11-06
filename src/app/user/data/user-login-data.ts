import { Validators } from "@angular/forms";

export const UserLoginFormate = [
    {
        placeholder:"Email ID",
        type:'email',
        for:'email',
        name:'email',
        id:'email',
        validators: [Validators.required, Validators.email],
        err:[{
            key: "required",
            message: "Required Field"
        },{
            key: "email",
            message: "please provide a valid mail id like(example@vibhu.ac.in)"
        }]

    },
    {
        placeholder:"Password",
        type:'password',
        for:'password',
        name:'password',
        id:'password',
        validators: [Validators.required, Validators.minLength(8)],
        err:[{
            key: "required",
            message: "Password is required field"
        },{
            key: "minlength",
            message: "minmum length required is 8"
        }]
    },
]