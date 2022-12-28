import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/modules/movie.modul';
import { MovieHttpService } from 'src/app/services/movie-http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class MovieComponent implements OnInit {
  movies:MovieModel[] = [];

  //httpclient es una clase hacer las peticiones
  constructor(private movieHttpService: MovieHttpService) {} //Inyeccion de dependencia

  ngOnInit(): void {
    //this.getMovie();
    //this.getMovies();
    //this.createMovie();
    //this.updateMovie();
    //this.deleteMovie();
  }
  //getAll me devuelve un observable
  getMovie() {
    return this.movieHttpService.getAll().subscribe((response) => {
      this.movies = response;
      //console.log(response);
    });
  }
  //subscribe lista de espera va llegar la respuesta
  //Observable trae la informacion

  getMovies() {
    return this.movieHttpService.getOne(6).subscribe((response) => {
      console.log(response);
    });
  }
  createMovie() {
    const data ={
      id: 2,
      title: "zapato",
      description:"zapato grande",
      price: 23,
      categoryId:2,
      images:["https://api.lorem.space/image/fashion?w=640&h=480&r=3268"]

    }
    return this.movieHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateMovie() {
    const data ={
      id: 2,
      title: "zapato",
      description:"zapato grande",
    }
    return this.movieHttpService.update(data, 8).subscribe((response) => {
      console.log(response);
    });
  }
  deleteMovie() {
    return this.movieHttpService.destroy(6).subscribe((response) => {
      console.log(response);
    });
  }
}
//del component llama los metodos al servicio
