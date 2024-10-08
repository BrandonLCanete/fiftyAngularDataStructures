import { Component } from '@angular/core';
import { StudentList } from './student-list.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

      // list of objects of students
      studenList: StudentList[] = [
        {Name: "Jhonny", Grade:  10,LRN: 123471817190,Address: "Petchayan, Camarin Caloocan City",Sex: "Male"},
        {Name: "Princess",Grade: 9,LRN: 123478901919, Address: "Kiko, Camarin Caloocan City",Sex: "Female"},
        {Name: "Edgar", Grade: 8,LRN: 123473040101,Address: "Bagong Silang, Caloocan City",Sex: "Male"},
        {Name: "Jopay",Grade: 7,LRN: 123475910103, Address: "Amparo, Camarin Caloocan City",Sex: "Female"},
      ];

      // variables
      name: string = "";
      grade: number = 0;
      lrn: number = 0;
      address: string = "";
      sex: string = "Male";
      editIndex: number | null = null;
      editName: string = "";
      editGrade: number = 0;
      editLRN: number = 0;
      editAddress: string = "";
      editSex: string = "";
      editButtonClicked: boolean = false;
      

      // Add Function
      Add() : void{
          if(this.name.trim() && this.grade > 0 && this.lrn >0){
            this.studenList.push({
              Name : this.name,
              Grade : this.grade,
              LRN : this.lrn,
              Address : this.address,
              Sex : this.sex
            });
          }
      }
      // Edit Function
      Edit(index : number){
        this.editButtonClicked = !this.editButtonClicked;
        this.editIndex = index;
        this.editName = this.studenList[index].Name;
        this.editGrade = this.studenList[index].Grade;
        this.editLRN = this.studenList[index].LRN;
        this.editAddress = this.studenList[index].Address;
        this.editSex = this.studenList[index].Sex;
      }

      // Save Edit
      Save() : void{
        if(this.editIndex != null){
          this.studenList[this.editIndex] ={
             Name: this.editName,
             Grade: this.editGrade,
             LRN: this.editLRN,
             Address: this.editAddress,
             Sex: this.editSex
          };
        }
          this.editIndex = null;
      }
      // Delete Function
      Delete(index : number){
        this.studenList.splice(index, 1);
      }
}
