import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {

    // List of programming languages
    LanguageList: string[] = ["Java","C++","C","Typescript","Python","C#","Go"];

    // Variable
    Language: string = "";

    // Add Function
    Add(){
      if(this.Language.trim()){
        this.LanguageList.push(this.Language);
      }
      this.Language = "";
    }

    // Delete Function
    Delete(index : number){
      this.LanguageList.splice(index,1);
    }
}
