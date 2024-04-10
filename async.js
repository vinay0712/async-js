// async keyword used to implicitly return a promise for example
async function sing(){
    return 'la la la la';
}
// const newSing = async()=>{
//     return "hey ho hey ho hey ho";
// }
// newSing()
// .then((data)=>{
//     console.log('resolved with the data:',data);
// })
// //this will work for all the resolved cases then how to handle errors..???
//for that we will use throw keyword
// const newSing = async()=>{
//    throw 'OH no theres a problem ';//interchanging the positions of throw and return will decide whether
// //    the promoise has been resolved or rejected..

//     return 'lalalalalalalala';

// }
// newSing()
// .catch((err)=>{
//     console.log("error thrown with data:", err);
// })
//FAKE LOGIN USING ASYNC
// const login = async(username,password)=>{
//     if(!username || ! password) throw 'Missing Credentials';
//     if(password === '12345678') return 'WELCOME!!!'
//     throw 'Invalid password'
// }
// login('vinayyy07','12345678')
// .then((data)=>{
//     console.log(`${data},vinayyy07`);
// }).catch((err)=>{
//     console.log(err)
// })
//remeber the nice old rainbow function
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         },delay);
//     })
// }
// changeColor('red',1000)
// .then(()=>changeColor('orange',1000))
// .then(()=>changeColor('yellow',1000))
// .then(()=>changeColor('green',1000))
// .then(()=>changeColor('blue',1000))
// .then(()=>changeColor('indigo',1000))
// .then(()=>changeColor('violet',1000))

// the above function can be written as
// async function rainbow(){
//     await changeColor('red',1000);
//     await changeColor('orange',1000)
//     await changeColor('yellow',1000)
//     await changeColor('green',1000)
//     await changeColor('blue',1000)
//     await changeColor('indigo',1000)
//     await changeColor('violet',1000)
//     return 'rainboww!'
// }

// //this function now became a promise now
// // we can call it as
// rainbow().then((data)=>{
//     console.log('Done with ',data)
// })
//handling errors using async and await\
const makeFakereq = (url)=>{
    return new Promise((resolve,reject)=>{
        const rand = Math.floor(Math.random());
        setTimeout(()=>{
            if(rand<0.3){
                reject("Connection Timed out!");
            }resolve('hurray we are sucess fully connected')
        },1000)
    })
}

async function makeTwoRequests(){
    try{
     const req1 = await makeFakereq('mdndocs.org/page1');
     console.log(req1);
     const req2 = await makeFakereq('mdndocs.org/page2');
     console.log(req2);
    }catch(e){
        console.log('Error is thrown:',e)
    }
}