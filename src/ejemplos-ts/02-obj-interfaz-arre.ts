
interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumno:Alumno={
    nombre: 'Leonardo',
    email: 'leo@gmail.com',
    edad: 24,
    matricula: 18000241
}

let mascotas=['perro','gato','perico']

console.table(mascotas);
mascotas[1]='otro gato';
mascotas.push('perico verde')
console.table(mascotas);

let nuevoArre:(number|string)[]=[]
nuevoArre.push('RCR');
nuevoArre.push(87654);
