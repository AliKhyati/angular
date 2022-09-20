import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isHidden: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hideAge(){
    if(this.isHidden) {
      this.isHidden = false;
    }else{
      this.isHidden = true;
    }
  }
}
