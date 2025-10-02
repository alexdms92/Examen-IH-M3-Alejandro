const {numeros,nombres } = require('./arrays');

// Tests para array
describe('Array numeros', () =>
{
    test('numeros tiene exactamente 5 elementos', () =>
        {
        expect(numeros).toHaveLength(5);
    });
});

// Tests para nombres
describe('Array nombres', () =>
{
    test('nombres contiene el valor "Elisenda"', () =>
        {
            expect(nombres).toContain("Elisenda");
        });

    test('nombres no contiene el valor "Rosa"', () =>
        {
        expect(nombres).not.toContain("Rosa");
        });
});