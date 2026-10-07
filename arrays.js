//October 7

let cars = ['BMW','Mercedes','Audi'];
let laptops = ['acer','dell','HP'];
let sweets = ['yogetta','pin-pop','stumbo'];
let veges = ['onion','carrot','brocolli'];

/* .push('') - adds another variable into the list at the end(last)
 .length() - tells us the list of the arrays
 .pop('') - removes the last variable inside an array
 .unshift() - adds items in the array in the front position
 .shift() - removes from the top
 .include() - searches where an if an item is included in an array
*/

cars.unshift('Nissan','Volvo','Isuzu');
cars.shift();

if (cars.includes('BMW') || cars.includes('Mercedes') || cars.includes('Isuzu')) {
    console.log(cars + " are the cars available.");
} else {
    console.log("The car isn't available.");
}

//Objects in arrays

let fruits = [
   { name: "Apple", color: "Red" },
   { name: "Banana", color: "Yellow" },
   { name: "Orange", color: "Orange" },
   { name: "Grapes", color: "Purple" }
];

console.log(fruits[0].name + " is " + fruits[0].color);

//Functions

function sales(){
    let price= 10;
    let quantity = 5;
    let total = price * quantity;
    return ("With the the price of $" + price + " and quantity of " + quantity + ", the total is: $" + total);
}

console.log(sales(10, 5));

//objects outside functions
let product = {
    name: "Acer",
    model: "Aspire A514",
    price: "15000"
};
 function display1()
 {
     return(product.name)
 }

 console.log(display1())


//objects in a function
function display()
{
    let fruits = [
        { name: "Apple", color: "Red" },
        { name: "Banana", color: "Yellow" },
        { name: "Orange", color: "Orange" },
        { name: "Grapes", color: "Purple" }
    ];

    return(fruits[3])
}

console.log(display());

// An array of objects inside an object.
 let customer = [
     {
         name: "Ditebogo",
         surname:"Tlhakola",
            Products: [
                {name: "Atchaar", price: "45", quantity:"3", model:"garlic"},
                {name: "Magwinya", price: "10", quantity:"4", model:"donut"},
                {name: "Skopo", price: "50", quantity:"2", model:"cow"}
            ]
     },
 ];

 function buy(){
     return(customer[0])
 }

 console.log(buy());