// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Test 1- phone number
// Correct-output
test('858-532-2312 is a valid phone number', () => {
	expect(functions.isPhoneNumber("858-532-2312")).toBe(true); 
});

test('958-532-2222 is a valid phone number', () => {
	expect(functions.isPhoneNumber("958-532-2222")).toBe(true); 
});

// Wrong-output
test('934-342-234Q is not a valid phone number', () => {
	expect(functions.isPhoneNumber("934-342-234Q")).toBe(false); 
});

test('3444-233-555 is not a valid phone number', () => {
	expect(functions.isPhoneNumber("3444-233-555")).toBe(false); 
});

// Test 2- Email
// Correct-output
test('me@p.zP is a valid email', () => {
	expect(functions.isEmail("me@p.zP")).toBe(true); 
});

test('wait@m.acc is a valid email', () => {
	expect(functions.isEmail(`wait@m.acc`)).toBe(true); 
});

// Wrong-output
test('9+2@qq.com is not a valid email', () => {
	expect(functions.isEmail("9+2@qq.com")).toBe(false); 
});

test('\\\\@ucsb.edu is not a valid email', () => {
	expect(functions.isEmail("\\\\@ucsb.edu")).toBe(false); 
});

// Test 3- Password
// Correct-output
test('lll3000r is a valid strong password', () => {
	expect(functions.isStrongPassword("lll3000r")).toBe(true); 
});

test('p_r32iii2 is a valid strong password', () => {
	expect(functions.isStrongPassword(`p_r32iii2`)).toBe(true); 
});

// Wrong-output
test('12345 is not a valid strong password', () => {
	expect(functions.isStrongPassword("12345")).toBe(false); 
});

test('1+2=10 is not a valid strong password', () => {
	expect(functions.isStrongPassword("1+2=10")).toBe(false); 
});

// Test 4- Date
// Correct-output
test('11/60/2000 is a valid date', () => {
	expect(functions.isDate("11/60/2000")).toBe(true); 
});

test('99/20/5000 is a valid date', () => {
	expect(functions.isDate(`99/20/5000`)).toBe(true); 
});

// Wrong-output
test('1/2/3 is not a valid date', () => {
	expect(functions.isDate("1/2/3")).toBe(false); 
});

test('1/01/201 is not a valid date', () => {
	expect(functions.isDate("1/01/201")).toBe(false); 
});

// Test 5- HexColor
// Correct-output
test('AAC2FF is a valid hex color', () => {
	expect(functions.isHexColor("AAC2FF")).toBe(true); 
});

test('AAC2FF is a valid hex color', () => {
	expect(functions.isHexColor("AAC2FF")).toBe(true); 
});

// Wrong-output
test('M02 is not a valid hex color', () => {
	expect(functions.isHexColor("M02")).toBe(false); 
});

test('JQK is not a valid hex color', () => {
	expect(functions.isHexColor("JQK")).toBe(false); 
});