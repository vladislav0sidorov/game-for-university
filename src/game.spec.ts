import {game} from "./game"

test("move", () => {
    expect(game.move(0)).toBe(true)
    expect(game.current).toBe(1)
    expect(game.steps[1][0]).toBe("X")
    expect(game.move(0)).toBe(false)
    expect(game.move(1)).toBe(true)
    expect(game.current).toBe(2)
    expect(game.steps[2][0]).toBe("X")
    expect(game.steps[2][1]).toBe("0")
    expect(game.steps[2][3]).toBe("_")
})

test("toStep", () => {
    expect(game.toStep(0)).toBe(true)
    expect(game.move(2)).toBe(true)
    expect(game.move(1)).toBe(true)
    expect(game.move(0)).toBe(true)
    expect(game.toStep(4)).toBe(false)
    expect(game.toStep(1)).toBe(true)
    expect(game.steps.length).toBe(4)
    expect(game.move(4)).toBe(true)
    expect(game.steps.length).toBe(3)
})
