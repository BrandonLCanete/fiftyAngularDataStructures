import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {

    // List of Laptops
    LaptopList: string[] = ["Surface Laptop Go 3","Apple M3 Pro","Predator Helios 16 PH16-72-96H6 PRO Black","14.0 ASUS X415 (11th Gen Intel)"];

    // Variable
    Laptop: string = "";

    // Add Function
    Add(){
      if(this.Laptop.trim()){
        this.LaptopList.push(this.Laptop);
      }
      this.Laptop = "";
    }

    // Delete Function
    Delete(index : number){
      this.LaptopList.splice(index, 1);
    }
}
