const Employee = require("../lib/Employee");
const artisan = new Employee('britney', '120281', 'spearsB@ymail.com');

test('artisan info', () => {
    expect(artisan.name).toBe('britney');
    expect(artisan.id).toBe('120281');
    expect(artisan.email).toBe('spearsB@ymail.com');
});

test('artisan name method', () => {
    expect(artisan.getName()).toBe('britney');
});

test('artisan Id', () => {
    expect(artisan.getId()).toBe('120281');
});

test('artisan email', () => {
    expect(artisan.getEmail()).toBe('spearsB@yamil.com');
});

test('artisan role', () => {
    expect(artisan.getRole()).toBe('Employee');
});
