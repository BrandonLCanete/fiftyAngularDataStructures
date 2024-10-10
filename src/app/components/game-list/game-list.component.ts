import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',  
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {

      // List of games
      GameList: string[] = ["Mobile Legends","Wild Rift","League of Legends","God of War","Roblox"];

      // Variable
      Game: string = "";

      // Add Function
      Add(){
        if(this.Game.trim()){
          this.GameList.push(this.Game);
        }
        this.Game = "";
      }

      // Delete Function
      Delete(index : number){
        this.GameList.splice(index,1);
      }
}
