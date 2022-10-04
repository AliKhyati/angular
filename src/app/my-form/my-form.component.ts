import { Component, OnInit } from '@angular/core';
import {Order} from "../order.model";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  model: Order = new Order();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model)
  }
}
