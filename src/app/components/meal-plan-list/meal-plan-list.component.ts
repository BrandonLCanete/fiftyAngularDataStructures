import { Component } from '@angular/core';
import { MealPlan } from './meal-plan-list.model';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {

    // List of Meal Plan in Week
    PlanList: MealPlan[] = [
      {Meal: "Sinangang with Itlog (Agahan)",Day: "Monday"},
      {Meal: "Kanin with Pritong Manok (Tanghalian)", Day: "Monday"},
      {Meal: "Kanin with Tinolang Manok (Gabihan)", Day: "Monday"}
    ];

    // Variable
    Meal: string = "";
    Day: string = "";

    // Add Function
    Add(){
      if(this.Meal.trim()&&this.Day.trim()){
        this.PlanList.push({
          Meal : this.Meal,
          Day: this.Day
        });
      }
      this.Meal = "";
      this.Day = "";
    }

    // Delete Function
    Delete(index: number){
      this.PlanList.splice(index,1);
    }
}
