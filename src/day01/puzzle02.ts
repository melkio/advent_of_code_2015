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
    .map((_: BracketsRule, index: number, array: BracketsRule[]) => array.slice(0, index + 1))
    .map((value: BracketsRule[]) => value.reduce((previousValue: number, currentValue: BracketsRule) => currentValue.apply(previousValue), 0))
    .findIndex((value: number) => value === -1) + 1;    
console.log("DAY01 / PUZZLE 02: ", result)

