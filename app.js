
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

let studente = {
    nome : "mario",
    cognome : "rossi",
    eta : "35"
};

for ( let key in studente ) {
    console.log( `${key} : ${studente[key]}` );
}

console.log('---------');

// Creare un array di oggetti di studenti.

let classe = [
    {
        nome : "mario",
        cognome : "rossi",
        eta : "35"
    },
    {
        nome : "claudio",
        cognome : "bianchi",
        eta : "25"
    },
    {
        nome : "ettore",
        cognome : "verdi",
        eta : "30"
    },
    {
        nome : "caterina",
        cognome : "bianchi",
        eta : "22"
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for ( let i = 0; i < classe.length; i++ ) {

    console.log( classe[i].nome, classe[i].cognome );
}

console.log('---------');

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let newStudent = {
    nome : prompt(`inserisci il nome`),
    cognome : prompt(`inserisci il cognome`),
    eta : prompt(`inserisci l' età`)
}

classe.push(newStudent);
console.log(classe);