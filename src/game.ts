import { board, Cells } from './board'

interface IGame {
  steps: Cells[]
  current: number
  move: (index: number) => boolean
  toStep: (step: number) => boolean
  checkStatus: () => string
}

// В объекте хранится список всех позиций, которые были в игре (свойство steps)
//  и номер текущей позиции в этом списке (current).
export const game: IGame = {
  // TODO
  // Необходимо инициализировать steps массивом с пустой доской
  steps: [['_', '_', '_', '_', '_', '_', '_', '_', '_']],
  current: 0,

  // TODO
  // Вызывает checkStatus, и, если игра окончена, возвращает false
  // Определяет, какой символ ходит, и пытается сделать ход
  //  с помощью board.move.
  // Если ход можно сделать, то добавляет  новыу позицию в steps,
  //  обновляет current и возвращает true, иначе возвращает false
  // Нужно учесть, что если вызывалась функция toStep, то
  //  current можно указывать не на последний элемент steps
  move: function (index: number): boolean {
    const status = this.checkStatus()
    if (status !== 'Идет игра') return false

    const currentStep = this.steps[this.current]
    const nextPlayer = currentStep.filter(cell => cell === 'X').length === currentStep.filter(cell => cell === '0').length ? 'X' : '0'

    if (!board.fromString(currentStep.join(''))) return false
    if (!board.move(index, nextPlayer)) return false

    const newPosition = [...board.cells] as Cells
    this.steps = this.steps.slice(0, this.current + 1)
    this.steps.push(newPosition)
    this.current++
    return true
  },

  // TODO
  // Проверяет, что в steps есть элемент с индексом step,
  //  если нет то возвращает false
  // Делает current равным step и обновляет свойство cell в board
  toStep: function (step: number): boolean {
    if (step < 0 || step >= this.steps.length) return false
    this.current = step
    board.fromString(this.steps[step].join(''))
    return true
  },

  // TODO
  // Возвращает "Ничья", "Победил 0", "Победил X" или "Идет игра"
  //  в зависимости от ситуации на доске
  checkStatus: function (): string {
    board.fromString(this.steps[this.current].join(''))
    const winner = board.checkWin()
    if (winner === 'X') return 'Победил X'
    if (winner === '0') return 'Победил 0'
    if (board.isFill()) return 'Ничья'
    return 'Идет игра'
  }
}
