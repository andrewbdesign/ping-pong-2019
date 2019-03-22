const players = []

class Player {
  constructor(name) {
    this.score = 0
    this.name = name
  }

  addPoint() {
    this.score++
  }

  minusPoint() {
    this.score--
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('started')
  for(let i = 0; i < 3; i++) {
    players[i] = new Player()
  }
  console.log(players)
})