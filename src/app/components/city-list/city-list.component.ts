import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {

    // List of city where companies operates in
    cityList: string[] = ["Manila","Tokyo","Washington D.C.","New Delhi","Ottawa"];

    // Variable
    city: string = "";

    // Add Function
    Add(){
      if(this.city.trim()){
        this.cityList.push(this.city);
      }
      this.city = "";
    }

    // Delete Function
    Delete(index: number){
      this.cityList.splice(index,1);
    }
}
