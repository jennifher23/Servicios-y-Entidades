import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateMovieDto, MovieModel, UpdateMovieDto } from '../modules/movie.modul';
//servicio se encarga de hacer la peticion y la devuelve al componente
//servicio hace la peticion al back y le llega la respuesta
//todos los componentes de comunican con un solo servicio

@Injectable({ //Decorador 
  providedIn: 'root'
})
export class MovieHttpService {
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";//solo de lectura la vareiable
  constructor(private httpClient: HttpClient) { }//metodos httpclient
  //Moviemode[]Cuando recuperamos todo el arreglo de objetos
  getAll():Observable<MovieModel[]>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<MovieModel[]>(this.API_URL);
   }

   getOne(id:MovieModel['id']):Observable<MovieModel> {
   const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<MovieModel>(url);
   }
         //objeto de tipo createmovieDto
   store(movie:CreateMovieDto):Observable<MovieModel> { 
    return this.httpClient.post<MovieModel>(this.API_URL, movie)
   }
 
   update(movie:UpdateMovieDto,id:MovieModel['id']):Observable<MovieModel>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<MovieModel>(url, movie)
   }

   destroy(id: MovieModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
   }

// ng g s services/movieHttp   -genera el archivo de servicio
