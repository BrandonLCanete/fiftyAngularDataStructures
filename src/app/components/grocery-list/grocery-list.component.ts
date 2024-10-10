import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {

    // List of Groceries
    GroceryList: string[] = ["Meat","Eggs","Vegetable","Bread","Can Foods","Chocolates","Detergents"];

    // Variable
    Grocery: string = "";

    // Add Function
    Add(){
      if(this.Grocery.trim()){
        this.GroceryList.push(this.Grocery);
      }
      this.Grocery = "";
    }

    // Delete Function
    Delete(index : number){
      this.GroceryList.splice(index ,1);
    }
}
