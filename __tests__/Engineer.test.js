const Engineer = require("../lib/Engineer");
const mastermind = new Engineer('lance', '51479', 'lbass@ymail.com', 'lancebass79');

test('mastermind object', () => {
    expect(mastermind.name()).toBe('lance');
    expect(mastermind.id()).toBe('51479');
    expect(mastermind.email()).toBe('lbass@ymail.com');
    expect(mastermind.gitHubUsername()).toBe('lancebass79');
});

test('mastermind name', () => {
    expect(mastermind.name()).toBe('lance');
});

test('mastermind id', () => {
    expect(mastermind.id()).toBe('51479');
});

test('mastermind email', () => {
    expect(mastermind.email()).toBe('lbass@ymail.com');
});

test('mastermind github', () => {
    expect(mastermind.gitHubUsername()).toBe('lancebass79');
});

test('mastermind role', () => {
    expect(mastermind.getRole()).toBe('Engineer');
});