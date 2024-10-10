import { Component } from '@angular/core';
import { LaptopSpecification } from './laptop-specification-list.model';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {

      // List of Laptop and Specification
      LaptopList: LaptopSpecification[] = [
        {Laptop: "Surface Laptop Go 3",Specification: "12th Gen Intel® i5, USB-C®, USB-A , 12.4” touchscreen"},
        {Laptop: "Apple M3 Pro", Specification: "12‑core CPU & 18‑core GPU, 18GB unified memory, Up to 12 hours wireless web"},
        {Laptop: "Predator Helios 16 PH16-72-96H6 PRO Black", Specification: "Intel® Core™ i9-14900HX processor, 16GB RAM upgradable to 32 GB, 512GB SSD upgradeable to maximum of 2TB"},
        {Laptop: "14.0 ASUS X415 (11th Gen Intel)", Specification: "Up to Intel® Core™ i7 processor, Up to 16GB memory, Up to 1 TB PCIe® SSD and 1 TB HDD"}
      ];
      
      // Variable
      Laptop: string = "";
      Specification: string = "";


      // Add Function
      Add(){
        if(this.Laptop.trim()){
          this.LaptopList.push({
            Laptop : this.Laptop,
            Specification : this.Specification
          });
        }
        this.Laptop = "";
        this.Specification = "";
      }

      // Delete Function
      Delete(index : number){
        this.LaptopList.splice(index,1);
      }
}
