import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {EmployeeService} from './employee.service'
@Component({
  selector:'app-post',
  templateUrl:'./employee.component.html',
  styleUrls:['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
  constructor( private employeeService : EmployeeService,private formBuilder : FormBuilder) { }
  dataList: any = [];
  serachForm:FormGroup;
  searchTerm = '';

  ngOnInit(): void {
    this.getAllEmployeeDtails()
    this.serachForm  =  this.formBuilder.group({
      term: ['', Validators.required],

  });
  this.serachForm.get('term').valueChanges
  .subscribe((term) => {
    this.searchTerm = term;
  });
  }

  getAllEmployeeDtails() {
    this.employeeService.getAllEmployee().subscribe(result => {
     this.dataList = result
    });
  
   
  }
  editEmployee(data){ 
   console.log(data) 

  }

}


export interface IEmployee {

  employeeId: number;
  employeeName: string;
  employeeAge: number;
  employeeDOB: string;

}