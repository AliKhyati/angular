import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Bienvenue sur le site d\'Ali';
  isThisIngredientVital: boolean = true;
  displayGuestList: boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon", "test"];
  showMovies: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
