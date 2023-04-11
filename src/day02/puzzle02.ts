import * as input from "./input.json"

class Box {
    constructor(
        public readonly length: number, 
        public readonly width: number, 
        public readonly height: number
    ) {

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
    .reduce((previousValue: number, currentValue: Box) => previousValue + currentValue.ribbon, 0)
    console.log("DAY02 / PUZZLE 02: ", result)

