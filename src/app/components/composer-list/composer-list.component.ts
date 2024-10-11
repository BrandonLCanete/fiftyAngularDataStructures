import { Component } from '@angular/core';
import { ComposerList } from './composer-list.model';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {

      // List of composer and their life span
      ComposerList: ComposerList[] = [
        {Composer: "Wolfgang Amadeus Mozart",Year: "1756–1791"},
        {Composer: "Ludwig van Beethoven", Year: "1770–1827"},
        {Composer: "Johann Sebastian Bach", Year: "1685–1750"},
        {Composer: "Antonio Vivaldi", Year: "1678–1741"}
      ];

      // Variables
      Composer: string = "";
      Year: string = "";

      // Add Function
      Add(){
        if(this.Composer.trim()&&this.Year.trim()){
          this.ComposerList.push({
            Composer : this.Composer,
            Year : this.Year
          });
        }
        this.Composer = "";
        this.Year = "";
      }

      // Delete Function
      Delete(index: number){
        this.ComposerList.splice(index,1);
      }
}
