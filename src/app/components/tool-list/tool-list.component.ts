import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {

    // List of Tools
    toolList: string[] = ["Screwdriver","Hammer","Drills"];

    // Variable
    tool: string = "";

    // Add Function
    Add(){
      if(this.tool.trim()){
        this.toolList.push(this.tool);
      }
      this.tool = "";
    }

    // Delete Function
    Delete(index : number){
      this.toolList.splice(index ,1);
    }
}
