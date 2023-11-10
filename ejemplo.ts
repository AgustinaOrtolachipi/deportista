import moment from "moment";
class utilidadesFechas {
    private fecha: moment.Moment;

    constructor(fechaString: string, formato: string){
        this.fecha= moment(fechaString, formato);
        }
        obtenerFechaFormateada(): string{
            return this.fecha.format('YYYY-MM-DD');
        }
        obtenerDiaSemana():string {
            return this.fecha.format('dddd');
        }
        sumarDias(numDias: number): void{
            this.fecha.add(numDias, 'days');
        }
    }

    const objetoFecha = new utilidadesFechas('2023-07-31', 'YYYY-MM-DD');
    console.log('Fecha formateada:', objetoFecha.obtenerFechaFormateada());
    console.log('Dia de la semana:', objetoFecha.obtenerDiaSemana());

    objetoFecha.sumarDias(7);
    console.log('Nueva Fecha despues de sumar 7 dias:', objetoFecha.obtenerFechaFormateada());
