import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

    // List of movies in a theater
    movieList: string[] = ["Moana","Your Name.","Despicable Me","Transformer The Last Knight","Dragon Ball Super Battle of Gods","Avengers The End Game"];

    // Variable
    movie: string = "";

    // Add Function
    Add(){
      if(this.movie.trim()){
        this.movieList.push(this.movie);
      }
      this.movie = "";
    }

    // Delete Function
    Delete(index : number){
      this.movieList.splice(index,1);
    }
}
