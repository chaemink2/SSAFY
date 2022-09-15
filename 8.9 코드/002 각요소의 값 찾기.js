const array = [4,3,5,1,6,5];
let count = 0;

array.forEach((element) =>{
  if(element % 2 === 1) count++;
})

console.log(count)