let car = ["bmw","mercedes","rr",9]
console.log(typeof car);

const address = {
    village : "villeage name",
    pincode : 272163
}
console.log(typeof address);





 const myobject = {
    username: "alice",
    price: 399
}

function calculatecartprice(myobject){
    return `${myobject.username} with price of ${myobject.price}`;
}

console.log(calculatecartprice(myobject));

const myNums = [1,2,3,4,5,6,7]
const mynewnums = myNums.reduce((mn,mm)=>mn+mm,0)
console.log(mynewnums);




const promise = fetch("https://api.github.com/users/deeP0159");
promise.then(
    (res)=>{
        return res.json();
    }
).then(
    (data)=>console.log(data)

).catch(
    (err)=>comsole.log("Error: ",err);
);
