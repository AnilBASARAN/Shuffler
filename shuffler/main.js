


function arrayShuffler(array){
    let newIndexes = []
    let a;
    while(newIndexes.length <= array.length-1){
      a =  Math.floor(Math.random() * (array.length-1 - 0 + 1) + 0);
      console.log(a)
      if(!newIndexes.includes(a)){
        newIndexes.push(a)
      }
      }
    let result = array.map((x,i)=> x = array[newIndexes[i]] );
    
    return result
    
    }
  
  
  console.log(shuffledIndex(["a","b","c",1]))
  
  
  
  /* 
  well like the function's name suggests....it shuffles arrays if needed :D