const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const JS = {
    name: 'ginger JS',
    price: 250,
    isAvailable: true,

    orderJS: function(){
        console.log("JS nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(JS, "name"));

Object.defineProperty(JS, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(JS, "name"));

for (let [key, value] of Object.entries(JS)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}