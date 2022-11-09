import {FormGroup} from '@angular/forms'

export function validatePassword (formgroup:FormGroup): {[key: string]:boolean}|null {
    const password = formgroup.controls['password'];
    const confirmPassword = formgroup.controls['confirmPassword'];
    if(password.dirty && confirmPassword.dirty && password.value !== confirmPassword.value){

    }
return null
}