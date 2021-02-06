const map = require('./map');

 describe('Implements map function', () => {

     it('map([1,2,3], cube) should give [1,8,27]', () => {
        const cube =(num) => {
         return num * num * num;
        }
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
     });
     it('map([], cube) should give []', () => {
        const cube = (num) => {
         return num * num * num;
        }
        expect(map([],cube)).toEqual([]);
     });
     it('map([1,2,3], identity) should give [1,2,3]', () => {
        const identity = (value) => {
         return value;
        }
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
     });
     it('map([a{x : 10}],someObject => someObject.x + 1) -> [11]', () => {
        expect(map([{x : 10}], someObject=>someObject.x+1)).toEqual([11]);
     });

 })
