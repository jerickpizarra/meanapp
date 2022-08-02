import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthService } from './services/auth.service';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate:[AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent, canActivate:[AuthService]},
  {path: 'employee/:id', component: EmployeeComponent, canActivate:[AuthService]},
  {path: 'employees', component: EmployeesComponent, canActivate:[AuthService]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
