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