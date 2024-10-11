import { Component } from '@angular/core';
import { BudgetList } from './budget-list.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {

      // List of Budget Name and Amount
      BudgetList: BudgetList[] = [
        {Budget: "Wifi Internet", Amount: 2000},
        {Budget: "Developer", Amount: 20000},
        {Budget: "Hosting", Amount: 5000},
        {Budget: "Advertisement", Amount: 15000}
      ];

      // Variables
      Budget: string = "";
      Amount: number = 0;

      // Add Function
      Add(){
        if(this.Budget.trim()&&this.Amount>0){
          this.BudgetList.push({
            Budget : this.Budget,
            Amount :  this.Amount
          });
        }
        this.Budget = "";
        this.Amount = 0;
      }

      // Delete Function
      Delete(index: number){
        this.BudgetList.splice(index,1);
      }
}
