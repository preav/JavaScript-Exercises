//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
let a = 5, b = 6, c = 7;
let semiPerimeter = (a + b + c)/2;
let area = Math.sqrt( semiPerimeter*(semiPerimeter - a)*(semiPerimeter -b)*(semiPerimeter -c));
console.log(area);