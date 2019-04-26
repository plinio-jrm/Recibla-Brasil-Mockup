import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, 
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }/*,
  { path: '**', component: PageNotFoundComponent }
  */
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRouterModule { }
