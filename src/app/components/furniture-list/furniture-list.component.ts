import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {

    // List of Furniture
    FurnitureList: string[] = ["Sofas","Armchairs","Desks","Chest"];

    // Variable
    Furniture: string = "";

    // Add Function
    Add(){
      if(this.Furniture.trim()){
        this.FurnitureList.push(this.Furniture);
      }
      this.Furniture = "";
    }
    
    // Delete Function
    Delete(index : number){
        this.FurnitureList.splice(index,1);
    }
}
