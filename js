//declaración variables 

//var,let, const, sin nada
/**
 VAR
var a = 5;
var b = 7;
var c = a+b;

console.log(c)
  c = 15;
 console.log(c)
  
LET
let a = 5;
let b = 7;
let c = a+b;
 
 console.log(c)
   c = 15;
  console.log(c)
  //se puede reasignar valores pero no redeclarar varibles
 let c = 20;
 

 //const es el uso mas restrictivo para declarar varibles

const a = 5;
const b = 7;
const c = a+b;
 
 console.log(c)
   c = 15;
  console.log(c)


 // const se utiliza mucho para declarar funciones y arreglos 

 // complicar las declaraciones utilizando variables

 function frutas(){
    if(true){
        var fruta1="Avocado";
        let fruta2="Banana";
        const fruta3="Coco";
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
 }
 frutas();



//problema con var
//HOISTING O ALZAMIENTO

function escogerRopa(haceFrio){
    if(haceFrio){
        var congelado="Ponte una chaqueta";
    }
    else{
        var quemando="ponte algo fresco";
        console.log();
    }
}
escogerRopa(false);


//FUNCIONES FLECHA

const suma = (a,b) => {return a+b}
console.log(suma(7,5));


//TEMPLATE LITERALS

const nombre ="Juan";
const saludoo ="Buenos días "+ nombre;
console.log(saludo);

//a nivel de JS ahora se utliza backsticks
const saludo =`Buenos días ${nombre}`;
console.log(saludo);


//DESESTRUCTURACIÓN

const punto = [10,25,-34];
const x = punto [0];
const y = punto[1];
const z = punto[2];

console.log(`x:${x},y:${y},z:${z}`);


const aprendiz ={
    "id":1,
    "nombre":"Juan",
    "apellido":"Rodríguez"
}
const{nombre,apellido}=aprendiz;
console.log(nombre);


//USO DE REST

const estado="Formación";

const aprendizSena={...aprendiz,estado}//desagrega el objeto

console.log(aprendizSena)

const almuerzo = ["Avocado","Huevo","Lentejas","Papa","Mote","Mondongo"];
const [primero,segundo,...resto]=almuerzo;
console.log(primero,segundo,resto);


//CICLOS FOR
 const numeros=[0,1,2,3,4,5,6,7,8,9,10];

 //forma tradicional
 //definir contador y saber el tamaño del arreglo
 for(let i =0;i<numeros,length;i++){
    console.log(numeros[i]);
 }
//solo para arreglos
 for(let index in numeros){
    console.log(numeros[index]);
 }
//for ... of
//el mas corto y sirve para todos los iterables:arreglos,conjuntos(set),etc
 for (const numero of numeros){
    console.log(numero);
 }
*/
function suma (a,b, callback){
    let c = a+b;
    callback(c);
}
function mostrarMensaje(texto){
    console.log(texto);
}
suma(5,7,mostrarMensaje);


//Ejemplo de callback en arreglos

const numeros=[0,1,2,3,4,5,6,7,8,9,10]; 

// Aplica la funcion a cada elemento del arreglopor iteracion
numeros.forEach((n)=>console.log(n**2));

//consultar arreglo.map() y arreglo.filter()

//set timeout demora el tiempo en que se tarda en ejecutar una funcion

function incrementarUno(a,callback){
    setTimeout(()=>{
        a+=1;
        console.log(`El resultado es ${a}`);
        callback(a);
    },2000);
    
}
incrementarUno(7,(a)=>{console.log("El resultado total es "+a)});


//funciona pero es muy largo
function sumarCinco(a,callback){
    setTimeout(()=>{
        a+=1;
        console.log(`El resultado es ${a}`);
    },3000);
    setTimeout(()=>{
        a+=1;
        console.log(`El resultado es ${a}`);   
    },3000);
    setTimeout(()=>{
        a+=1;
        console.log(`El resultado es ${a}`);
    },3000);
    setTimeout(()=>{
        a+=1;
        console.log(`El resultado es ${a}`);
    },3000);
    setTimeout(()=>{
        a+=1;
        console.log(`El resultado es ${a}`);
        callback(a);
    },3000);
}
sumarCinco(7,(a)=>{console.log("El resultado total es "+a)});


//PROMESAS

//las promesas retornan algo cuando la promesa se cumple y tambien cuando no se cumple
// reescribir funcion suma como una promesa

//reject rechaza la promesa
//resolve resuelve la promesa
//then se ejecuta cuando la promesa se cumple
//catch se ejecuta cuando la promesa no se cumple

//Producir código
function suma (a,b){
return new Promise((resolve,reject)=>{
    //cuando no se puede hacer la suma
    if(typeof a !=="number" || typeof b !=="number"){
        reject(new Error("No se pudo realizar la suma"));
    }
    else {
        resolve(a+b);
    }
    
});
}
//Consumir código
suma(7,'')
.then(resultado=>console.log(resultado))//en el caso del resolve
.catch(error=>console.error(error.message));//en el caso del reject


//ASYNC


async function suma (a,b){
    
    if(typeof a !=="number" || typeof b !=="number"){
            throw new Error("No se pudo realizar la suma");
        }
        else {
            return a+b;
        }
        
    };
    suma(7,'')
.then(resultado=>console.log(resultado))
.catch(error=>console.error(error.message));
    */

