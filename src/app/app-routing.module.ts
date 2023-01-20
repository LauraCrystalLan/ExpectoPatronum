import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './constant/app';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MobileMainPageComponent } from './pages/mobile-main-page/mobile-main-page.component';

const routes: Routes = [
  {
    path: APPROUTER.MOBILE,
    component: MobileMainPageComponent,
  },
  {
    path: APPROUTER.MAIN,
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
