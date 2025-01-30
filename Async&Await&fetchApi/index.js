// Promise is a promise of code execution 
// settle means reslove or reject
// reslove means promise has settled sucessfully
// reject means promise hasn't settled sucessfully

async function getData(){
    return new Promise((relsolve, reject)=>{
        setTimeout(()=>{
            relsolve(455);
        }, 3500 );
    })
}

async function getData(){
    // Simulate getting data from a server

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // GET, PUT , DELETE are spme pther methods
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
let data = await x.json() 
return data
}





async function main(){
    console.log('Loading modules');

    console.log('DO Something else');

    console.log('Load data');

    let data = await getData();

    console.log(data);

    console.log('Process data');

    console.log('Task 2');
} 
 main()



// using call back approcah insted of use of async
// data.then((v)=>{

//     console.log(data);

//     console.log('Process data');

//     console.log('Task 2');

// })







