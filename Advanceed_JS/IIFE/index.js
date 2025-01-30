async function sleep(params) {
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            reslove(45)
        }, 3000) ;
    })
}
// IIFE imedietly invoke function expression
(async function main(){
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
    
})()


