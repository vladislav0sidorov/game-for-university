import { board } from "./board"

test("Convert", () => {
    let source = "00__XX___"
    expect(board.fromString(source)).toBe(true)
    expect(board.toString()).toBe(source)
    expect(board.fromString("________")).toBe(false)
    expect(board.fromString("________1")).toBe(false)
})

test("isFill", () => {
    board.fromString("000XXX00_")
    expect(board.isFill()).toBe(false)
    board.fromString("000XXX000")
    expect(board.isFill()).toBe(true)
})

test("move", () => {
    board.fromString("000XXX00_")
    expect(board.move(0, "0")).toBe(false)
    expect(board.move(8, "X")).toBe(true)
    expect(board.cells[8]).toBe("X")
})

test("checkWin", () => {
    board.fromString("000XXX00_")
    expect(board.checkWin()).toBe("0")
    board.fromString("__X_X_X___")
    expect(board.checkWin()).toBe("X")
    board.fromString("_________")
    expect(board.checkWin()).toBe("_")
})
