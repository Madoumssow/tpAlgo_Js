function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        return n * factorielle(n - 1);
    }
}

let nombre = prompt("Entrez un nombre ");
alert(factorielle(nombre)); // Résultat : 120 (5! = 5*4*3*2*1)
