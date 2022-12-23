function sumArray(array) {
    if(array === null || array === "" || array.length < 2){
        return 0;
    }
    let sum = 0;
    let max = Math.max(...array);
    let min = Math.min(...array);
    
    for(i = 0 ; i < array.length ; i++){
      
      sum = sum + array[i];
    } 

     sum = sum - min - max; 
          
    return sum
}
let result = sumArray(null)

console.log(result)