import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras/cameras.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SettingsComponent } from './settings/settings.component';
import { ReportingComponent } from './reporting/reporting.component';
import { SharedModule } from '../shared/shared.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    CamerasComponent,
    SettingsComponent,
    ReportingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
     }),
    SharedModule,
  ],

})
export class MainModule { }
