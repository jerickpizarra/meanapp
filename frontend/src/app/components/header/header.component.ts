import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _isLoggedIn$: any;

  constructor(private route:Router, public authsService: AuthService) { }

  ngOnInit(): void {
   
  }

  logout(){

    
  }

  // back(){
  //   this._location.back()
  // }
}
