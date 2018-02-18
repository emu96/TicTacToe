import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  board;
  player: number;
  message = 'Start game';
  founded = false;
  boardHighlight;
  noOneWins: boolean;
  moves = 0;

  constructor() {
    this.board = [];
    this.board.push([-1, -1, -1].slice());
    this.board.push([-1, -1, -1].slice());
    this.board.push([-1, -1, -1].slice());

    this.boardHighlight = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    this.player = 0;
    this.noOneWins = false;
   }

  ngOnInit() {
  }

  playersTurn(player) {
    this.player = 1 - this.player;
  }

  tempCheck(a, b, c) {
    if (a === b && b === c) {
      return true;
    }
    return false;
  }
  checkForEnd(board) {
    console.log(this.board[0][0], this.board[0][1], this.board[0][2])
    if (this.tempCheck(this.board[0][0], this.board[0][1], this.board[0][2]) && this.board[0][0] !== -1) {
      this.founded = true;
      this.boardHighlight[0][0] = this.boardHighlight[0][1] = this.boardHighlight[0][2] = 1;
      return this.message = 'wins' + this.player;
    }
    if (this.tempCheck(this.board[1][0], this.board[1][1], this.board[1][2]) && this.board[1][0] !== -1) {
      this.founded = true;
      this.boardHighlight[1][0] = this.boardHighlight[1][1] = this.boardHighlight[1][2] = 1;
      return this.message = 'wins' + this.player;
    }
    if (this.tempCheck(this.board[2][0], this.board[2][1], this.board[2][2]) && this.board[2][0] !== -1) {
      this.founded = true;
      this.boardHighlight[2][0] = this.boardHighlight[2][1] = this.boardHighlight[2][2] = 1;
      return this.message = 'wins' + this.player;
    }

    if (this.tempCheck(this.board[0][0], this.board[1][0], this.board[2][0]) && this.board[0][0] !== -1) {
      this.founded = true;
      this.boardHighlight[0][0] = this.boardHighlight[1][0] = this.boardHighlight[2][0] = 1;
      return this.message = 'wins' + this.player;
    }
    if (this.tempCheck(this.board[0][1], this.board[1][1], this.board[2][1]) && this.board[0][1] !== -1) {
      this.founded = true;
      this.boardHighlight[0][1] = this.boardHighlight[1][1] = this.boardHighlight[2][1] = 1;

      return this.message = 'wins' + this.player;
    }
    if (this.tempCheck(this.board[0][2], this.board[1][2], this.board[2][2]) && this.board[0][2] !== -1) {
      this.founded = true;
      this.boardHighlight[0][2] = this.boardHighlight[1][2] = this.boardHighlight[2][2] = 1;

      return this.message = 'wins' + this.player;
    }

    if (this.tempCheck(this.board[0][0], this.board[1][1], this.board[2][2]) && this.board[0][0] !== -1) {
      this.founded = true;
      this.boardHighlight[0][0] = this.boardHighlight[1][1] = this.boardHighlight[2][2] = 1;

      return this.message = 'wins' + this.player;
    }
    if (this.tempCheck(this.board[0][2], this.board[1][1], this.board[2][0]) && this.board[0][2] !== -1) {
      this.founded = true;
      this.boardHighlight[0][2] = this.boardHighlight[1][1] = this.boardHighlight[2][0] = 1;
      return this.message = 'wins' + this.player;
    }

    if (this.moves === 9 && this.founded === false) {
      console.log("nichya");
      this.noOneWins = true;
    }
  }


  clickedOnField(event, row, col) {
    if (!this.founded) {
      if (this.board[row][col] === -1) {
        this.board[row][col] = this.player;
        this.moves++;
        this.checkForEnd(this.board);
        if (!this.founded) {
          this.playersTurn(this.player);
        }
      }  else {
        console.log('This field is not empty!');
      }
    }

  }

  draw_board_field(row, col) {
    if (this.board[row][col] !== -1) {
      if ('XO'.charAt(this.board[row][col]) === 'X') {
        return 'exp fa fa-close';
      }
      return 'exp fa fa-circle-o';
    }
    return '';
  }

  f(r, c) {
    return this.boardHighlight[r][c] === 1;
  }

  canPlace(r, c) {
    return this.board[r][c] === -1;
  }

  getCssForPlayer(playerID: number) {
    if (playerID === 1) {
      return 'fa fa-circle-o';
    } else {
      return 'fa fa-close';
    }
  }

}
