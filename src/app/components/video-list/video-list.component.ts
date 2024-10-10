import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {

      // List of Videos
      VideoList: string[] = ["José Rizal","Bonifacio: Ang Unang Pangulo","Heneral Luna"];

      // Variable
      Video: string = "";

      // Add Function
      Add(){
        if(this.Video.trim()){
          this.VideoList.push(this.Video);
        }
        this.Video = "";
      }

      // Delete Function
      Delete(index: number){
        this.VideoList.splice(index,1);
      }
}
