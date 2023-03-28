const arr = [1,2,3,4,5]

// console.log(arr.every((element,index,array) => {return element > 0}))
console.log(arr.every(element => element > 0))

let flag = true;
for(let i = 0; i<arr.length; i++){
  if(arr[i] < 0){
    flag = false;
    break;
  }
}
console.log(flag)