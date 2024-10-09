import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {

    // List of Car Model
    carList: string[] = ["Ford","Toyota","Ferrari","Tesla","Porsche","BMW","Mercedes-Benz"];

    // Variable
    car: string = "";

    // Add Functiom
    Add(){
      if(this.car.trim()){
        this.carList.push(this.car);
      }
      this.car = "";
    }

    // Delete Function
    Delete(index : number){
      this.carList.splice(index,1);
    }
}
