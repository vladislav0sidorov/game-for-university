export type Cell = '_' | 'X' | '0'

  // TODO
  // Проверяет, является ли sym типа Cell
  // Возвращает true если sym типа Cell, иначе false
export function isCell(sym: string): sym is Cell {
  return sym === '_' || sym === 'X' || sym === '0'
}

export class Board {
  cells: Cell[]

  constructor(str: string | Cell[] = '_________') {
    // TODO
    // Используя сужения типа заполните this.cells

    if (Array.isArray(str)) {
      this.cells = [...str]
    } else {
      const result = Board.fromString(str)
      this.cells = result ?? Array(9).fill('_' as Cell)
    }
  }

  clone(): Board {
     // TODO
    // Функция должна вернуть копию объекта

    return new Board([...this.cells])
  }

  private static fromString(str: string): Cell[] | null {
    // TODO
    // Переписывает из str символы в this.cells
    // Если длина строки не равна 9, возвращает null
    // Если встретиться символ не из Cell возвращает null
    // Если преобразование прошло успешно возвращает true

    if (str.length !== 9) return null
    const cells = str.split('') as Cell[]
    if (cells.every(isCell)) return cells
    return null
  }

  isFill(): boolean {
    // TODO
    // Возвращет true если на доске нет пустых клеток

    return !this.cells.includes('_')
  }

  move(index: number, cell: Cell): boolean {
     // TODO
    // Если ячейка this.cell[index] занята - возвращает false
    // Записывает в ячейку cell и возвращает true

    if (this.cells[index] !== '_') return false
    this.cells[index] = cell
    return true
  }

  private getLineChar(line: number[]): Cell[] {
    return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]]
  }

  private static winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  checkWin(): string {
     // TODO
    // Если имеется комбинация из трех одинаковых символов "X" или "0"
    //  в линию - возвращает этот символ
    // Иначе возвращает символ "_"

    for (const line of Board.winPos) {
      const chars = this.getLineChar(line)
      if (chars[0] !== '_' && chars[0] === chars[1] && chars[1] === chars[2]) {
        return chars[0]
      }
    }
    return '_'
  }

  status(): string {
    // TODO
    // возвращает либо строку с результатом игры, либо,
    //   если игра не закончена, строку "Идет игра".

    const winner = this.checkWin()
    if (winner !== '_') return `Выиграл ${winner}`
    if (this.isFill()) return 'Ничья'
    return 'Идет игра'
  }
}
