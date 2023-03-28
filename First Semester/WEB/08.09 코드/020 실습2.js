const bucket = [
    { id: 3, text: '여행가기', done: false },
    { id: 2, text: '치킨먹기', done: true },
    { id: 1, text: '코딩하기', done: false },
];

function getMax(id){

    const max = bucket.reduce((acc,cur) => {
        cur = e.id;
        if(acc < cur){
            acc = cur
        }
    },0)
    
    return acc;
    
}

console.log(max);