import { UserI } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form): void{
    this.authService.register(form.value)
    .subscribe(res=>{
      
      this.router.navigateByUrl('/auth');
      
    })
  }
}
