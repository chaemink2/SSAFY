function sleep(delay){
  const start = Date.now();//10시59분00초
  let limit = start + delay;//10시59분03초
  while(Date.now() < limit){}//10시59분01초~~~~ 10시59분04초
}


console.log("빨래")
sleep(3000)
console.log("설거지")