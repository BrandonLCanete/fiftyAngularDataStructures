import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

    // List of countries by continent
    countryList: string[] = ["Japan (Asia)","USA (North America)","Kenya (Africa)"];

    // Variable
    country: string = "";

    // Add Function
    Add(){
      if(this.country.trim()){
        this.countryList.push(this.country);
      }
      this.country = "";
    }

    // Delete Function
    Delete(index : number){
      this.countryList.splice(index,1);
    }
}
