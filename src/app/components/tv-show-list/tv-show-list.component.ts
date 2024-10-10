import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TvShowListComponent {

      // List of TV shows
      ShowList: string[] = ["Supernatural","The Boys","Lucifer"];

      // Variable
      Show: string = "";

      // Add Function
      Add(){
        if(this.Show.trim()){
          this.ShowList.push(this.Show);
        }
        this.Show = "";
      }

      // Delete Function
      Delete(index : number){
        this.ShowList.splice(index,1);
      }
}
