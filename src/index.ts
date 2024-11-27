import { Site } from './Site'

const site = new Site()

let buttons: HTMLButtonElement[] = []
for (let i = 0; i < 9; i++) {
  let b = <HTMLButtonElement>document.getElementById('f' + i)
  b.onclick = () => {
    site.game.move(i)
    draw()
  }
  buttons.push(b)
}

let info = <HTMLDivElement>document.getElementById('info')

let stepSelect = <HTMLSelectElement>document.getElementById('stepSelect')
function fillStepOptions() {
  const ops = stepSelect.options
  for (let i = ops.length - 1; i >= 0; i--) ops.remove(i)
  for (let i = 0; i < site.game.steps.length; i++) {
    const elem = new Option(String(i), String(i))
    ops.add(elem)
  }
}
let stepButton = <HTMLButtonElement>document.getElementById('stepButton')
stepButton.onclick = _ => {
  const ops = stepSelect.options
  var index = 0
  for (let i = 0; i < ops.length; i++) if (ops[i].selected) index = i
  site.game.toStep(index)
  draw()
}

let gameSelect = <HTMLSelectElement>document.getElementById('gameSelect')
function fillGameSelect() {
  const ops = gameSelect.options
  for (let i = ops.length - 1; i >= 0; i--) ops.remove(i)
  for (let i = 0; i < site.Games.length; i++) {
    const key = site.Games[i].key
    const elem = new Option(key, String(i))
    ops.add(elem)
  }
}
let saveGameButton = <HTMLButtonElement>document.getElementById('saveGameButton')
saveGameButton.onclick = () => {
  site.save()
  draw()
}

let loadGameButton = <HTMLButtonElement>document.getElementById('loadGameButton')
loadGameButton.onclick = () => {
  const ops = gameSelect.options
  var index = 0
  for (let i = 0; i < ops.length; i++) if (ops[i].selected) index = i
  site.load(index)
  draw()
}

function draw() {
  const board = site.game.state.board
  for (let i = 0; i < 9; i++) buttons[i].textContent = board.cells[i]
  info.textContent = board.status()
  fillStepOptions()
  fillGameSelect()
}
draw()
