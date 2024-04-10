// --> call stack visualization
// const multiply = (x, y) => x * y;

// const square = x => multiply(x, x);

// function isRightTriangle(a, b, c) {
//     return square(a) + square(b) === square(c);
// }
// console.log('before');
// isRightTriangle(3,4,5);
// console.log()
//-->request apis
// console.log('Beginn to request');
// setTimeout(() => {
//     console.log('Request complete.....')
// }, 3000);
// console.log('Waiting......')
//--->callback hell
// document.body.style.backgroundColor = 'red';
// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 1000)
// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 2000)
// setTimeout(() => {
//     document.body.style.backgroundColor = 'teal';

// }, 3000)

// setTimeout(()=>{
//     document.body.style.backgroundColor='olive';

//     },4000)
//the above code can also be written as
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'olive';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'teal';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000), 1000

// })
//OR we can create a generic function
// function changeColor(newColor, delay, doNext) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();

//     }, 1000)
// };
// changeColor('violet', 1000, () => {
//     console.log('Violet');
//     changeColor('indigo', 1000, () => {
//         console.log('Indigo');
//         changeColor('blue', 1000, () => {
//             console.log('Blue');
//             changeColor('green', 1000, () => {
//                 console.log('Green');
//                 changeColor('yellow', 1000, () => {
//                     console.log('Yellow');
//                     changeColor('orange', 1000, () => {
//                         console.log('orange');
//                         changeColor('red', 1000, () => {
//                             console.log('Red');
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
//Ther below code is a function which is generally a  fake request of a website by taking a url
// a success call back function and  a delay callback function...these function are self argument passing functions as arr.map method..
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure(`oops too much delayyyyyyy!`);
//         } else {
//             success(`here is your data from ${url}`)
//         }
//     }, delay)
// };
// fakeRequestCallback('vinayy.com',
//     function (response) {
//         console.log('It worked!HURAYYYY!', response);
//         fakeRequestCallback('vinayy.com/page2',
//         function ()
//         {
//             console.log('Hurray we opened the page 2'),
//             function ()
//             {
//                 console.log('page 2 didnt loaded')
//             }
//         })
//     },
//     function (error) {
//         console.log('It didnt worked', error);
//     })
///PROMISES IN JAVASCRIPT
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
//-->creating a new promise.Below is the basic syntax
// new Promise((resolve,reject)=>{
//     resolve();
// })//resolve and reject are two call backs which will bve executed when the call is resolved or rejected
const fakeReq = (url) =>{
    return new Promise((resolve,reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
            if(rand > 0.7){
                reject(`your req is rejected`);
            }resolve(`your req is fulfilled`);
        },1000)
    })
}
// fakeReq('pexels.com/new/')
// .then((data)=>{
//     console.log('it worked',data);//then callback will work when the promise is fullfilled
// })
// .catch((err)=>{
//     console.log('it failed',err);//catch callback will work when the promise is rejected state
// })
//the below function can be written using promises as
// function changeColor(newColor, delay, doNext) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();

//     }, 1000)
// };
// changeColor('violet', 1000, () => {
//     console.log('Violet');
//     changeColor('indigo', 1000, () => {
//         console.log('Indigo');
//         changeColor('blue', 1000, () => {
//             console.log('Blue');
//             changeColor('green', 1000, () => {
//                 console.log('Green');
//                 changeColor('yellow', 1000, () => {
//                     console.log('Yellow');
//                     changeColor('orange', 1000, () => {
//                         console.log('orange');
//                         changeColor('red', 1000, () => {
//                             console.log('Red');
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
//--> using promises
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay);

    })
}
changeColor('red',1000)
.then(()=>changeColor('orange',1000))
.then(()=>changeColor('yellow',1000))
.then(()=>changeColor('green',1000))
.then(()=>changeColor('orange',1000))
.then(()=>changeColor('blue',1000))
.then(()=>changeColor('indigo',1000))
.then(()=>changeColor('violet',1000))
