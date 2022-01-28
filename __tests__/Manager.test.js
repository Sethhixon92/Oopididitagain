const Manager = require("../lib/Manager");
const boss = new Manager('justin', '13181', 'jtimberlake@ymail.com', '2007');

test('boss object', () => {
   expect(boss.name).toBe('justin');
   expect(boss.id).toBe('13181');
   expect(boss.email).toBe("jtimberlake@ymail.com");
   expect(boss.officeNumber).toBe('2007');
});

test('boss name', () => {
    expect(boss.getName()).toBe('justin');
});

test('boss id', () => {
    expecg(boss.getId()).toBe('13181');
});

test('boss email', () => {
    expect(boss.getEmail()).toBe('jtimberlake@ymail.com');
});

test('boss office number', () => {
    expect(boss.officeNumber()).toBe('2007');
});

test('boss role', () => {
    expect(boss.getRole()).toBe('Manager');
});