

function sumar():void{
    console.log(3+7);
}

sumar()

function sumar2(a:number,b:number):number{
    
    return (a+b)
}
const resultado = sumar2(6,9)
console.log(resultado)

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascotas,x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre: "Miauricio",
    edad: 5,
    mostrarEdad(): void {
        console.log('La edad es; ',this.edad);
    }
}
calcular(nuevaMascota,3)

