import { GameService } from './../game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() square: any;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  changePlayer() {
    this.gameService.isGameRunning = true;

    if (this.gameService.isGameRunning && this.square.state == null) {
      this.square.state=this.gameService.activePlayer;
      this.gameService.changePlayer(this.square);
    }
  }

}
