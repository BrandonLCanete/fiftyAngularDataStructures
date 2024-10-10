import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {

    // List of Laptops
    LaptopList: string[] = ["Microsoft Surface","Apple Macbook","Acer","Asus"];

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
