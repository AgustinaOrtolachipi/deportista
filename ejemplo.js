"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var utilidadesFechas = /** @class */ (function () {
    function utilidadesFechas(fechaString, formato) {
        this.fecha = (0, moment_1.default)(fechaString, formato);
    }
    utilidadesFechas.prototype.obtenerFechaFormateada = function () {
        return this.fecha.format('YYYY-MM-DD');
    };
    utilidadesFechas.prototype.obtenerDiaSemana = function () {
        return this.fecha.format('dddd');
    };
    utilidadesFechas.prototype.sumarDias = function (numDias) {
        this.fecha.add(numDias, 'days');
    };
    return utilidadesFechas;
}());
var objetoFecha = new utilidadesFechas('2023-07-31', 'YYYY-MM-DD');
console.log('Fecha formateada:', objetoFecha.obtenerFechaFormateada());
console.log('Dia de la semana:', objetoFecha.obtenerDiaSemana());
objetoFecha.sumarDias(7);
console.log('Nueva Fecha despues de sumar 7 dias:', objetoFecha.obtenerFechaFormateada());
