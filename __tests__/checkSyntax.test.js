import checkSyntax from "../src/Fizz-buzz/checkSyntax";

test('First task`s test', () => {
    expect(checkSyntax("---(++++)----")).toBe(0);
    expect(checkSyntax("")).toBe(0);
    expect(checkSyntax("before ( middle []) after ")).toBe(0);
    expect(checkSyntax(") (")).toBe(1);
    expect(checkSyntax("} {")).toBe(1);
    expect(checkSyntax("<(   >)")).toBe(1);
    expect(checkSyntax("(  [  <>  ()  ]  <>  )")).toBe(0);
    expect(checkSyntax("   (      [)")).toBe(1);
});

