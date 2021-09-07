let hoursToPay=parseFloat(process.argv[2]);

let fares= [
    [0, 15, 60, 1, 1],
    [1, 7, 30, 5, 2],
    [2, 4, 15, 1, 3],
    [3, 2, 60, 1, 3]
]

var fare =[];
var minTotal=hoursToPay*60;
var diferen=[];
var newFares=[];
var fareToPrint=[];

for(let i=0;i<fares.length; i++ ){
    if(minTotal<fares[i][2]){
        fare[i]=fares[i][1];
        diferen[i]=fare[i];
        fareToPrint[i]="pase a salida";
    }else{
        // fare[i]=(((minTotal-fares[i][2])/60)*fares[i][1]);
        fare[i]=(((minTotal)/60)*fares[i][1]);
        diferen[i]=Math.floor(fare[i]);
        fareToPrint[i]=String(`${diferen[i]} `)
    }
    // var newFare=0;
    // var disc=fares[i][3];
    // for(let j=0;j<(disc);i++){
    //     newFare=newFare+fare[i];
    // }
    // newFares[i]=newfare;
   
}

console.log(`
Bloque   Horas               Tarifa                 Minutos cobrados por bloque       repeticiones en tarifa`);
for(let i=0;i<fares.length; i++ ){
    console.log(`${fares[i][0]}          ${hoursToPay}                 ${fareToPrint[i]}                           ${minTotal}        `)
}