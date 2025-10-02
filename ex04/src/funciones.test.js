const { multiplicar } = require('./multiplicar');
const { saludar } = require('./saludar');

// Tests para multiplicar
describe('Funcion multiplicar', () =>
{
    test('multiplicar(3, 4) devuelve 12.', () =>
        {
            expect(multiplicar(3, 4)).toBe(12);
        });
});

// Tests para saludar
describe('Funcion saludar', () =>
{
        test('saludar("Juan") devuelve "Hola, Juan!"', () =>
            {
                expect(saludar("Juan")).toBe("Hola, Juan!");
            });

            test('saludar("") devuelve "Nombre no definido"', () =>
                {
                    expect(saludar("")).toBe("Nombre no definido");
                });
});