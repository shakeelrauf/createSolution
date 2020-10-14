import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from 'src/app/services/BrowserStorageService.service';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/api-data.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  loginApp: boolean = false;
  user: string = '';
  cameras: any[];

  constructor(
    private localStorage: BrowserStorageService,
    private router: Router,
    private translate: TranslateService,
    private dataService: ApiDataService,
  ){
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.getCameras()
    setInterval(() => {
      this.getCameras();
    }, 500)
  }

  logout() {
    this.localStorage.setItem('user', null)
    this.localStorage.setItem('login', false)
    this.router.navigate(['/login'])
  }

  getCameras(){
    this.dataService.getCameras().subscribe(res => {
      this.cameras = res;
    })
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
