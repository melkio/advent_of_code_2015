import * as input from "./input.json"

function parse(value: string) : BracketsRule {
    switch (value) {
        case "(" : return new OpenBracketsRule();
        case ")" : return new CloseBracketsRule();
        default : return new DoNothingBracketsRule();
    }
}

interface BracketsRule {
    apply: (value: number) => number;
}

class CloseBracketsRule implements BracketsRule {
    apply(value: number) : number {
        return value - 1;
    }
}

class OpenBracketsRule implements BracketsRule {
    apply(value: number) : number {
        return value + 1;
    }
}

class DoNothingBracketsRule implements BracketsRule {
    apply(value: number) : number {
        return value;
    }
}

const result = [...input.value]
    .map((value: string) => parse(value))
    .reduce((previousValue: number, currentValue: BracketsRule) => currentValue.apply(previousValue), 0)

console.log("DAY01 / PUZZLE 01: ", result)


