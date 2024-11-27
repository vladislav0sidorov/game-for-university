import { Board, Cell } from './Board'

// Объекты класса хранят данные о состоянии игры: положение на доске и символ, который будет выставлен следующим ходом.
export class State {
  board: Board
  sym: Cell

  constructor(board: Board = new Board(), sym: Cell = 'X') {
    this.board = board
    this.sym = sym
  }

  clone(): State {
    // TODO
    // Функция должна вернуть копию объекта

    return new State(this.board.clone(), this.sym)
  }
}
