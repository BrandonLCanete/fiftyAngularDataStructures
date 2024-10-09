import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
    
    // List of fruits
    fruitList: string[] = ["Banana","Orange","Papaya","Apple","Grapes"];
    
    // Variable
    fruit: string = "";

    // Add Function
    Add(){
       if(this.fruit.trim()){
          this.fruitList.push(this.fruit);
       }
       this.fruit = "";
    }

    // Delete Function
    Delete(index : number){
      this.fruitList.splice(index , 1);
    }
}
