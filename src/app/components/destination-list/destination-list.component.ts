import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {


    // List of Destination
    DestinationList: string[] = ["Boracay Beach","Palawan","Chocolate Hills Bohol","Banaue Rice Terraces"];

    // Variable
    Destination: string = "";

    // Add Function
    Add(){
      if(this.Destination.trim()){
        this.DestinationList.push(this.Destination);
      }
      this.Destination = "";
    }

    // Delete Function
    Delete(index : number){
      this.DestinationList.splice(index,1);
    }
}
