*/

let str = "a3b3c4d2e1";

function stringDecompression(string){
    let newArray = string.split('');
    let finalDecompressString = ''  ;

    for (let i = 0; i < newArray.length; i = i+2){
     let limit = parseInt(newArray[i+1]);
      console.log(limit);
        for (let j = 0; j < limit; j++) {
             finalDecompressString = finalDecompressString + newArray[i];
        } 
     

    }
    return finalDecompressString;
}

console.log(stringDecompression(str));
