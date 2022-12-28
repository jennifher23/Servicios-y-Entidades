import { CategoryModel} from "./category.modul";

export interface MovieModel {
    id: number;
    title: string;
    price: number;
    category:CategoryModel;
    images: string[];
}

export interface CreateMovieDto extends Omit<MovieModel, "id" | "category" > {
    categoryId:number;//traer un atributo
}

//partial la actualizacion puede ser completa o parcial.
export interface UpdateMovieDto extends Partial<MovieModel> {
    categoryId?:number;
}
