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

export function run(value: string) : number {
    return [...value]
        .map((value: string) => parse(value))
        .reduce((previousValue: number, currentValue: BracketsRule) => currentValue.apply(previousValue), 0);
}

