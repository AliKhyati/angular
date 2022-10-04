import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: User = new User();
  public bool: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

  onSubmit() {
    console.log(this.user)
  }

}
