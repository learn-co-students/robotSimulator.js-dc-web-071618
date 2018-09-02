class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    const validBearings = ['north', 'south', 'east', 'west'];

    if (validBearings.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw new Error('Invalid Robot Bearing');
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y);
    this.setBearing(obj.direction);
  }

  turnRight() {
    switch(true) {
      case this.bearing === 'north':
        this.setBearing('east');
        break;
      case this.bearing === 'east':
        this.setBearing('south');
        break;
      case this.bearing === 'south':
        this.setBearing('west');
        break;
      case this.bearing === 'west':
        this.setBearing('north');
        break;
    }
  }

  turnLeft() {
    switch(true) {
      case this.bearing === 'north':
        this.setBearing('west');
        break;
      case this.bearing === 'west':
        this.setBearing('south');
        break;
      case this.bearing === 'south':
        this.setBearing('east');
        break;
      case this.bearing === 'east':
        this.setBearing('north');
        break;
    }
  }

  advance() {
    switch(true) {
      case this.bearing === 'north':
        this.coordinates[1] += 1;
        break;
      case this.bearing === 'west':
        this.coordinates[0] -= 1;
        break;
      case this.bearing === 'south':
        this.coordinates[1] -= 1;
        break;
      case this.bearing === 'east':
        this.coordinates[0] += 1;
        break;
    }
  }

  translateInstructions(instructions) {
    instructions.split('').forEach(i => {
      switch(i) {
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'A':
          this.advance();
          break;
        default:
          break;
      }
    })
  }
}
