// exo2

function prixDeBillet(age) {
    if (age <= 12) {
        return 10; // Enfants
    } else if (age <= 17) {
        return 15; // Adolescents
    } else {
        return 20; // Adultes
    }
}

let age = prompt("Entrez votre âge ?");
alert("Le prix du billet est : $" + prixDeBillet(age));
