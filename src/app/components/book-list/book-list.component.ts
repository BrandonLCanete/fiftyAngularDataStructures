import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

   // List of Books in Library
   bookList: string[] = ["SOFTWARE ENGINEERING - A PROGRAMMING APPROACH","SECOND EDITION THE C PROGRAMMING LANGUAGE",
  "MSA COLLEGE ALGEBRA","INTRODUCTION TO STATISTICS (CONCEPT AND APPLICATIONS IN RESEARCH)","GENERAL CHEMISTRY 1"];

   // Variable
   book: string = "";
  
   // Add Function
   Add(){
     if(this.book.trim()){
       this.bookList.push(this.book);
     }
     this.book = "";
   }

   // Delete Function
   Delete(index : number){
      this.bookList.splice(index , 1);
   }
}
