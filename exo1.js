// exo1

function Bissextile(annee) {
    if (annee % 400 === 0) {
        return true; // Année divisible par 400
    } else if (annee % 100 === 0) {
        return false; // Année divisible par 100 mais pas 400
    } else if (annee % 4 === 0) {
        return true; // Année divisible par 4 mais pas par 100
    } else {
        return false; // Pas une année bissextile
    }
}

let annee = prompt("Entrez une année ?");
alert(Bissextile(annee));


