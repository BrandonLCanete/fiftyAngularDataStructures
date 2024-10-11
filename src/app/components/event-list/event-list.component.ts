import { Component } from '@angular/core';
import { EventList } from './event-list.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

    // List of upcoming events
    EventList: EventList[] = [
      {Event: "MPL PH S14 Playoffs", Date: "October 16, 2024"},
      {Event: "Juan Luna Stage Play", Date: "October 20, 2024"}
    ];

    // Variables
    Event: string = "";
    Date: string = "";

    // Add Function
    Add(){
      if(this.Event.trim()&&this.Date.trim()){
        this.EventList.push({
          Event : this.Event,
          Date : this.Date
        });
      }
      this.Event = "";
      this.Date = "";
    }

    // Delete Function
    Delete(index : number){
       this.EventList.splice(index,1);
    }
}
