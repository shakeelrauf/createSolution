import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamerasComponent } from './cameras/cameras.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportingComponent } from './reporting/reporting.component';

const routes: Routes = [
  { path: 'cameras', component: CamerasComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'reporting', component: ReportingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }