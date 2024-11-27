import { Game } from './Game'

test('move', () => {
  const game = new Game()
  expect(game.move(0)).toBe(true)
  expect(game.current).toBe(1)
  expect(game.steps[1].board.cells[0]).toBe('X')
  expect(game.move(0)).toBe(false)
  expect(game.move(1)).toBe(true)
  expect(game.current).toBe(2)
  expect(game.steps[2].board.cells[0]).toBe('X')
  expect(game.steps[2].board.cells[1]).toBe('0')
  expect(game.steps[2].board.cells[3]).toBe('_')
})

test('toStep', () => {
  const state = new Game()
  expect(state.toStep(0)).toBe(true)
  expect(state.move(2)).toBe(true)
  expect(state.move(1)).toBe(true)
  expect(state.move(0)).toBe(true)
  expect(state.toStep(4)).toBe(false)
  expect(state.toStep(1)).toBe(true)
  expect(state.steps.length).toBe(4)
  expect(state.move(4)).toBe(true)
  expect(state.steps.length).toBe(3)
})
