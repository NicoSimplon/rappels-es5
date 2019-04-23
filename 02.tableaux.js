console.log("02 - Tableaux");

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(city => console.log(city));

villes.every(city => {
    if(city.includes("a")) {
        console.log("lettreADansToutesLesVilles = true");
    } else {
        console.log("lettreADansToutesLesVilles = false");
    }
});

var some = villes.some(city => city.includes("-"));
console.log("auMoinsUneVilleAvecUnTiret = " + some);

var villesSansTiretSansEspace = villes.filter(city => ! city.includes("-") && ! city.includes(" "));

console.log("villesSansTiretSansEspace = ")
console.log(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.map(city => city.toUpperCase()).filter(city => city.endsWith("S"));
console.log("villesMajusculeSeTerminantParS = ")
console.log(villesMajusculeSeTerminantParS);
