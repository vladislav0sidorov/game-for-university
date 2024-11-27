import { State } from './State'

// Класс служит для определения типа объекта game из предыдущей работы с дополнительными методами.
export class Game {
  // Состояния игры
  steps: State[]
  // Текущее состояние игры
  current: number

  constructor(steps: State[] = [new State()], current: number = 0) {
    // TODO
    // Корректно инициализируйте переменные:

    this.steps = [...steps]
    this.current = current
  }

  get state(): State {
    // TODO
    // Геттер должен возвращать текущее состояние игры

    return this.steps[this.current]
  }

  clone() {
    // TODO
    // Функция должна вернуть копию объекта

    return new Game(
      this.steps.map(s => s.clone()),
      this.current
    )
  }

  move(index: number): boolean {
    // TODO
    // Определяет, какой символ ходит, и пытается сделать ход
    //  с помощью board.move.
    // Если ход можно сделать, то добавляет  новыу позицию в steps,
    //  обновляет current и возвращает true, иначе возвращает false
    // Нужно учесть, что если вызывалась функция toStep, то
    //  current можно указывать не на последний элемент steps

    const currentState = this.state
    const nextSymbol = currentState.board.cells.filter((c: string) => c !== '_').length % 2 === 0 ? 'X' : '0'

    if (!currentState.board.move(index, nextSymbol)) return false

    this.steps = this.steps.slice(0, this.current + 1)
    this.steps.push(this.state.clone())
    this.current++
    return true
  }

  toStep(step: number): boolean {
    // TODO
    // Проверяет, что в steps есть элемент с индексом step,
    //  если нет то возвращает false
    // Делает current равным step и обновляет свойство cell в board

    if (step < 0 || step >= this.steps.length) return false
    this.current = step
    return true
  }
}
