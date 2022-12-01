// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed with Jane as the argument', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed with \'Alex\' as the argument', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed with \'Pat\' as the argument', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed without argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with true as the argument', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with null as the argument', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with and object as the argument', function() {
        expect(sayHello({})).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with an array as the argument', function() {
        expect(sayHello([])).toBe("Hello, World!");
    });
})

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when executed with the numeral 5 as the argument', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when executed with string literal \'5\' as the argument', function() {
        expect(isFive('5')).toBe(true);
    });
    it('should return false when executed with an object as the argument', function() {
        expect(isFive({})).toBe(false);
    });
    it('should return false when executed with an array as the argument', function() {
        expect(isFive([])).toBe(false);
    });
    it('should return false when executed with null as the argument', function() {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when executed with no argument', function() {
        expect(isFive()).toBe(false);
    });
});
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return true when executed with the numeral 2 as the argument', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with the numeral -4 as the argument', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with the numeral 3 as the argument', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with the string literal \'banana\' as the argument', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when executed with the string literal \'8\' as the argument', function() {
        expect(isEven('8')).toBe(true);
    });
    it('should return false when executed with Infinity as the argument', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with true as the argument', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when executed with false as the argument', function() {
        expect(isEven(false)).toBe(false);
    });
})
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when executed with \'a\' as the argument', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when executed with \'a\' as the argument', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when executed with \'y\' as the argument', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when executed with 4 as the argument', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed with true as the argument', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when executed with false as the argument', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when executed with \'banana\' as the argument', function() {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when executed with \'aeiou\' as the argument', function() {
        expect(isVowel('aeiou')).toBe(false);
    });

})