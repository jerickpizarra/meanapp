import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


export class EmployeesComponent implements OnInit {
  

  displayedColumns: string[] = ['company', 'department', 'firstName', 'lastName', 'jobTitle', 'email', 'contactNo', ];
  employees: Employee[] = []

  dataSource = new MatTableDataSource<Employee>(this.employees);

  constructor(
    private apiService: ApiService,
    private router: Router, private auth: ApiService
    ){
      this.loadEmployees()
    }

  ngOnInit(): void {
    
  }

  loadEmployees(){
    this.apiService
      .getEmployees()
      .subscribe(
        (res:any) => this.dataSource = res
      )
  }

}
