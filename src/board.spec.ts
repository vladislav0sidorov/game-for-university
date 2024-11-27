import { Board } from './Board'

test('Конструктор', () => {
  expect(new Board('00__XX___').cells.join('')).toBe('00__XX___')
  expect(new Board('________').cells.join('')).toBe('_________')
  expect(new Board('________1').cells.join('')).toBe('_________')
})

test('isFill', () => {
  expect(new Board('000XXX00_').isFill()).toBe(false)
  expect(new Board('000XXX000').isFill()).toBe(true)
})

test('move', () => {
  const board = new Board('000XXX00_')
  expect(board.move(0, '0')).toBe(false)
  expect(board.move(8, 'X')).toBe(true)
  expect(board.cells[8]).toBe('X')
})

test('checkWin', () => {
  expect(new Board('000XXX00_').checkWin()).toBe('0')
  expect(new Board('__X_X_X___').checkWin()).toBe('_')
  expect(new Board('_________').checkWin()).toBe('_')
})

test('clone', () => {
  expect(new Board('000XXX00_').checkWin()).toBe('0')
  expect(new Board('__X_X_X___').checkWin()).toBe('_')
  expect(new Board('_________').checkWin()).toBe('_')
})
