import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularIntroduccion';
  name: String = "Hello Word";
  bandera: boolean = false;
  estudiates = [
    {
      nombre: "carlos"
    },
    {
      nombre: "juan"
    },
    {
      nombre: "luis"
    },
  ]

  public showName(name: String){
    console.log(name);
  }
}
