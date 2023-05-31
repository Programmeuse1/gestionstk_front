import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AuthJwtService} from "../../core/auth/auth-jwt.service";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  errorMessage ='';

  loginForm = this.fb.group({
    login: [null],
    password: [null]
  });


  constructor(
    private fb: FormBuilder,
    private authJwtService: AuthJwtService,
    private router: Router,
  ) {
  }

  login():void{
    this.authJwtService.login(this.saveValue()).subscribe(() =>{
        this.router.navigate(['member/dashboard']).then(() =>{});
      },
      error =>{
        this.errorMessage= error
      }  )
  }

  saveValue(): AuthenticationRequest {
    return {
      login: this.loginForm?.get('login')?.value ?? '',
      password: this.loginForm?.get('password')?.value ?? ''
    }
  }

  ngOnInit(): void {}
}
