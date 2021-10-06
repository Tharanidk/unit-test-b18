var calculator = require('../calculator');
//calculator imported. it will include all the functions

test("adds 1 and 2 and return 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 5 and 2 and return 3", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test("multiply 1 and 2 and return 3", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

