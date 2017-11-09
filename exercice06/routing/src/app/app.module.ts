import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedInGuard } from './logged-in.guard';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponent } from './home/home.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ContactUscomponentComponent } from './contact-uscomponent/contact-uscomponent.component';
import { LoginComponent } from './login/login.component';
import { ProtectComponent } from './protect/protect.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
   { path: 'about', component: AboutComponentComponent},
   { path: 'home', component: HomeComponent},
   { path: 'contact', component: ContactComponentComponent},
   { path: 'contactUs', component: ContactUscomponentComponent},
   { path: 'login', component: LoginComponent},
   { path: 'protected', component: ProtectComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponentComponent,
    HomeComponent,
    ContactComponentComponent,
    ContactUscomponentComponent,
    LoginComponent,
    ProtectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [[{provide: UserService, useClass: UserService}], LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
