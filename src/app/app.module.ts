import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeInvestorComponent } from './Components/home-investor/home-investor.component';
import { HomeYouthComponent } from './Components/home-youth/home-youth.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { ProfileInvestorComponent } from './Components/profile-investor/profile-investor.component';
import { SendOfferComponent } from './Components/send-offer/send-offer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeInvestorComponent,
    HomeYouthComponent,
    WelcomeComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactUsComponent,
    ProfileUserComponent,
    ProfileInvestorComponent,
    SendOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,


  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
