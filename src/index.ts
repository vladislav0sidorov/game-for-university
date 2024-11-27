import { checkWin, isFill, isRightMove } from './board'

// Текущее состояние доски
let board: string[] = []

// Ссылка на html элемент для вывода сообщений
const info = <HTMLDivElement>document.getElementById('info')

// Кнопки игрового поля и их инициализация
const buttons: HTMLButtonElement[] = []

for (let i = 0; i < 9; i++) {
  const b = <HTMLButtonElement>document.getElementById('f' + i)
  const f = b.textContent === null ? '_' : b.textContent

  b.onclick = () => {
    step(i)
  }
  buttons.push(b)
  board.push(f)
}

// Начальная поизиция, используется при сбросе
const zeroBoard = board.slice()

// После окончании игры - true.
// Используется для того, что-бы не делать ходов после окончания игры
let gameOver = false

// Хранит символ, который выставляется на доску при ходе.
let turn = 'X'

// Возвращает текущий символ и меняет его для следующего хода.
function getTurn(): 'X' | '0' {
  if (turn == 'X') {
    turn = '0'
    return 'X'
  } else {
    turn = 'X'
    return '0'
  }
}

// Кнопка для перехода к начальной позиции
const resetButton = <HTMLButtonElement>document.getElementById('reset')

// TODO
// Функция  должна установить в начальное состояние переменные
//  board, turn и gameOver, и установить в начальное состояние
//  свойство textContent html элементов buttons и info
const reset = function (this: GlobalEventHandlers): void {
  board = zeroBoard.slice()
  turn = 'X'
  gameOver = false
  info.textContent = 'Игра началась'
  buttons.forEach((button, i) => {
    button.textContent = board[i]
  })
}

resetButton.onclick = reset

// TODO
// В случае, если игра не окончена и в клетку cell возможен ход,
//  должна выполнить ход.
// При выполнении хода нужно заполнить соответствующие элементы
//  массивов board и buttons, затем проверить, на закончилась ли игра
//  и, если игра закончилась, обновить переменные gameOver и info.
function step(cell: number): void {
  if (!gameOver && isRightMove(cell, board)) {
    const currentTurn = getTurn()

    board[cell] = currentTurn
    buttons[cell].textContent = currentTurn

    const result = checkWin(board)
    if (result !== '_') {
      gameOver = true
      info.textContent = `Игрок ${result} выиграл!`
    } else if (isFill(board)) {
      gameOver = true
      info.textContent = 'Ничья!'
    }
  }
}
