import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {

      // List of Presentation
      PresentationList: string[] = ["AI: Mind or machine?","Big Data, Big Impact: The power to change the world.","Biodegradable Plastics: Friend or foe?","Climate Change: It's time to act."];

      // Variable
      Presentation: string = "";


      // Add Function
      Add(){
        if(this.Presentation.trim()){
          this.PresentationList.push(this.Presentation);
        }
        this.Presentation = "";
      }

      // Delete Function
      Delete(index: number){
        this.PresentationList.splice(index,1);
      }
}
