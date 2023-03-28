const promise = new Promise((reslove,reject) => {
  reslove("")
})

// console.log(promise);

promise.then((data) => { return data + "참깨빵 위에"})
.then((data) => data + " 순쇠고기 패티 2장 ")
.then((data) => data + " 특별한 소스 ")
.then((data) => data + " 양상추")
.then((data) => data + " 치즈 피클 양파까지 ")
.then((data) => console.log(data))