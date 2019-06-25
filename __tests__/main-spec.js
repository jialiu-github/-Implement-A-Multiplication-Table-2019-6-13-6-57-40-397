// ## Task 1 Should return null when start number is biger then end number.

// Given the start number is 4 and the end number is 2
// When I execute create multiplication method
// Then the method will return null

const createMultiplicationTable = require('../src/main.js')

it('Should return null when start number is biger then end number', () => {
    const startNumber = 11;
    const endNumber = 2;
    expect(createMultiplicationTable(startNumber, endNumber)).toBeNull();
});
// ## Task 2 Should return null when start number is 0

// Given the start number is 0 and then end number is 2
// When I execute create multiplication method
// Then the method will return null

it('should return null when start number is 0', () => {
    const startNumber = 0;
    expect(createMultiplicationTable(startNumber, 2)).toBeNull();
})
// ## Task 3 Should return null when end number is 1001

// Given the start number is 1 and the end number is 1001
// When I execute create multiplication method
// Then the mehtod will reurn null

it('should return null when end number is 1001', () => {
    const endNumber = 1001;
    expect(createMultiplicationTable(1, endNumber)).toBeNull();
})

// ## Task 4 Should return 1x1 when start number is 1 and end number is 1 (Driven just one row)

// Given the start number is 1 and then end number is 1
// When I execute create multiplication method
// Then the mehthod will return 1*1=1

it('should return 1*1=1 when start number is 1 and end number is 1', () => {
    const startNumber = 1;
    const endNumber = 1;
    expect(createMultiplicationTable(startNumber, endNumber)).toBe("1*1=1");
})

// ## Task 5 Should return two rows when start number is 1 and end number is 2 (Driven multiple rows)

// Given the start number is 1 and the end number is 2
// When I execute create multiplication method
// Then the method will return two rows as following:
// 1*1=1
// 1*2=2 2*2=4

it('should return two rows when start number is 1 and end number is 2', () => {
    const startNumber = 1;
    const endNumber = 2;
    expect(createMultiplicationTable(startNumber, endNumber)).toBe("1*1=1\n1*2=2 2*2=4");
})

// ## Task 6 Should return part of multiplication table when start number is 2 and end number is 4 (Driven part of multiplication table)

// Given the start number is 2 and the end number is 4
// When I execute create multiplication method
// Then the method will return part of multiplication table as following:
// 2*2=4 
// 2*3=6 3*3=9
// 2*4=8 3*4=12 4*4=16

it('should return part of multiplication table when start number is 2 and end number is 4', () => {
    const startNumber = 2;
    const endNumber = 4;
    expect(createMultiplicationTable(startNumber, endNumber)).toBe("2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16");
})