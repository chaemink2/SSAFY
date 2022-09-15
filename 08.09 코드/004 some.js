const arr = [1,2,3,4,5];

// arr.some((element,index,array) => element > 3) 사용법
console.log(arr.some(element => element > 3))

let flag = false;
for(let i = 0; i<arr.length; i++){
  if(arr[i] > 3){
    flag = true;
    break;
  }
}
console.log(flag)