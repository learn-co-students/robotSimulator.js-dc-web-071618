class Robot {
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    const validBearings = ['north', 'south', 'east', 'west']

    if (validBearings.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(spot) {
    this.setBearing(spot.direction)
    this.setCoordinates(spot.x, spot.y)
  }

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east';
        break;
      case 'east':
        this.bearing = 'south';
        break;
      case 'south':
        this.bearing = 'west';
        break;
      case 'west':
        this.bearing = 'north';
        break;
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west';
        break;
      case 'east':
        this.bearing = 'north';
        break;
      case 'south':
        this.bearing = 'east';
        break;
      case 'west':
        this.bearing = 'south';
        break;
    }
  }

  advance() {
    switch(this.bearing) {
      case 'east':
        this.coordinates[0]++;
        break;
      case 'north':
        this.coordinates[1]++;
        break;
      case 'south':
        this.coordinates[1]--;
        break;
      case 'west':
        this.coordinates[0]--;
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach(instruction => {
      switch(instruction) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
      }
    });
  }
}
