import { Game } from './Game'
import { State } from './State'

// Объект для сохранения игры
// key рекомендуется инициализировать
//  с помощью new Date().toLocaleString()
type Saving = {
  key: string
  game: Game
}

// Класс позволяет сохранять и восстанавливать игры
export class Site {
  // Текущая игра
  game: Game = new Game()
  // Сохраненные игры
  Games: Saving[] = []

  save() {
    // TODO
    // сохраняет текущую игру в массив Games

    const saving: Saving = {
      key: new Date().toLocaleString(),
      game: this.game.clone()
    }

    this.Games.push(saving)
  }

  load(index: number) {
    // TODO
    // загружает игру по ее индексу в массиве Games

    if (index >= 0 && index < this.Games.length) {
      this.game = this.Games[index].game.clone()
    }
  }

  keys(): string[] {
    // TODO
    // вовзращает список ключей игр из массива Games

    return this.Games.map(game => game.key)
  }
}
