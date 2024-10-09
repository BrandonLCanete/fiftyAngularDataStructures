import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

    // List of Course Offer in a School
    courseList: string [] = ["Bachelor of Science in Information Technology (BSIT)","Bachelor of Science in Hospitality Management (BSHM)"," Bachelor of Science in Computer Science (BSCS)",
    "Bachelor of Science in Civil Engineering (BSCE)","Bachelor of Science in Psychology (BSP)","Bachelor of Science (BSC)","Bachelor of Science in Accountancy (BSA)","Bachelor of Secondary Education (BSED)","Bachelor of Science in Business Administration (BSBA)","Bachelor of Science in Tourism Management (BSTM)"];
    
    // Variable
    course : string = "";

    // Add Function
    Add(){
      if(this.course.trim()){
        this.courseList.push(this.course);
      }
      this.course = "";
    }

    // Delete Functio
    Delete(index : number){
       this.courseList.splice(index, 1);
    }
}
