import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {

    // List of office stationery
    StationeryList: string[] = ["Stapler","Sticky Notes","Calculator","Glue","Folders"];

    // Variable
    Stationery: string = "";


    // Add Function
    Add(){
      if(this.Stationery.trim()){
        this.StationeryList.push(this.Stationery);
      }
      this.Stationery = "";
    }

    // Delete Function
    Delete(index : number){
      this.StationeryList.splice(index,1);
    }
}
