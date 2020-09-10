let guardianes = ["Peter Quill", "Gamora", "Drax el destructor", "Rocket", "Groot"];

// sacar todos los guardianes que no sean gamora
const r = guardianes.filter(guardian => guardian !== "Gamora" && guardian !== "Peter Quill");
// console.log(r);

// Método que pasandole un texto, busque todas las coincidencias
// EJ search("e". guardianes)
// Return: [Peter Quill, Drax el destructor, Rocket]
function search(query, collection) {
    return collection.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}

/* function search (arr, toFind){
    return arr.filter(e => e.includes(toFind));
}*/

console.log(search("e", guardianes));
