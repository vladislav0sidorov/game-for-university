// TODO
// преобразовывать текущую позицию из строки (например 00__XX___)
// в массив (например ['0','0','_','_','X','X','_','_','_'])
export function boardFromString(s: string): string[] {
  return s.split('')
}

// TODO
// преобразовывать текущую позицию в виде массива в строку
export function boardToString(b: string[]): string {
  return b.join('')
}

// TODO
// Если ни в одном из элементов массива board нет элементов
// равных "_" она возвращает true, иначе - false
export function isFill(board: string[]): boolean {
  return !board.includes('_')
}

// Если клетка в позиции move доски board равна "_"
// (в нее можно пойти) функция возвращает true, иначе - false
export function isRightMove(move: number, board: string[]): boolean {
  return board[move] === '_'
}

// Список троек позиций, находящихся на одной линии
//  (выигрышные комбинации)
const winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Используется в функции checkWin
// для выбора одной возможной выигрышной комбинации
function getLineChar(line: number[], board: string[]): string[] {
  return [board[line[0]], board[line[1]], board[line[2]]]
}

// TODO
// Проверяет по winPos, имеется ли выигрышная комбинация
//  из трех одинаковых символов, находящихся на одной линии.
// В случае наличия такой комбинации функция должна вернуть
//  X или 0 соответственно, иначе нужно вернуть _.
export function checkWin(board: string[]): string {
  for (const positions of winPos) {
    const line = getLineChar(positions, board)

    if (line[0] !== '_' && line[0] === line[1] && line[1] === line[2]) {
      return line[0]
    }
  }

  return '_'
}
