let array = [false,1,0,1,2,0,1,3,"a"]
let randarr = [false, 0,0,0,1,2,3,0]
let myArray = [0,false,3,4,0,5,0,0,4,2,15,2]
function moveZeros(arr) {
  let zeroArray = [];
  let notZeroArray = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0){
      zeroArray.push(arr[i])
    }else {
      notZeroArray.push(arr[i])
    }
  }
  return notZeroArray.concat(zeroArray)
};

console.log(moveZeros(array))
console.log(moveZeros(randarr))
console.log(moveZeros(myArray))

