import { Component } from '@angular/core';
import { EmployeeList } from './employee-list.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

    // List of objects of employee
    employee: EmployeeList[] = [
      {Name: "Alisa",Position: "Office Staff",Department: "HR",Email: "Alisa@gmail.com",Salary: 30000,Birthday: "03/23/1996",Address: "Binondo,Manila",Sex: "Female"},
      {Name: "Jacob",Position: "Engineer",Department: "Construction",Email: "Jacob@gmail.com",Salary: 65000,Birthday: "05/15/1997",Address: "BGC, Taguig",Sex: "Male"},
      {Name: "Jenica",Position: "Teacher II",Department: "Education",Email: "Jenica@gmail.com",Salary: 45000,Birthday: "06/08/1990",Address: "Amparo, Caloocan",Sex: "Female"},
      {Name: "Arthur",Position: "Software Developer",Department: "IT",Email: "Arthur@gmail.com",Salary: 63000,Birthday: "10/20/1995",Address: "Marikina City",Sex: "Male"}
    ];

    // Variables
    name: string = "";
    position: string = "";
    department: string = "";
    email: string = "";
    salary: number = 0;
    birthday: string = "";
    address: string = "";
    sex: string = "";
    editIndex: number | null = null;
    editName: string = "";
    editPosition: string = "";
    editDepartment: string = "";
    editEmail: string = "";
    editSalary: number = 0;
    editBirthday: string = "";
    editAddress: string = "";
    editSex: string = "";
    editButtonClicked: boolean = false;


    // Add Function
    Add(){
      if(this.name.trim() && this.position.trim() && this.department.trim() &&
      this.email.trim() && this.salary > 0 && this.birthday.trim() && this.address.trim() && this.sex.trim()){
         this.employee.push({
            Name : this.name,
            Position : this.position,
            Department : this.department,
            Email : this.email,
            Salary : this.salary,
            Birthday : this.birthday,
            Address : this.address,
            Sex : this.sex
         });
      }
    }

    // Edit Function
    Edit(index : number){
       this.editButtonClicked = !this.editButtonClicked;
       this.editIndex = index;
       this.editName = this.employee[index].Name;
       this.editPosition = this.employee[index].Position;
       this.editDepartment = this.employee[index].Department;
       this.editEmail = this.employee[index].Email;
       this.editSalary = this.employee[index].Salary;
       this.editBirthday = this.employee[index].Birthday;
       this.editAddress = this.employee[index].Address;
       this.editSex = this.employee[index].Sex;
    }

    // Save Edit
    Save() : void{
      if(this.editIndex != null){
        this.employee[this.editIndex] = {
          Name : this.editName,
          Position : this.editPosition,
          Department : this.editDepartment,
          Email : this.editEmail,
          Salary : this.editSalary,
          Birthday : this.editBirthday,
          Address : this.editAddress,
          Sex : this.editSex
        };
      }
        this.editIndex = null;
    }
    // Delete Function
    Delete(index : number){
      this.employee.splice(index, 1);
    }
}
