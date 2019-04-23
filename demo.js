console.log("Hello World!");

// 01 - Variables

function fn() {
    if(true){
        // variable locale
        var a = 1;
    }
   
    //variable globale
    b = 1;

    console.log(a);
}

// 02- Fonctions

function afficher(texte) {
    console.log(texte);
}

var aff = afficher;

aff("bonjour");

function addition(nb1, nb2, fn) {
    var resultat = nb1 + nb2;
    fn(resultat);
}

addition(1, 2, aff);

var anonymous = function(texte) {
    console.log('T=', texte);
}

addition(1, 2, anonymous);

addition(1, 2, function(texte) {
    console.log('T=', texte);
});

function recupOperation(add) {

    if (add) {
        return function (a, b) {
            return a + b;
        }
    } else {
        return function (a, b) {
            return a - b;
        }
    }

}

afficher(recupOperation(true)(10, 20));
afficher(recupOperation(false)(10, 20));

// 03 - Objets via fonction constructeur

function Collegue(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.full = function () {
        return this.nom + ' ' + this.prenom;
    }
}

var cl = new Collegue("Nom", "Prenom");

// affiche Collegue {nom: 'Nom', prenom: 'Prenom'}
afficher(cl);
afficher(cl.nom);
afficher(cl.full());

cl.age = 90;
afficher(cl);

// 04 Objets via syntaxe littérale
var c2 = {}; // objet vide

var c3 = {
    nom: "Nom 3",
    prenom: "Prenom 3",
    age: 80,
    full: function() {
        return this.nom + ' ' + this.prenom;
    }
}

afficher(c3);

afficher(c3.full());

// 05 - Tableaux

var tab1 = [];
var tab2 = [1, 2, 3];
var tab3 = [{}, {}];
var tab4 = [{
    nom: 'nom 1'
}, {
    nom: 'nom 2'
}];

tab1.forEach(function (el) {
    afficher(el);
});

// transformer avec un map

var tab5 = tab2.map(function(el) {
    return {nom: 'nom ' + el};
});

afficher(tab5);

var tab6 = tab2.map(element => {
    return {
        nom: 'nom ' + element
    }
});

afficher(tab6);

// filtrer avec un filter

var tab7 = tab2.filter(function(el) {
    return el <= 2;
});

afficher(tab7);