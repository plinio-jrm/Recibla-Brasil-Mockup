import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
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
