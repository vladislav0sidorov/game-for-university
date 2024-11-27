import { Site } from './Site'
import { Game } from './Game'

//  TODO
//  Написать тесты для Site

describe('Site', () => {
  let site: Site

  beforeEach(() => {
    site = new Site()
  })

  it('should save game', () => {
    site.save()
    expect(site.Games.length).toBe(1)
    expect(site.Games[0].game).toBeDefined()
  })

  it('should load game', () => {
    site.save()
    const originalGame = site.game
    site.game = new Game()
    site.load(0)
    expect(site.game).toEqual(originalGame)
  })

  it('should return keys', () => {
    site.save()
    expect(site.keys().length).toBe(1)
    expect(typeof site.keys()[0]).toBe('string')
  })
})
