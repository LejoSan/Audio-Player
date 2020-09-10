// Destructuración de arreglos
var a = 2;
var b = 5;

function switchValues(a, b) {
    let aux = 0;
    aux = a;
    a = b;
    b = aux;
    return [a, b];
}

arr = [1, 2, 3];
let [a1, a2, a3] = arr;
let [a1, a2, a3] = [1, 2, 3];

[a, b] = [b, a]

function switchValues2(a, b) {
    return [a, b] = [b, a];
}

console.log(switchValues2(a, b));
