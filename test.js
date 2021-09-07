function combinations(posArray){

    let retVal= posArray.reduce((acc,cur)=>acc.concat(acc.map(d=>cur.concat(d))),[[]]);
    let result = retVal.filter((item, index)=>{
        return retVal.indexOf(item)==index
    })
    return result
}

try{
   let word = String(process.argv[2]);
   let newKind = word.split('');
   let wordReturned=combinations(newKind)
    console.log(wordReturned);
}catch(e){
    console.log(`Error en la operacion: ${e.message} `);
}
