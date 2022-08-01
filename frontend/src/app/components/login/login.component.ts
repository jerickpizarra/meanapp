import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor (private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    if(!!this.authService.isLoggedIn$){
      this.router.navigate(['/'])
    }
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.value)
      .subscribe(
        (res: any) => {this.router.navigate(['/'])},
        (error: any) => alert("Invalid Credentials"))
        
    
  }

}
