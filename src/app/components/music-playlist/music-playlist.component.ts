import { Component } from '@angular/core';
import { MusicPlayList } from './music-playlist.model';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {

      // List of music and artist
      MusicList: MusicPlayList[] = [
        {Name: "Perfect", Artist: "Ed Sheeran"},
        {Name: "Bohemian Rhapsody", Artist: "Queen"},
        {Name: "I feel it coming", Artist: "The Weekend"}
      ];

      // Variable
      Name: string = "";
      Artist: string = "";

      // Add Function
      Add(){
        if(this.Name.trim()&& this.Artist.trim()){
            this.MusicList.push({
              Name: this.Name,
              Artist: this.Artist
            });
         }
         this.Name = "";
         this.Artist = "";
      }

      // Delete Function
      Delete(index:number){
        this.MusicList.splice(index,1);
      }
}
