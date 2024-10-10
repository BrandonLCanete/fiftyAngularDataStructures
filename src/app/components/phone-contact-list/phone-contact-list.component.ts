import { Component } from '@angular/core';
import { PhoneContactList } from './phone-contact-list.model';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {

      // List of contacts
      ContactList: PhoneContactList[] = [
        {Name: "Jhonny", Number: "09134568691"},
        {Name: "Jenny", Number: "09126452819"},
        {Name: "Arthur", Number: "09456817234"}
      ];

      // Variable 
      Name: string = "";
      Number: string = "";

      // Add Function
      Add(){
        if(this.Name.trim()&&this.Number.trim()){
          this.ContactList.push({
            Name : this.Name,
            Number : this.Number
          });
        }
        this.Name = "";
        this.Number = "";
      }

      // Delete Function
      Delete(index : number){
        this.ContactList.splice(index,1);
      }
}
