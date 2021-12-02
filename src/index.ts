//Una materia de la carrera de Ingeniería
//de Sistemas exige la entrega de un trabajo
//práctico cada mes del año académico.
//Este arreglo contiene las notas de un alumno
//para los meses de marzo a diciembre:
//notasAlumno: [7, 6, 9, 5, 8, 7, 10, 4, 8]
//1) Teniendo en cuenta que se aprueba con 6,
// crear una función que devuelva en que meses
//desaprobó el alumno.
//2) Crear una función que devuelva en que mes
// obtuvo menor nota el alumno y cuál fue la nota.
//3) Crear una función que devuelva en que mes
// obtuvo mayor nota el alumno y cuál fue la nota.
//4) Crear una función que devuelva el promedio
//del alumno
let notasalumno: any[] = [];
notasalumno[0] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];
function desaproboenmes(array: any[] = []) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 6 || array[index] === 5) {
      console.log(
        `Desaprobo en el mes ${index + 3} la nota es ${array[index]}`
      );
    }
  }
  return desaproboenmes;
}
desaproboenmes((notasalumno[0] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]));

function mesmenornota(array: any[] = []) {
  let cantidad1, cantidad2, cantidad3, cantidad4, cantidad5: number;
  cantidad1 = 0;
  cantidad2 = 0;
  cantidad3 = 0;
  cantidad4 = 0;
  cantidad5 = 0;

  for (let index = 0; index < array.length; index++) {
    while (array[index] < 6) {
      if (array[0] === 1) {
        cantidad1 = 1;
      }
      if (array[0] === 2) {
        cantidad2 = 2;
      }
      if (array[0] === 3) {
        cantidad3 = 3;
      }
      if (array[0] === 4) {
        cantidad4 = 4;
      }
      if (array[0] === 5) {
        cantidad1 = 5;
      }
      if (array[1] === 1) {
        cantidad1 = 1;
      }
      if (array[1] === 2) {
        cantidad2 = 2;
      }
      if (array[1] === 3) {
        cantidad3 = 3;
      }
      if (array[1] === 4) {
        cantidad4 = 4;
      }
      if (array[1] === 5) {
        cantidad5 = 5;
      }
      if (array[2] === 1) {
        cantidad1 = 1;
      }
      if (array[2] === 2) {
        cantidad2 = 2;
      }
      if (array[2] === 3) {
        cantidad3 = 3;
      }
      if (array[2] === 4) {
        cantidad4 = 4;
      }
      if (array[2] === 5) {
        cantidad5 = 5;
      }
      if (array[3] === 1) {
        cantidad1 = 1;
      }
      if (array[3] === 2) {
        cantidad2 = 2;
      }
      if (array[3] === 3) {
        cantidad3 = 3;
      }
      if (array[3] === 4) {
        cantidad4 = 4;
      }
      if (array[3] === 5) {
        cantidad5 = 5;
      }
      if (array[4] === 1) {
        cantidad1 = 1;
      }
      if (array[4] === 2) {
        cantidad2 = 2;
      }
      if (array[4] === 3) {
        cantidad3 = 3;
      }
      if (array[4] === 4) {
        cantidad4 = 4;
      }
      if (array[4] === 5) {
        cantidad5 = 5;
      }
      if (array[5] === 1) {
        cantidad1 = 1;
      }
      if (array[5] === 2) {
        cantidad2 = 2;
      }
      if (array[5] === 3) {
        cantidad3 = 3;
      }
      if (array[5] === 4) {
        cantidad4 = 4;
      }
      if (array[5] === 5) {
        cantidad5 = 5;
      }
      if (array[6] === 1) {
        cantidad1 = 1;
      }
      if (array[6] === 2) {
        cantidad2 = 2;
      }
      if (array[6] === 3) {
        cantidad3 = 3;
      }
      if (array[6] === 4) {
        cantidad4 = 4;
      }
      if (array[6] === 5) {
        cantidad5 = 5;
      }
      if (array[7] === 1) {
        cantidad1 = 1;
      }
      if (array[7] === 2) {
        cantidad2 = 2;
      }
      if (array[7] === 3) {
        cantidad3 = 3;
      }
      if (array[7] === 4) {
        cantidad4 = 4;
      }
      if (array[7] === 5) {
        cantidad5 = 5;
      }
      if (array[8] === 1) {
        cantidad1 = 1;
      }
      if (array[8] === 2) {
        cantidad2 = 2;
      }
      if (array[8] === 3) {
        cantidad3 = 3;
      }
      if (array[8] === 4) {
        cantidad4 = 4;
      }
      if (array[8] === 5) {
        cantidad5 = 5;
      }
      if (array[9] === 1) {
        cantidad1 = 1;
      }
      if (array[9] === 2) {
        cantidad2 = 2;
      }
      if (array[9] === 3) {
        cantidad3 = 3;
      }
      if (array[9] === 4) {
        cantidad4 = 4;
      }
      if (array[9] === 5) {
        cantidad5 = 5;
      }
      index++;
    }
    if (cantidad1 && cantidad2 && cantidad3 && cantidad4 && cantidad5) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad1 && cantidad2 && cantidad3 && cantidad4) {
      console.log("La nota menor es " + cantidad1);
    } else if (cantidad1 && cantidad2 && cantidad3) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad1 && cantidad2) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad1 && cantidad3) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad1 && cantidad4) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad1 && cantidad5) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad1) {
      console.log("La nota menor es" + cantidad1);
    } else if (cantidad2 && cantidad3 && cantidad4 && cantidad5) {
      console.log("La nota menor es" + cantidad2);
    } else if (cantidad2 && cantidad3 && cantidad4) {
      console.log("La nota menor es" + cantidad2);
    } else if (cantidad2 && cantidad3) {
      console.log("La nota menor es" + cantidad2);
    } else if (cantidad2 && cantidad5) {
      console.log("La nota menor es" + cantidad2);
    } else if (cantidad2 && cantidad4) {
      console.log("La nota menor es" + cantidad2);
    } else if (cantidad2) {
      console.log("La nota menor es" + cantidad2);
    } else if (cantidad3 && cantidad4 && cantidad5) {
      console.log("La nota menor es" + cantidad3);
    } else if (cantidad3 && cantidad4) {
      console.log("La nota menor es" + cantidad3);
    } else if (cantidad3 && cantidad5) {
      console.log("La nota menor es" + cantidad3);
    } else if (cantidad3) {
      console.log("La nota menor es" + cantidad3);
    } else if (cantidad4 && cantidad5) {
      console.log("La nota menor es" + cantidad4);
    } else if (cantidad4) {
      console.log("La nota menor es" + cantidad4);
    } else if (cantidad5) {
      console.log("La nota menor es" + cantidad5);
    }
  }
  return mesmenornota;
}

