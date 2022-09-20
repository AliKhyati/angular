import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighglightDirective } from './highglight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HighglightDirective,
    DisplayGuestsDirective
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
