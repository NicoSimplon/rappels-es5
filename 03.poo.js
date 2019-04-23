function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = () => this.nom + " " + this.prenom + " - " + this.pseudo;
    this.getInitiales = () => this.nom.charAt(0) + "." + this.prenom.charAt(0);
}

Personne.prototype.age = "Non Renseigné";

function afficherPersonne(pers) {
    console.log(pers.nom);
    console.log(pers.prenom);
    console.log(pers.pseudo);
    console.log(pers.getNomComplet());
}

pers1 = new Personne("LEMAIRE", "Jules", "jules77");
pers2 = new Personne("LEMAIRE", "Paul", "paul44");

afficherPersonne(pers1);
afficherPersonne(pers2);

pers1.pseudo = "jules44";
console.log(pers1.getNomComplet());

console.log("Age de Jules: " + pers1.age);

pers1.age = 30;
console.log("Jules a " + pers1.age + " ans");

console.log("Initiales: " + pers1.getInitiales());

var robert = {
    nom: "LEPREFET",
    prenom: "Robert",
    pseudo: "robert77",
    getNomComplet: function () {
        return this.nom + " " + this.prenom + " - " + this.pseudo;
    }
};

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = () => this.numeroClient + " - " + this.nom + " " + this.prenom;
}

var steve  = new Client("LUCAS", "Steve", "steve44", "A01");

afficherPersonne(steve);

console.log("Numéro client: " + steve.getInfos());