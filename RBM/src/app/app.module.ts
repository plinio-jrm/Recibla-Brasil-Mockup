import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RbmNavbarComponent } from './components/rbm-navbar/rbm-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoSlidesComponent } from './components/home/info-slides/info-slides.component';
import { QuemSomosComponent } from './components/home/quem-somos/quem-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    RbmNavbarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    ContactComponent,
    InfoSlidesComponent,
    QuemSomosComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
