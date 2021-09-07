
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

    document.querySelector("#listOfStudents").innerHTML += `<li class="student">${classe[i].nome} ${classe[i].cognome}</li>`;
}


// Dare la possibilità all’utente, di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

document.querySelector("#addStudent").addEventListener('click', () => {

    // save student data
    let newStudent = {
        nome : document.querySelector("#nomeStudente").value,
        cognome : document.querySelector("#cognomeStudente").value,
        eta : document.querySelector("#etaStudente").value
    }

    // add student to the class array
    classe.push(newStudent);

    // print on list of students
    document.querySelector("#listOfStudents").innerHTML += `<li class="student">${newStudent.nome} ${newStudent.cognome}</li>`;

    // clear input values
    document.querySelector("#nomeStudente").value = "";
    document.querySelector("#cognomeStudente").value = "";
    document.querySelector("#etaStudente").value = "";
});
