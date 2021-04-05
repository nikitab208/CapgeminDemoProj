import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe'
import{  SortDirective} from './directive/sort.directive'


import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { AddNewEmployeeComponent } from './add-new-employee/new-employee.component'
import { HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthenticationGuard} from './authentication.guard'
import { AuthguardServiceService} from './authguard-service.service'

@NgModule({
  declarations: [
    AppComponent,
    AddNewEmployeeComponent,
    EmployeeComponent,
    FilterPipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    
  ],
  providers: [AuthenticationGuard,AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

