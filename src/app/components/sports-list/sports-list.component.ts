import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {

     // List of popular sports
     sportList: string[] = ["Basketball","Football","Baseball","Track and Field","E-sports"];

     // Variable
     sport: string = "";

     // Add Function
     Add(){
        if(this.sport.trim()){
            this.sportList.push(this.sport);
        }
        this.sport = "";
     }

     // Delete Function
     Delete(index : number){
       this.sportList.splice(index,1);
     }
}
