function saludar(nombre)
{
if (!nombre || nombre.trim() === “”)
    {
        return “Nombre no definido”;
    }
    return `Hola, ${nombre}!`;
}

module.exports = {saludar};