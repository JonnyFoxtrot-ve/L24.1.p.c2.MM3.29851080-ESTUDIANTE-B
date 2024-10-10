import { Cl_estudiante } from "./Cl_estudiante.js";

export default class Cl_estudianteDeportista extends Cl_estudiante {
  constructor(nombre, acumNotas, cntMaterias, edad, deporte) {
    super(nombre, acumNotas, cntMaterias);
    this.edad = edad;
    this.deporte = deporte;
  }

  set edad(edad) {
    this._edad = +edad;
  }

  get edad() {
    return this._edad;
  }

  set deporte(deporte) {
    this._deporte = +deporte;
  }

  get deporte() {
    return this._deporte;
  }
  promedioNotas() {
    return this.acumNotas / this.cntMaterias;
  }
  admision() {
    if (this.deporte === 1) {
      if (this.promedioNotas() > 14 && this.edad >= 21) {
        return "es admitido en beisbol";
      } else {
        return "no es admitido en beisbol";
      }
    } else {
      if (this.promedioNotas() >= 12 && this.edad > 18) {
        return "es admitido en futbol";
      } else {
        return "no es admitido en futbol";
      }
    }
  }
}
