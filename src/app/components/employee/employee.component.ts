import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  token = localStorage.getItem('token')
  
  addUpdate: string;
  idExist: any;
  actionTitle: string;
  employeeForm!: FormGroup;
  maxDate: Date;



  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    public location: Location,
    private snackBar: MatSnackBar){
      const currentYear = new Date().getFullYear();
      this.maxDate = new Date(currentYear + 1, 11, 31);

      this.idExist = this.route.snapshot.paramMap.get('id')

      if(!!this.idExist){
        this.getEmployee(this.idExist)

        this.actionTitle = "Edit"
        this.addUpdate ="Update"
      }else{
        this.actionTitle = "Add"
        this.addUpdate ="Create"
      }
   }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      _id:  this.idExist,
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      contactNo: new FormControl(null, Validators.required),
      jobTitle: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      hireDate:new FormControl(null, Validators.required),
      leaveDate: ''
    })
  }

  onSubmit(): void{
    if(!!this.idExist){
      this.updateEmployee(this.employeeForm)
    }else{
      this.createEmployee(this.employeeForm)
    }
  }
  
  onDelete(): void{
    this.deleteEmployee(this.idExist)
  }  

  checkEmployee(form: any){
    //populate for if employee found
    if(!!form._id){

      //remove unused form property
      delete form.createdAt
      delete form.updatedAt
      delete form.__v
      
      this.employeeForm.setValue(form)
    }else{
      this.router.navigate(['employee'])
    }
  }

  getEmployee(id: string): void{
    this.apiService
          .getEmployee(id, this.token)
          .subscribe(
            (res:any) => this.checkEmployee(res),
            (error: any) => {
              console.log(error)
              this.router.navigate(['employee'])
            })
  }

  createEmployee(form: FormGroup): void{
    this.apiService
        .createEmployee(form.value, this.token)
        .subscribe(
          (res:any) => {
            this.snackBar.open("Employee Added", "OK")._dismissAfter(3000),
            this.router.navigate(['employees'])
          },
          (error: any) => console.log(error)
        )
  }

  updateEmployee(form: any): void{
    this.apiService
      .updateEmployee(form.value, this.token)
      .subscribe(
        (res:any) => {
          this.snackBar.open("Employee Updated", "OK")._dismissAfter(3000)
          this.router.navigate(['employees'])
        },
        (error: any) => console.log(error)
      )
  }

  deleteEmployee(id: string){
    this.apiService
      .deleteEmployee(id, this.token)
      .subscribe(
        (res:any) => {
          this.snackBar.open("Employee Deleted", "OK")._dismissAfter(3000)
          this.router.navigate(['employees'])
        },
        (error: any) => console.log(error)
      )
  }
}
