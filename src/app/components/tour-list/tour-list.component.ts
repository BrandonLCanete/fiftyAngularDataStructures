import { Component } from '@angular/core';
import { TourList } from './tour-list.model';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {

    // List of band tour
    TourList: TourList[] = [
      {Tour: "A Night at the Opera Tour by Queen Rock Band",Date: "November 14, 1975 – April 22, 1976"},
      {Tour: "The Hotel California Tour By Eagles Band", Date: "August 1, 1978"}
    ];

    // Variables
    Tour: string = "";
    Date: string = "";

    // Add Function
    Add(){
      if(this.Tour.trim()&&this.Date.trim()){
        this.TourList.push({
          Tour: this.Tour,
          Date : this.Date
        });
      }
      this.Tour = "";
      this.Date = "";
    }

    // Delete Function
    Delete(index : number){
        this.TourList.splice(index,1);
    }
}
