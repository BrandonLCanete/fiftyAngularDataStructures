import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {

      // List of Accessory 
      AccessoryList: string[] = ["Phone Case","Screen Protector","Portable Charger","Headphone"];

      // Variable
      Accessory: string = "";

      // Add Function
      Add(){
        if(this.Accessory.trim()){
          this.AccessoryList.push(this.Accessory);
        }
        this.Accessory = "";
      }

      // Delete Function
      Delete(index : number){
        this.AccessoryList.splice(index,1);
      }
}
