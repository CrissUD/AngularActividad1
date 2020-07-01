import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hola = "Hola Mundo!!!";
  bandera = true;

  // heroes = [
  //   {
  //     nombre: "Spiderman",
  //     imagen: "https://dam.smashmexico.com.mx/wp-content/uploads/2018/09/07142333/spidermanbio_portada-770x513.jpg"
  //   },
  //   {
  //     nombre: "Iron Man",
  //     imagen: "https://www.cultture.com/pics/2016/09/iron00.jpg"
  //   },
  //   {
  //     nombre: "Thor",
  //     imagen: "https://www.cinemascomics.com/wp-content/uploads/2019/09/thor-vs-villano-x-men-comic-marvel.jpg"
  //   },
  //   {
  //     nombre: "Batman",
  //     imagen: "https://dam.smashmexico.com.mx/wp-content/uploads/2018/09/07142333/spidermanbio_portada-770x513.jpg"
  //   },
  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
