import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './modules/main/main.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LOCATION_INITIALIZED } from '@angular/common';

export enum Langs {
  EN = 'en',
  DE = 'de'
}
export function appInitializerFactory(translate: TranslateService, injector: Injector, http: HttpClient) {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        translate.currentLoader = new TranslateHttpLoader(http, 'assets/i18n/', '.json');
        let langToSet;
        if (localStorage.getItem('lang')) {
          langToSet = localStorage.getItem('lang') || Langs.DE;
        } else {
          langToSet = Langs.DE;
          localStorage.setItem('lang', Langs.DE);
        }
        translate.setDefaultLang(langToSet);
        translate.use(langToSet).subscribe(
          () => {
            // console.info(`Successfully initialized '${langToSet}' language.'`);
          },
          (err) => {
            // console.error(
            //   `Problem with '${langToSet}' language initialization.'`,
            // );
          },
          () => {
            resolve(null);
          },
        );
      });
    });
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector, HttpClient],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
