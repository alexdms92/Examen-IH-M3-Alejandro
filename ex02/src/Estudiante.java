/**
 * Clase que representa a un estudiante
 * Extiende de la clase Persona y agrega informacion sobre su carrera
 */

public class Estudiante extends Persona
{
/**
 * Carrera que cursa el estudiante
 */
private String carrera;

/**
 * Constructor de la clase Estudiante
 * 
 * @param nombre el nombre del estudiante
 * @param edad su edad
 * @param carrera la carrera que cursa
 */
public Estudiante(String nombre, int edad, String carrera)
{
    super(nombre, edad);
    this.carrera = carrera;
}

/**
 * Metodo que imprime un mensaje indicando que el estudiante esta estudiando su carrera
 */
public void estudiar()
{
    System.out.println(“Estudiando “ + carrera); //ERROR: comillas curvas " "; se deben usar o las comillas rectas " " o las simples ' '
}
}