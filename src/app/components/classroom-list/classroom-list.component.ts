import { Component } from '@angular/core';
import { ClassRoomList } from './classroom-list.model';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {

    // List of Classroom Student
    StudentList: ClassRoomList[] = [
      {Student: "Princess",Classroom: "A"},
      {Student: "Jhonny",Classroom: "B"},
      {Student: "Henry", Classroom: "C"}
    ];

    // Variable
    Student: string = "";
    Classroom: string = "";


    // Add Function
    Add(){
      if(this.Student.trim()&&this.Classroom.trim()){
        this.StudentList.push({
           Student : this.Student,
           Classroom : this.Classroom
        });
      }
      this.Student = "";
      this.Classroom = "";
    }

    // Delete Function
    Delete(index: number){
      this.StudentList.splice(index,1);
    }
}
