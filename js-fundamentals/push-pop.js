// element push
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
// we can add one or more element in the array using push

var friends = ['Raisul', 'Islam'];
friends.push('Rahat', 'Robin');
console.log(friends);

// element pop
var numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
numbers.pop();
console.log(numbers);
// pop deduct the last element from an array
// If you need to add an element to the beginning of your array, use unshift() . If you want to add an element to a particular location of your array, use splice() .

numbers.unshift(0);
console.log(numbers);

numbers.splice(1, 0, 9); 
console.log(numbers);

// The shift() method returns the shifted element:
var numbers = [5, 4, 3, 2, 1];
numbers.shift();
console.log(numbers);

