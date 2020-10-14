import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from 'src/app/services/BrowserStorageService.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginApp: any = false;
  user: string = '';

  constructor(
    private localStorage: BrowserStorageService,
    private router: Router,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.loginApp = localStorage.getItem("login");
    this.user = JSON.parse(localStorage.getItem("user"));
    this.localStorage.watchStorage().subscribe(data => {
      this.loginApp = data.login
      this.user = JSON.parse(data.user)
    })
  }

  logout() {
    this.localStorage.setItem('user', null)
    this.localStorage.setItem('login', false)
    this.router.navigate(['/login'])
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
