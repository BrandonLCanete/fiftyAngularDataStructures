import { Component } from '@angular/core';
import { ArtistList } from './artist-list.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {

    // List of artist
    ArtistList: ArtistList[] = [
      {Artist: "Leonardo da Vinci",Year: "1452–1519"},
      {Artist: "Johannes Vermeer",Year: "1632–1675"},
      {Artist: "Eugène Delacroix", Year: "1798–1863"},
      {Artist: "Jacques-Louis David", Year: "1748-1825"},
      {Artist: "Vincent van Gogh", Year: "1853–1890"}
    ];

    // Variables
    Artist: string = "";
    Year: string = "";

    // Add Function
    Add(){
      if(this.Artist.trim()&&this.Year.trim()){
        this.ArtistList.push({
          Artist : this.Artist,
          Year : this.Year
        });
      }
      this.Artist = "";
      this.Year = "";
    }

    // Delete Function
    Delete(index: number){
      this.ArtistList.splice(index,1);
    }
}
