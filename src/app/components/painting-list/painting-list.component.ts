import { Component } from '@angular/core';
import { PaintingList } from './painting-list.model';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {

      // List of Paintings
      PaintingList: PaintingList[] = [
        {Painting: "Mona Lisa",Artist: "Leonardo Da Vinci",Year: 1503},
        {Painting: "Girl with a Pearl Earring",Artist: "Johannes Vermeer",Year: 1665},
        {Painting: "Liberty Leading the People", Artist: "Eugène Delacroix",Year: 1830},
        {Painting: "Napoleon Crossing the Alps", Artist: "Jacques-Louis David",Year: 1805},
        {Painting: "Café Terrace at Night", Artist: "Vincent van Gogh", Year: 1888}
      ];

      // Variables
      Painting: string = "";
      Artist: string = "";
      Year: number = 0;

      // Add Function
      Add(){
        if(this.Painting.trim()&&this.Artist.trim()&&this.Year > 0){
          this.PaintingList.push({
            Painting : this.Painting,
            Artist : this.Artist,
            Year : this.Year
          });
        }
        this.Painting = "";
        this.Artist = "";
        this.Year = 0;
      }

      // Delete Function
      Delete(index : number){
        this.PaintingList.splice(index,1);
      }

}
