import { Component } from '@angular/core';
import { InventoryList } from './inventory-list.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {

    // List of Inventory Items
    InventoryList: InventoryList[] = [
      {Name: "Rice", Quantity: "50kg"},
      {Name: "Snacks", Quantity: "60 pieces"},
      {Name: "Eggs", Quantity: "20 Trays"},
      {Name: "Sugar", Quantity: "20kg"}
    ];

    // Variables
    Name: string = "";
    Quantity: string = "";

    // Add Function
    Add(){
      if(this.Name.trim() && this.Quantity.trim()){
        this.InventoryList.push({
          Name : this.Name,
          Quantity : this.Quantity
        });
      }
      this.Name = "";
      this.Quantity = "";
    }

    // Delete Function
    Delete(index : number){
      this.InventoryList.splice(index,1);
    }
}
