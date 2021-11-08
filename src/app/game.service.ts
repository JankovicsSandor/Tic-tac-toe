import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  changePlayer(square: any) {
    this.board[square.id].state = square.state;
    console.log(this.board);
  }

  public board = <any>[];
  public boardSize = 9;
  public activePlayer: string = "X";
  public isGameRunning: boolean = false;
  public isGameOver: boolean = false;
  public winner: boolean = false;


  constructor() {
    this.newGame();
  }


  newGame() {
    let boardLocal = [];
    for (let index = 0; index < 9; index++) {
      boardLocal.push({ id: index, state: null });
    }

    this.board = boardLocal;
    this.activePlayer = "X";
    this.isGameRunning = false;
    this.isGameOver = false;
    this.winner = false;
  }

  get getBoard() {
    return this.board;
  }

  set setBoard(board: any) {
    this.board = [...board];
  }
}
