async function sleep(params) {
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            reslove(45)
        }, 3000) ;
    })
}
// IIFE imedietly invoke function expression
(async function main(){

    let [x, y] = [1, 5]
    console.log(x, y)
    // let [x, y, rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x, y, rest)

    let obj = {
        a : 1,
        b : 2,
        c : 3
    }

    let {a,b} = obj
    console.log(a,b);
    
    
})()


