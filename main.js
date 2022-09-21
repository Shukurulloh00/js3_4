function option(attend,lenghts)  {
    if(typeof attend === "string" || typeof attend ==='number' && typeof lenghts === "string" || typeof lenghts ==='number' ){
    if(attend > 0 && lenghts > 0){
        if(attend >= lenghts){
Number(attend), Number(lenghts)
return true
    }else{
        return false
             }
        }
    }
}

console.log(option(30,10));