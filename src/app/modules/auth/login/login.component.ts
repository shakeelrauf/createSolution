import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from 'src/app/services/BrowserStorageService.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  loginApp: boolean = false;
  user: string = '';
  showError: boolean = false;

  constructor(
      private localStorage: BrowserStorageService,
      private router: Router,
      private fb: FormBuilder,
    ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [
        null,
        Validators.compose([Validators.required]),
      ], 
      password: [
        null,
        Validators.compose([Validators.required]),
      ]
    });
  }

  login(){
    let user = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.showError = false;
    if(user == 'Admin' && password == 'Password'){
      this.localStorage.setItem('login', true)
      this.localStorage.setItem('user', {name: user})
      this.router.navigate(['/cameras'])
    }else{
      this.showError = true
    }
  }
}
