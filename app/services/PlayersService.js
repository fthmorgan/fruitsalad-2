import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"
import { saveState } from "../utils/Store.js"

class PlayersService {
  createPlayer(playerData) {
    console.log(playerData)
    let player = new Player(playerData)
    AppState.players.push(player)
    AppState.emit('players')
    // TODO save players in the appstate
    // NOTE first arg: this is the 'label' to find the data
    // NOTE second arg: this is the actual data we want to save to local storage under the label
    saveState('players', AppState.players)
    console.log(AppState.players, 'appstate players')
  }

}



export const playersService = new PlayersService()