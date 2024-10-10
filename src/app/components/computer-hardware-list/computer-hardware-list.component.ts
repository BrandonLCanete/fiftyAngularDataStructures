import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {

      // List of computer hardware
      ComputerHardwareList: string[] = ["CPU","RAM","GPU","MotherBoard","Hard Drive","ROM","SSD"];

      // Variable
      Hardware: string = "";

      // Add Function
      Add(){
        if(this.Hardware.trim()){
          this.ComputerHardwareList.push(this.Hardware);
        }
        this.Hardware = "";
      }

      // Delete Function
      Delete(index: number){
        this.ComputerHardwareList.splice(index,1);
      }
}
