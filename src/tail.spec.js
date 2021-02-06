const tail = require("./tail");

describe("tail", () => {
    it(("should return tail of a non-empty array"), () => {
        expect(tail([1, 2, 3, 4])).toBe(1);
    });
    
    it(("should  undefined for an empty array"), () => {
        expect(tail([])).toBe(undefined);
    });
});