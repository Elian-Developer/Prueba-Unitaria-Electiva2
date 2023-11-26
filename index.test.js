const mensajeSaludo = require('./index');

test('Prueba del mensaje de aludo', () => {
    expect(mensajeSaludo()).toBe('Hello Elian Baez E.');
});