import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {

    // List of Food Menu
    FoodMenuList: string[] = ["Side Dish","Main Dish","Dessert","Soup","Beverage"];

    // Variable
    Food: string = "";

    // Add Function
    Add(){
      if(this.Food.trim()){
        this.FoodMenuList.push(this.Food);
      }
      this.Food = "";
    }

    // Delete Function
    Delete(index: number){
      this.FoodMenuList.splice(index,1);
    }
}
