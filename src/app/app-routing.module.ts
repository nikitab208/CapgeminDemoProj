import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewEmployeeComponent } from './add-new-employee/new-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import {AuthenticationGuard} from './authentication.guard';  

const routes: Routes = [
  { path : '',component :EmployeeComponent},
  { path : 'add-employee',component :AddNewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
