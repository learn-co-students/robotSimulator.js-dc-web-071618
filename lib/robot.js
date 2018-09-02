const directions = ["north", "south", "east", "west"]

class Robot {
	constructor(bearing = 'north', coordinates = [0, 0]) {
    this.bearing = bearing
    this.coordinates = coordinates
  }
  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }
  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }
  place(location) {
    this.setCoordinates(location.x, location.y)
    this.setBearing(location.direction)
  }
  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.setBearing('east')
        break
      case 'south':
        this.setBearing('west')
        break
      case 'east':
        this.setBearing('south')
        break
      case 'west':
        this.setBearing('north')
        break
    }
  }
  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.setBearing('west')
        break
      case 'south':
        this.setBearing('east')
        break
      case 'east':
        this.setBearing('north')
        break
      case 'west':
        this.setBearing('south')
        break
    }
  }
  advance() {
    switch (this.bearing) {
      case 'north':
        this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
        break
      case 'south':
        this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
        break
      case 'east':
        this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
        break
      case 'west':
        this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
        break
    }
  }
  translateInstructions(abbreviatedInstructions) {
    const instructions = Array.prototype.slice.call(abbreviatedInstructions)
    instructions.forEach(instruction => {
      switch (instruction) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
          break
      }
    })
  }
}
