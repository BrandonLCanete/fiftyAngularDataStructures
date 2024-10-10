import { Component } from '@angular/core';
import { LectureList } from './lecture-list.model';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {

      // List of Lecture Schedule
      LectureList: LectureList[] = [
        {Name: "System Integration and Architecture 2",Day: "Saturday",Time: "3-6PM"},
        {Name: "Capstone Project 1",Day: "Saturday",Time: "10-2PM"},
        {Name: "System Administrator and Maintenance",Day: "Friday", Time: "6-9PM"}
      ];

      // Variables
      Name: string = "";
      Day: string = "";
      Time: string = "";

      // Add Function
      Add(){
        if(this.Name.trim()&&this.Day.trim()&&this.Time.trim()){
          this.LectureList.push({
              Name : this.Name,
              Day : this.Day,
              Time : this.Time
          });
        }
        this.Name = "";
        this.Day = "";
        this.Time = "";
      }

      // Delete Function
      Delete(index : number){
        this.LectureList.splice(index,1);
      }
}
