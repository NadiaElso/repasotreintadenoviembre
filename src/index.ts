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
let notasalumno:any[]=[];
notasalumno[0]=[7,6,9,5,8,7,10,4,8,8]
function desaproboenmes(array:any[]=[]) {
  

  for (let index =0; index < array.length ; index++) {
    
    if (array[index]<6|| array[index]===5){
    
       
      console.log(`Desaprobo en el mes ${index+3} la nota es ${array[index]}`)
    }
    
    
  }
  return desaproboenmes
  }
desaproboenmes(notasalumno[0]=[7,6,9,5,8,7,10,4,8,8])



function mesmenornota(array:any[]=[]) {
  for (let index = 0; index < array.length; index++) {
   switch(true) {
     case (array[index]<2):
       console.log(`La nota menor es en el mes ${[index+3]} y es ${array[index]}`)
       break;
       case (array[index]<3):
         console.log(`La nota menor es en el mes ${[index+3]} y es ${array[index]}`)
         break;
         case (array[index]<4):
           console.log(`La nota menor es en el mes ${[index+3]} y es ${array[index]}`)
           break;
           case (array[index]<5):
             console.log(`La nota menor es en el mes ${[index+3]} y es ${array[index]}`)
             break;
             case (array[index]<6):
               console.log(`La nota menor es en el mes ${[index+3]} y es ${array[index]}`)
               break;
     default:
       break;
   }
     
        }
            return mesmenornota
          }
 mesmenornota((notasalumno[0]=[7,6,9,5,8,7,10,4,8,8]))





 function mayornota(array:any[]=[]) {
   for (let index = 0; index < array.length; index++) {
     
     if (array[index]>9&&array[index]<8) {
      console.log(`La nota mayor es en el mes ${[index+3]} y es ${array[index]}`)
     } else if (array[index]>8&&array[index]<7){
      console.log(`La nota mayor es en el mes ${[index+3]} y es ${array[index]}`)
     }else if(array[index]>9&&array[index]<10){
      console.log(`La nota mayor es en el mes ${[index+3]} y es ${array[index]}`)
     }else if(array[index]===10){
      console.log(`La nota mayor es en el mes ${[index+3]} y es ${array[index]}`)
     }
   }
   return mayornota
 }

 mayornota((notasalumno[0]=[7,6,9,5,8,7,10,4,8,8]))
           
         
         
    function promediodelalumno(array:any[]=[]) {
      let promedio:number;
      promedio=0;
      for (let index = 0; index < array.length; index++) {
    
        promedio+=array[index]/array.length

      }
      
      console.log("El promedio del alumno es:"+promedio);
      return promediodelalumno
    }  
    
    promediodelalumno ((notasalumno[0]=[7,6,9,5,8,7,10,4,8,8]))
      
     
       
  

