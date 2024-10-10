import Cl_estudianteDeportista from "./Cl_estudianteDeportista.js";

export default class Cl_main {
  constructor() {
    const estudianteD1 = new Cl_estudianteDeportista("Juan", 132, 8, 21, 1);
    const estudianteD2 = new Cl_estudianteDeportista("Felix", 110, 10, 20, 2);

    //salida para primer estudiante
    document.getElementById("salida").innerHTML += `Nombre del estudiante ${
      estudianteD1.nombre
    }<br> Acumulado de notas: ${
      estudianteD1.acumNotas
    }<br>Cantidad de materias: ${estudianteD1.cntMaterias}<br> Edad: ${
      estudianteD1.edad
    } <br>Deporte: ${
      estudianteD1.deporte
    }<br> Promedio de notas: ${estudianteD1.promedioNotas()}<br> ${
      estudianteD1.nombre
    } ${estudianteD1.admision()}<br><br>`;

    //salida para segundo estudiante
    document.getElementById("salida").innerHTML += `Nombre del estudiante ${
      estudianteD2.nombre
    }<br> Acumulado de notas: ${
      estudianteD2.acumNotas
    }<br> Cantidad de materias: ${estudianteD2.cntMaterias} <br>Deporte: ${
      estudianteD2.deporte
    }<br> Edad: ${
      estudianteD2.edad
    }<br> Promedio de notas: ${estudianteD2.promedioNotas()}<br> ${
      estudianteD2.nombre
    } ${estudianteD2.admision()}<br><br>`;
  }
}