mesmenornota((notasalumno[0] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]));

function mayornota(array: any[] = []) {
  let cantidad6, cantidad7, cantidad8, cantidad9, cantidad10: number;
  cantidad6 = 0;
  cantidad7 = 0;
  cantidad8 = 0;
  cantidad9 = 0;
  cantidad10 = 0;
  for (let index = 0; index < array.length; index++) {
    while (array[index] > 6) {
      if (array[0] === 6) {
        cantidad6 = 6;
      }
      if (array[0] === 7) {
        cantidad7 = 7;
      }
      if (array[0] === 8) {
        cantidad8 = 8;
      }
      if (array[0] === 9) {
        cantidad9 = 9;
      }
      if (array[0] === 10) {
        cantidad10 = 10;
      }
      if (array[1] === 6) {
        cantidad6 = 6;
      }
      if (array[1] === 7) {
        cantidad7 = 7;
      }
      if (array[1] === 8) {
        cantidad8 = 8;
      }
      if (array[1] === 9) {
        cantidad9 = 9;
      }
      if (array[1] === 10) {
        cantidad10 = 10;
      }
      if (array[2] === 6) {
        cantidad6 = 6;
      }
      if (array[2] === 7) {
        cantidad7 = 7;
      }
      if (array[2] === 8) {
        cantidad8 = 8;
      }
      if (array[2] === 9) {
        cantidad9 = 9;
      }
      if (array[2] === 10) {
        cantidad10 = 2;
      }
      if (array[3] === 6) {
        cantidad6 = 6;
      }
      if (array[3] === 7) {
        cantidad7 = 7;
      }
      if (array[3] === 8) {
        cantidad8 = 8;
      }
      if (array[3] === 9) {
        cantidad9 = 9;
      }
      if (array[3] === 10) {
        cantidad10 = 10;
      }
      if (array[4] === 6) {
        cantidad6 = 6;
      }
      if (array[4] === 7) {
        cantidad7 = 7;
      }
      if (array[4] === 8) {
        cantidad8 = 8;
      }
      if (array[4] === 9) {
        cantidad9 = 9;
      }
      if (array[4] === 10) {
        cantidad10 = 10;
      }
      if (array[5] === 6) {
        cantidad6 = 6;
      }
      if (array[5] === 7) {
        cantidad7 = 7;
      }
      if (array[5] === 8) {
        cantidad8 = 8;
      }
      if (array[5] === 9) {
        cantidad9 = 9;
      }
      if (array[5] === 10) {
        cantidad10 = 10;
      }
      if (array[6] === 6) {
        cantidad6 = 6;
      }
      if (array[6] === 7) {
        cantidad7 = 7;
      }
      if (array[6] === 8) {
        cantidad8 = 8;
      }
      if (array[6] === 9) {
        cantidad9 = 9;
      }
      if (array[6] === 10) {
        cantidad10 = 10;
      }
      if (array[7] === 6) {
        cantidad6 = 6;
      }
      if (array[7] === 7) {
        cantidad7 = 7;
      }
      if (array[7] === 8) {
        cantidad8 = 8;
      }
      if (array[7] === 9) {
        cantidad9 = 9;
      }
      if (array[7] === 10) {
        cantidad10 = 10;
      }
      if (array[8] === 6) {
        cantidad6 = 6;
      }
      if (array[8] === 7) {
        cantidad7 = 7;
      }
      if (array[8] === 8) {
        cantidad8 = 8;
      }
      if (array[8] === 9) {
        cantidad9 = 9;
      }
      if (array[8] === 10) {
        cantidad10 = 10;
      }
      if (array[9] === 6) {
        cantidad6 = 6;
      }
      if (array[9] === 7) {
        cantidad7 = 7;
      }
      if (array[9] === 8) {
        cantidad8 = 8;
      }
      if (array[9] === 9) {
        cantidad9 = 9;
      }
      if (array[9] === 10) {
        cantidad10 = 10;
      }

      index++;
    }
    if (cantidad6 && cantidad7 && cantidad8 && cantidad9 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad7 && cantidad8 && cantidad9 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad8 && cantidad9 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad9 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad8 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad7 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad6 && cantidad10) {
      console.log("La nota mayor es:" + cantidad10);
    } else if (cantidad6 && cantidad7 && cantidad8 && cantidad9) {
      console.log("La nota mayor es:" + cantidad9);
    } else if (cantidad7 && cantidad8 && cantidad9) {
      console.log("La nota mayor es:" + cantidad9);
    } else if (cantidad8 && cantidad9) {
      console.log("La nota mayor es:" + cantidad9);
    } else if (cantidad6 && cantidad9) {
      console.log("La nota mayor es:" + cantidad9);
    } else if (cantidad7 && cantidad9) {
      console.log("La nota mayor es:" + cantidad9);
    } else if (cantidad9) {
    } else if (cantidad6 && cantidad7 && cantidad8) {
      console.log("La nota mayor es:" + cantidad8);
    } else if (cantidad7 && cantidad8) {
      console.log("La nota mayor es:" + cantidad8);
    } else if (cantidad6 && cantidad8) {
      console.log("La nota mayor es:" + cantidad8);
    } else if (cantidad8) {
      console.log("La nota mayor es:" + cantidad8);
    } else if (cantidad6 && cantidad7) {
      console.log("La nota mayor es:" + cantidad8);
    } else if (cantidad7) {
      console.log("La nota mayor es:" + cantidad7);
    } else if (cantidad6) {
      console.log("La nota mayor es:" + cantidad6);
    }
  }
  return mayornota;
}

mayornota((notasalumno[0] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]));

function promediodelalumno(array: any[] = []) {
  let promedio: number;
  promedio = 0;
  for (let index = 0; index < array.length; index++) {
    promedio += array[index] / array.length;
  }

  console.log("El promedio del alumno es:" + promedio);
  return promediodelalumno;
}

promediodelalumno((notasalumno[0] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]));
