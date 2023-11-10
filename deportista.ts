class Deportista {
    protected nombre: string;
    private edad: number;
    public equipo: string;

    constructor(nombre: string, edad: number, equipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.equipo = equipo;
    }

    entrenar() {
        console.log(`${this.nombre} está entrenando.`);
    }

    descansar() {
        console.log(`${this.nombre} está descansando.`);
    }
}

class Futbolista extends Deportista {
    private posicion: string;

    constructor(nombre: string, edad: number, equipo: string, posicion: string) {
        super(nombre, edad, equipo);
        this.posicion = posicion;
    }

    jugarPartido() {
        console.log(`${this.nombre} está jugando un partido como ${this.posicion}.`);
    }
}

class Nadador extends Deportista {
    private estiloPreferido: string;

    constructor(nombre: string, edad: number, equipo: string, estiloPreferido: string) {
        super(nombre, edad, equipo);
        this.estiloPreferido = estiloPreferido;
    }

    nadar() {
        console.log(`${this.nombre} está nadando con su estilo preferido, ${this.estiloPreferido}.`);
    }
}

class Equipo {
    private nombreEquipo: string;

    constructor(nombreEquipo: string) {
        this.nombreEquipo = nombreEquipo;
    }

    presentarEquipo() {
        console.log(`Bienvenidos al equipo ${this.nombreEquipo}!`);
    }
}

class JugadorBaloncesto extends Deportista {
    private posicion: string;
    private equipo: Equipo;

    constructor(nombre: string, edad: number, equipo: Equipo, posicion: string) {
        super(nombre, edad, equipo.nombreEquipo);
        this.posicion = posicion;
        this.equipo = equipo;
    }

    jugarPartido() {
        console.log(`${this.nombre} está jugando un partido de baloncesto como ${this.posicion}.`);
    }

    unirseEquipo() {
        this.equipo.presentarEquipo();
    }
}

// Ejemplo de uso
const equipoFutbol = new Equipo("Equipo de Fútbol FC");
const jugadorFutbol = new Futbolista("Lionel Messi", 34, equipoFutbol, "Delantero");
jugadorFutbol.entrenar();
jugadorFutbol.jugarPartido();

const nadador = new Nadador("Michael Phelps", 36, "Equipo de Natación USA", "Estilo Libre");
nadador.nadar();

const equipoBaloncesto = new Equipo("Equipo de Baloncesto Lakers");
const jugadorBaloncesto = new JugadorBaloncesto("LeBron James", 37, equipoBaloncesto, "Ala-Pívot");
jugadorBaloncesto.entrenar();
jugadorBaloncesto.jugarPartido();
jugadorBaloncesto.unirseEquipo();
