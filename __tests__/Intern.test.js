const Intern = require('../lib/Intern');
const rookie = new Intern('aaron', '12787', 'acarter@ymail.com', 'Tampa');

test('rookie object', () => {
    expect(rookie.name()).toBe('aaron');
    expect(rookie.id()).toBe('12787');
    expect(rookie.email()).toBe('acarter@ymail.com');
    expect(rookie.school()).toBe('Tampa');
});

test('rookie name', () => {
    expect(rookie.name()).toBe('aaron');
});

test('rookie id', () => {
    expect(rookie.id()).toBe('12787');
});

test('rookie email', () => {
    expect(rookie.email()).toBe('acarter@ymail.com');
});

test('rookie school', () => {
    expect(rookie.school()).toBe('Tampa');
});

test('rookie role', () => {
    expect(rookie.getRole()).toBe('Intern');
});