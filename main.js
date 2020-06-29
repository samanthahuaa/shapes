import Math

let x1 = prompt('What is the x-coordinate of the first point?')
let y1 = prompt('What is the y-coordinate of the first point?')
let x2 = prompt('What is the x-coordinate of the second point?')
let y2 = prompt('What is the y-coordinate of the second point?')

console.log( Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0))
