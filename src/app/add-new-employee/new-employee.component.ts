import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray,FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector:'app-register',
    templateUrl:'./new-employee.component.html',
    styleUrls:['./new-employee.component.css']
})
export class AddNewEmployeeComponent{

    registerForm: FormGroup;
    isSubmitted  =  false;
    departmentExtra:any
    constructor(private formBuilder : FormBuilder,private router : Router,
        private toster : ToastrService){

    }
    ngOnInit(){
        this.registerForm  =  this.formBuilder.group({
            eName: ['', Validators.required],
            eAge: ['', Validators.required],
            department: [false, Validators.required],
            eDepartment: ['', Validators.required],
           
        });
      
    }
    get formControls() { return this.registerForm.controls; }
    department(value){
        console.log(value)
        if(value == true){
            this.departmentExtra = true
        }else{
            this.departmentExtra =false
        }
        
      
    }
    register(){
        console.log(this.registerForm.value);
        this.isSubmitted = true;
        if(this.registerForm.invalid){
          return;
        }else{
            localStorage.setItem('register', JSON.stringify(this.registerForm.value));
            this.toster.success('added employee Successfully');
             this.router.navigateByUrl('');
            this.registerForm.reset();
           
        }

       
       
       
      }

}