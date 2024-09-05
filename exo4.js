function puissance(x, n) {
    if (n === 0) {
        return 1; // Cas de base : tout nombre élevé à la puissance 0 est égal à 1
    } else if (n < 0) {
        return 1 / puissance(x, -n); // Gérer les puissances négatives
    } else {
        return x * puissance(x, n - 1); // Récursivité
    }
}

// Exemple d'utilisation :
let base = 2;
let expo = 3;
console.log(puissance(base, expo)); // Résultat : 8 (2^3 = 2*2*2)
