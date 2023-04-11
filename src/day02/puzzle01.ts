import * as input from "./input.json"

class Box {
    constructor(
        public readonly length: number, 
        public readonly width: number, 
        public readonly height: number
    ) {

    }

    get area(): number {
        const length_width = this.length * this.width;
        const length_height = this.length * this.height;
        const width_height = this.width * this.height;

        const surface_area = 2 * length_width + 2 * length_height + 2 * width_height;
        const extra_area = Math.min(length_width, length_height, width_height);

        return surface_area + extra_area;
    }

    get ribbon() : number {
        const shortest_distance = [this.length, this.width, this.height]
            .sort((a: number, b: number) => a - b)
            .map((value: number) => value * 2)
            .slice(0, 2)
            .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
        const volume = [this.length, this.width, this.height]
            .reduce((previousValue: number, currentValue: number) => previousValue * currentValue, 1)

        return shortest_distance + volume;
    }

    static parse(value: string) : Box {
        const values = value
            .split("x")
            .map(x => parseInt(x));
        return new Box(values[0], values[1], values[2]);
    }
}

const result = input.values
    .map((value: string) => Box.parse(value))
    .reduce((previousValue: number, currentValue: Box) => previousValue + currentValue.area, 0)
    console.log("DAY02 / PUZZLE 01: ", result)

