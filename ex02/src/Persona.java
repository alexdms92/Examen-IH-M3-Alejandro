/**
 * Clase que representa a una persona con informacion basica
 * Contiene los atributos como y edad; y metodos para interactuar con los mismos
 */
public class Persona
{
    
/**
 * Nombre de la persona
 */
    private String nombre;
    
/**
 * Edad de la persona
 */
    private int edad;
    
/**
 * Constructor de la clase Persona
 * 
 * @param nombre el nombre de la persona
 * @param edad la edad de la persona
 */

    public Persona(String nombre, int edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    
/**
 * Metodo que imprime un mensaje de saludo con el nombre de la persona.
 */
    public void saludar()
    {
        System.out.println("Hola, me llamo " + nombre);
    }
    
/**
 * Metodo que verifica si la persona es mayor de edad.
 * 
 * @return true si la persona tiene 18 años o mas, false en caso contrario
 */
    public boolean esMayorDeEdad()
    {
        return edad >= 18;
    }
}