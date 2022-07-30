import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  addUpdate: string;
  idExist: any;
  actionTitle: string;
  employeeForm!: FormGroup;
  maxDate: Date;



  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute) {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.idExist = this.route.snapshot.paramMap.get('id')
    this.actionTitle = !!this.idExist ? "Edit" : "Add"
    this.addUpdate = !!this.idExist ? "Update" : "Create"

   }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      id:  this.idExist,
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

    }
  }
  
  onDelete(): void{
    console.log(this.employeeForm.value.id);
  }  
}
