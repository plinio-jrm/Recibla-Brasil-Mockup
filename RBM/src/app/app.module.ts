import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AllMaterialsModule } from './modules/all-materials/all-materials.module';
import { RbmNavbarComponent } from './components/rbm-navbar/rbm-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RbmNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    //AllMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
