import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {

      // List of Flower
      FlowerList: string[] = ["Buoquets","Buotonniere","Corsage"];

      // Variable
      Flower: string = "";

      // Add Function
      Add(){
        if(this.Flower.trim()){
          this.FlowerList.push(this.Flower);
        }
        this.Flower = "";
      }

      // Delete Function
      Delete(index: number){
        this.FlowerList.splice(index,1);
      }
}
