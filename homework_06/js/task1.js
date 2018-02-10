

var a = +prompt("Enter first length of sides", "3");
var b = +prompt("Enter second length of sides", "4");
var c = +prompt("Enter third length of sides", "5");

if ((a*a==b*b+c*c) || (b*b==c*c+a*a) || (c*c==a*a+b*b)) {
	console.log('Right triangle');
}

else if (a==b && b==c && c==a) {
	console.log('Equilateral triangle');
}

else if ((a==b && a!=c) || (a==c && a!=b) || (c==b && a!=c)) {
	console.log('Isosceles triangle');
}

else if ((a!=b) || (a!=c) || (c!=b)) {
	console.log('Scalene triangle');
}

let p = (a + b + c)/2;
let x = p - a;
let y = p - b;
let z = p - c;
let S = Math.sqrt(x*y*z*p);
S = S.toFixed(2);
console.log (S);

var a = +prompt("Enter first length of sides", "5");
var b = +prompt("Enter second length of sides", "-5");
var c = +prompt("Enter third length of sides", "1");

if ((a <= 0) || (b <= 0) || (c <= 0)) {
 	console.log('Incorrect data');
 }