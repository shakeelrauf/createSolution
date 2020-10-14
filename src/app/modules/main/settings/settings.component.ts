import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from 'src/app/services/BrowserStorageService.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private localStorage: BrowserStorageService,
    private router: Router,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  logout() {
    this.localStorage.setItem('user', null)
    this.localStorage.setItem('login', false)
    this.router.navigate(['/login'])
  }

}
