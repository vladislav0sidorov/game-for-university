export type Cell = '_' | 'X' | '0'
export type Cells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

function isCell(sym: string): sym is Cell {
  return sym === '_' || sym === 'X' || sym === '0'
}

// В объекте хранится текущая позиция.
export const board: {
  cells: Cells
  fromString: (str: string) => boolean
  toString: () => string
  isFill: () => boolean
  move: (index: number, cell: Cell) => boolean
  getLineChar: (line: number[]) => Cell[]
  checkWin: () => Cell
  winPos: number[][]
} = {
  cells: ['_', '_', '_', '_', '_', '_', '_', '_', '_'],

  fromString(str: string) {
    if (str.length !== 9) return false
    const cells = str.split('')
    if (!cells.every(isCell)) return false
    this.cells = cells as Cells
    return true
  },

  toString(): string {
    return this.cells.join('')
  },

  isFill() {
    return !this.cells.includes('_')
  },

  move(index: number, cell: Cell) {
    if (this.cells[index] !== '_') return false
    this.cells[index] = cell
    return true
  },

  getLineChar(line: number[]) {
    return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]]
  },

  checkWin() {
    for (const line of this.winPos) {
      const chars = this.getLineChar(line)
      if (chars[0] !== '_' && chars[0] === chars[1] && chars[1] === chars[2]) {
        return chars[0]
      }
    }
    return '_'
  },

  winPos: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
}
