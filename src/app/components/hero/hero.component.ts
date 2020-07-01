import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { heroInterface } from 'src/app/model/heroInterface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: heroInterface;
  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService) { 
    this.activateRoute.params.subscribe(data => {
      this.hero = this.heroesService.getHero(data['idx']);
    })
  }

  ngOnInit(): void {
  }

}
