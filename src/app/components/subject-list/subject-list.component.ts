import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {

    // List of Subject taught in a semester
    subjectList: string[] = ["Ethics","Computer Programming 2","Contemporary World","Software Engineering","Capstone Project 1"];

    // Variable
    subject: string = "";

    // Add Function
    Add(){
      if(this.subject.trim()){
        this.subjectList.push(this.subject);
      }
      this.subject = "";
    }

    // Delete Function
    Delete(index : number){
       this.subjectList.splice(index, 1);
    }
}
