import { Injectable } from '@angular/core';
@Injectable()
export class GameService {

  changePlayer(square: any) {
    this.board[square.id].state = square.state;
    if(this.activePlayer == "X"){
      this.activePlayer="O"
    }else{
      this.activePlayer="X"
    }
    this.checkBoard();
  }


  checkBoard() {
    if(this.board[0].state== "X" && this.board[1].state=="X" && this.board[2].state=="X"){
      this.winner=true;
      console.log("WIN");
    }else{
      //
    }
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
