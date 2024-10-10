import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {

    // List of Mobile Apps
    AppList: string[] = ["Facebook","Youtube","Google Chrome","Messenger","JDoodle","Dcoder"];

    // Variable
    App: string = "";

    // Add Function
    Add(){
      if(this.App.trim()){
        this.AppList.push(this.App);
      }
      this.App = "";
    }

    // Delete Function
    Delete(index : number){
      this.AppList.splice(index,1);
    }
}
