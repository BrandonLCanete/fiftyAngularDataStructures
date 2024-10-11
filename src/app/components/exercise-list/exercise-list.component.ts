import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {

    // List of exercise for workout routine
    ExerciseList: string[] = ["Push up","Sits up","Squats","Plank","Pull ups"];

    // Variable
    Exercise: string = "";

    // Add Function
    Add(){
      if(this.Exercise.trim()){
        this.ExerciseList.push(this.Exercise);
      }
      this.Exercise = "";
    }

    // Delete Function
    Delete(index : number){
      this.ExerciseList.splice(index,1);
    }
}
