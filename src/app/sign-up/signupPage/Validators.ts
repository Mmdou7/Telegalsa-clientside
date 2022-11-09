import { AbstractControl } from "@angular/forms";

export function validateName(control:AbstractControl){
    // console.log('validate name',control)
    if(control.value.match (/[0-9]/g)){
        return {invalidName : true } ;
    }
    return null;
}

