const head = require("./head");

describe("head", () => {
    it(("should return head of a non-empty array"), () => {
        expect(head([1, 2, 3, 4])).toBe(1);
    });
    
    it(("should return null or undefined for an empty array"), () => {
        expect(head([])).toBe(undefined);
    });
});