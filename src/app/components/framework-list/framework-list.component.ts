import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {

      // List of framework
      FrameworkList: string[] = ["Laravel","Flask","Django","Spring Boot",".NET","Angular","React","Next.js","Vue.js","Spring"];

      // Variable
      Framework: string = "";

      // Add Function
      Add(){
        if(this.Framework.trim()){
          this.FrameworkList.push(this.Framework);
        }
        this.Framework = "";
      }

      // Delete Function
      Delete(index : number){
        this.FrameworkList.splice(index,1);
      }
}
