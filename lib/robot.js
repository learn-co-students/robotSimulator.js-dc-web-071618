const directions = ['north', 'south', 'east', 'west']
class Robot {
	constructor() {
		this.coordinates = [0, 0];
		this.bearing = 'north';
	}

	setCoordinates(x, y) {
		this.coordinates[0] = x;
		this.coordinates[1] = y;
	}

	setBearing(direction) {
		if (!directions.includes(direction)) {
			throw new Error('Invalid Robot Bearing');
		}
		this.bearing = direction;
	}

	place(obj) {
		this.setCoordinates(obj.x, obj.y);
		this.setBearing(obj.direction);
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
	}	turnRight() {
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
		switch (this.bearing) {
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
		switch (this.bearing) {
			case 'north':
				this.coordinates[1]++;
				break;
			case 'east':
				this.coordinates[0]++;
				break;
			case 'south':
				this.coordinates[1]--;
				break;
			case 'west':
				this.coordinates[0]--;
				break;
		}
	}

	translateInstructions(instructions) {
		instructions.split('').forEach(function(letter) {
			switch(letter) {
				case 'R':
					this.turnRight();
					break;
				case 'L':
					this.turnLeft();
					break;
				case 'A':
					this.advance();
					break;
			}
		}.bind(this))
	}
}
