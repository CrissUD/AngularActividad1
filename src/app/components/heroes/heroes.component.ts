import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { heroInterface } from 'src/app/model/heroInterface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: heroInterface [] = []
  constructor(private heroeService :  HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroeService.getHeroes();
  }

}
