/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
 año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación
 pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
 */
class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    get edad(){
        return this._edad
    }
    set edad(nuevaEdad){
        this._edad = nuevaEdad
    }

    get dni(){
        return this._dni
    }
    set dni(nuevoDni){
        this._dni = nuevoDni
    }
    
    get sexo(){
        return this._sexo
    }
    set sexo(nuevoSexo){
        this._sexo = nuevoSexo
    }

    get peso(){
        return this._peso
    }
    set peso(nuevoPeso){
        this._peso = nuevoPeso
    }

    get altura(){
        return this._altura
    }
    set altura(nuevaAltura){
        this._altura = nuevaAltura
    }

    get anioDeNacimiento(){
        return this._anioDeNacimiento
    }
    set anioDeNacimiento(nuevoAnioNacimiento){
        this._anioDeNacimiento = nuevoAnioNacimiento
    }
 
mostrarGeneracion(){
    let generacion = '';
    let rasgoCaracteristico = '';
    this.anioDeNacimiento = inputAnioNacimiento.value;

    if (this.anioDeNacimiento >= 1997 && this.anioDeNacimiento <= 2012) {
        generacion = 'Generación Z';
        rasgoCaracteristico = 'Irreverencia';
        alert(`El año ${this.anioDeNacimiento} pertenece a la ${generacion} y su rasgo caracteristico es la ${rasgoCaracteristico}`);

      } else if (this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1996) {
        generacion = 'Generación Y';
        rasgoCaracteristico = 'Frustración';
        alert(`El año ${this.anioDeNacimiento} pertenece a la ${generacion} y su rasgo caracteristico es la ${rasgoCaracteristico}`);

      } else if (this.anioDeNacimiento >= 1965 && this.anioDeNacimiento <= 1980) {
        generacion = 'Generación X';
        rasgoCaracteristico = 'Obsesión por el éxito';
        alert(`El año ${this.anioDeNacimiento} pertenece a la ${generacion} y su rasgo caracteristico es la ${rasgoCaracteristico}`);

      } else if (this.anioDeNacimiento >= 1946 && this.anioDeNacimiento <= 1964) {
        generacion = 'Generación Baby Boom';
        rasgoCaracteristico = 'Ambición';
        alert(`El año ${this.anioDeNacimiento} pertenece a la ${generacion} y su rasgo caracteristico es la ${rasgoCaracteristico}`);

      } else if (this.anioDeNacimiento >= 1928 && this.anioDeNacimiento <= 1945) {
        generacion = 'Generación Silenciosa';
        rasgoCaracteristico = 'Austeridad';
        alert(`El año ${this.anioDeNacimiento} pertenece a la ${generacion} y su rasgo caracteristico es la ${rasgoCaracteristico}`);

      }
  
}

mayorDeEdad(){
    this.edad = inputEdad.value;
    if(this.edad < 18){
        alert ('Usted es menor de Edad');
    } else {
        alert ('Usted es mayor de Edad');
    }
}

mostrarDatos(){
    
        this.nombre = inputNombre.value;
        this.edad = inputEdad.value;
        this.dni = inputDni.value;
        this.sexo = inputSexo.value;
        this.peso = inputPeso.value;
        this.altura = inputAltura.value;
        this.anioDeNacimiento = inputAnioNacimiento.value;
    
        alert(`Nombre: ${this.nombre}\n Edad: ${this.edad}\n Dni: ${this.dni}\n Sexo: ${this.sexo}\n Peso: ${this.peso}\n Altura: ${this.altura}\n Año de Nacimiento: ${this.anioDeNacimiento}`)    
    }
}



const persona = new Persona()

const botonGeneracion  = document.getElementById('generacion');
let inputAnioNacimiento = document.getElementById('inputAnioNac')

botonGeneracion.addEventListener('click', function(){
    persona.mostrarGeneracion()

  })

  const botonEdad = document.getElementById('edad');
  let inputEdad = document.getElementById('inputEdad');

botonEdad.addEventListener('click', function(){
    persona.mayorDeEdad()
})

const botonDatos = document.getElementById('datos');
const inputNombre = document.getElementById('inputNom');
const inputDni = document.getElementById('inputDni');
const inputSexo = document.getElementById('inputSexo');
const inputPeso = document.getElementById('inputPeso');
const inputAltura = document.getElementById('inputAltura');
const mostarTodo = document.getElementById('mostar')

botonDatos.addEventListener('click', function(){
    persona.mostrarDatos()

})
