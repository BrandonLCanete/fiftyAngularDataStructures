import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {

      // List of Software
      SoftwareList: string[] = ["Visual Studio Code","Google Chrome","Microsoft Word","Intellij IDE","Laragon"];

      // Variable
      Software: string = "";


      // Add Function
      Add(){
        if(this.Software.trim()){
          this.SoftwareList.push(this.Software);
        }
        this.Software = "";
      }

      // Delete Function
      Delete(index : number){
        this.SoftwareList.splice(index , 1);
      }
}
