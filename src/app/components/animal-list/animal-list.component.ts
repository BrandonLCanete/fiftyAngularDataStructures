import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

    // List of Animals
    animalList: string[] = ["Monkey","Tiger","Zebra","Elephant","Lion","Penguin"];

    // Variable
    animal: string = "";

    // Add Function
    Add(){
      if(this.animal.trim()){
        this.animalList.push(this.animal);
      }
      this.animal = "";
    }

    // Delete Function
    Delete(index: number){
      this.animalList.splice(index,1);
    }
}
