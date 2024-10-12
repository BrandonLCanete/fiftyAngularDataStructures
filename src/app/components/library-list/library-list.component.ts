import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {

      // List of libraries used in projects
      LibraryList: string[] = ["React","jQuery","Bootstrap","Tailwind CSS","Express.js","Socket.io"];

      // Variable
      Library: string = "";

      // Add Function
      Add(){
        if(this.Library.trim()){
          this.LibraryList.push(this.Library);
        }
        this.Library = "";
      }

      // Delete Function
      Delete(index : number){
        this.LibraryList.splice(index,1);
      }
}
