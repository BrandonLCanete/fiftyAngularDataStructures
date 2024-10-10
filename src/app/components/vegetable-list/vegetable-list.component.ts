import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list', 
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {

    // List of vegetable
    vegetableList: string[] = ["Carrot","Cabbage","Eggplant","Squash"];

    // Variable
    vegetable: string = "";


    // Add Function
    Add(){
      if(this.vegetable.trim()){
        this.vegetableList.push(this.vegetable);
      }
      this.vegetable = "";
    }

    // Delete Function
    Delete(index: number){
      this.vegetableList.splice(index , 1);
    }
}
