import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {

      // List of Building
      BuildingList: string[] = ["Science Building","Computer Building","Principal Building"];

      // Variable
      Building: string = "";

      // Add Function
      Add(){
        if(this.Building.trim()){
          this.BuildingList.push(this.Building);
        }
        this.Building = "";
      }

      // Delete Function
      Delete(index : number){
        this.BuildingList.splice(index,1);
      }
}
