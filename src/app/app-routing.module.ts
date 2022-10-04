import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {SignupComponent} from "./signup/signup.component";
import {MyFormComponent} from "./my-form/my-form.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'profil', component: UserProfileComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'contact', component: MyFormComponent },
  {path: '**', redirectTo: 'profil'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
