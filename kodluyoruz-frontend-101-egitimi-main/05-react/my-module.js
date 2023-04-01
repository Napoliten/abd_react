const hello = name => {
//console.log("hello " + name);   => (asagidaki gibide yazilabilir)
console.log(`hello ${name}`);
};

const topla = (c, a, b) => c+(a+b);
const cikar = (c, a, b) => c+(a-b);

export{
    hello,
    topla,
    cikar
};          