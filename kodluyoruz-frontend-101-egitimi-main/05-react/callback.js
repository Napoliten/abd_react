// setTimeout(()=>{
// console.log("Merhaba");
// },5000)

import axios from "axios";

// setInterval(()=>{
//     console.log("Merhaba ben her saniye çalışacağım.")
// },1000);

// const sayHi = (cb) => {
// cb();
// };

// sayHi(()=>{
//     console.log("Hello");
// });

fetch("https://jsonplaceholder.typicode.com/users")
.then((data ) => data.json())
.then((users) => {
        console.log("Users Yüklendi!", users);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => data.json())
    .then((post) => {
        console.log("Post 1 Yüklendi", post);

    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then(data => data.json())
    .then(post => console.log("Post 2 Yüklendi", post))
    });
});

//***** Yukarıdaki ile aynı işlev sadece daha kısa ve düzgün hali  *****//

// async function getData(){
//     const users = await(
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
//     const post2 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("Users",users);
//     console.log("Post1",post1);
//     console.log("Post2",post2);
// }

// getData();
    
//***** Yukarıdaki gibi getData fonksiyonu vermeyipte aşağıdaki gibi boş bir fonksiyonda verebiliriz  *****//

// (async()=>{
//     const users = await(
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
//     const post2 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("Users",users);
//     console.log("Post1",post1);
//     console.log("Post2",post2);
// })();


//***** fetch -> axios kullandığımızda ".json" ve "2.await" gerek kalmıyor aşağıdaki gbi  *****//
// (async()=>{
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("Users",users);
//     console.log("Post1",post1);
//     console.log("Post2",post2);
// })();