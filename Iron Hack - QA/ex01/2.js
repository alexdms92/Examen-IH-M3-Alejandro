//@ts-check
/**
 * 
 * @param {number} a el dividendo
 * @param {number} b el divisor
 * @return {number} devuelve el resultado de la division entre a y b
 * @throws {Error} devuelve error si el valor es 0
*/

function dividir(a, b)
{
    if (b === 0)
        {
            throw new Error(“No se puede dividir por cero.”);  //ERROR: comillas curvas " "; se deben usar o las comillas rectas " " o las simples ' '
        }
        return a / b;
}