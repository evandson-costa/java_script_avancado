
const Base = require('./base');

class Car extends Base {
    constructor({id, name, year, available, gasAvailable, realeseYear}) {
        super({id, name});
        this.available = available;
        this.gasAvailable = gasAvailable;
        this.realeseYear = realeseYear;
    }
}

module.exports = Car;