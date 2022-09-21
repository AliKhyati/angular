import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighglightDirective } from './highglight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HighglightDirective,
    DisplayGuestsDirective,
    HomeComponent,
    MenuComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
