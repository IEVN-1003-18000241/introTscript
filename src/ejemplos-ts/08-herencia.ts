
class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(nom:string,edad:number){
        this.nombre=nom;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}
class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad);
        this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`)
    }
    pagaImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.sueldo} debe pagar impuestos`);
        else
        console.log(`${this.sueldo} no debe pagar impuestos`);
    }
}
const persona3=new Persona3('Juan',24);
persona3.imprimir();

const empleado1=new Empleado('Ana',21,7000);
empleado1.imprimir();
empleado1.pagaImpuestos();