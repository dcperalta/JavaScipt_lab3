// Declaring Arrays
let cities = ['Toronto', 'Buenos Aires', 'Manila', 'Kerala'];

// Accessing Arrays
console.log(cities);


console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
console.log(cities[4])
console.log('There are ' + cities.length + ' cities in the first array');

// Using Array Properties
console.log(cities.length);
cities.length = 3;
console.log(cities);

// Array Methods
cities.push('Kerala');
cities.push('San Jose');
console.log(cities);

cities.sort();
console.log(cities);

// Iterating through Arrays 
cities.forEach((city, index) => {
    console.log( `${index}: ${city}`);
});


// Array Destructuring
let [ firstCity , secondCity] = cities;
console.log(firstCity);
console.log(secondCity);