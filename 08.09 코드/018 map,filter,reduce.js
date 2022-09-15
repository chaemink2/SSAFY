const orderList = [
  {
    menu:"치킨",
    price:17000,
    event:false,
    count:50,
  },
  {
    menu:"돈까스",
    price:8500,
    event:false,
    count:99,
  },
  {
    menu:"마라탕",
    price:8000,
    event:false,
    count:100,
  },
  {
    menu:"쫄면",
    price:6500,
    event:false,
    count:0,
  },
  {
    menu:"짜장면",
    price:5500,
    event:true,
    count:30,
  }
]

const result = orderList.filter(e => e.count).map(el => {
  if(el.event){
    el.saledPrice = el.price*0.9
  }
  return el
})

console.log(result)

const result2 = orderList.reduce((acc,cur) => {
  if(cur.count){
    if(cur.event){
      cur.saledPrice = cur.price * 0.9
    }
    acc.push(cur)
  }
  return acc;
},[])
console.log(result2)
