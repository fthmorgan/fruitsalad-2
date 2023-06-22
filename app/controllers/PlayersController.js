import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function drawPlayersList() {
  const players = AppState.players
  let template = ''
  console.log(players)
  players.forEach(p => template += p.ListTemplate)
  console.log(template)
  setHTML('players-list', template)
}


// NOTE the 'class' is what the user sees and accesses
export class PlayersController {
  constructor() {
    console.log('Player controller loaded')
    drawPlayersList()
    AppState.on('players', drawPlayersList)
  }


  createPlayer() {
    window.event.preventDefault()
    const targetedForm = window.event.target  //NOTE target the form 'onsubmit'
    const formData = getFormData(targetedForm) //NOTE format the targeted form into our data object
    // NOTE the  'name' attribute on the input is what the 'getFormData' uses to create our object with its key:value pairs
    console.log('Creating Player', formData);
    playersService.createPlayer(formData)
  }


}



