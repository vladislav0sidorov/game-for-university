import { board } from './board'
import { game } from './game'

const buttons: HTMLButtonElement[] = []
for (let i = 0; i < 9; i++) {
  const b = <HTMLButtonElement>document.getElementById('f' + i)

  b.onclick = () => {
    game.move(i)
    draw()
  }

  buttons.push(b)
}

const info = <HTMLDivElement>document.getElementById('info')
const stepSelect = <HTMLSelectElement>document.getElementById('stepSelect')

function fillStepOptions(): void {
  const ops = stepSelect.options

  for (let i = ops.length - 1; i >= 0; i--) ops.remove(i)
  for (let i = 0; i < game.steps.length; i++) {
    const elem = new Option(String(i), String(i))

    ops.add(elem)
  }
}

fillStepOptions()

const stepButton = <HTMLButtonElement>document.getElementById('stepButton')

stepButton.onclick = () => {
  const ops = stepSelect.options
  let index = 0

  for (let i = 0; i < ops.length; i++) {
    if (ops[i].selected) index = i
  }

  game.toStep(index)
  draw()
}

function draw(): void {
  for (let i = 0; i < 9; i++) {
    buttons[i].textContent = board.cells[i]
  }

  info.textContent = game.checkStatus()
  fillStepOptions()
}
