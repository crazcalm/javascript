import { Circle, PI, degreesToRadians } from "./modules/learning.js";
import { Stack } from "./modules/stack.js";

let one = new Circle(1);
let two = new Circle(2);
let three = new Circle(3);

let stack = new Stack();
stack.push(one);
stack.push(two);
stack.push(three);

console.log(stack.toString());
