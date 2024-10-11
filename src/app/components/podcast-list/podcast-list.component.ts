import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {

      // List of Podcast episodes
      PodcastList: string [] = ["Beyond Coding Podcast","Lex Fridman Podcast","Thoughtworks Technology Podcast"];

      // Variable
      Podcast: string = "";

      // Add Function
      Add(){
        if(this.Podcast.trim()){
          this.PodcastList.push(this.Podcast);
        }
        this.Podcast = "";
      }

      // Delete Function
      Delete(index: number){
         this.PodcastList.splice(index,1);
      }
}
