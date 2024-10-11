import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {

      // List of developer tools
      ToolList: string[] = ["Visual Studio Code","Postman","Visual Studio","Docker","Pycharm","WebStorm","Intellij IDE","Android Studio"];

      // Variable
      Tool: string = "";


      // Add Function
      Add(){
        if(this.Tool.trim()){
          this.ToolList.push(this.Tool);
        }
        this.Tool = "";
      }

      // Delete Function
      Delete(index:number){
        this.ToolList.splice(index,1);
      }
}
