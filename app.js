//sort the class by last name
function sortListOFStudents(arrayOfObjects) {

    let listOfSurnamesClass = [];

    for ( let i = 0; i < arrayOfObjects.length; i++ ) {
        listOfSurnamesClass.push( arrayOfObjects[i].cognome );
    }

    listOfSurnamesClass.sort();

    let newArrayOfObjects = [];
    let idList = [];


    for ( let e = 0; e < listOfSurnamesClass.length; e++ ) {
        
        for ( let i = 0; i < arrayOfObjects.length; i++ ) {

            if( arrayOfObjects[i].cognome == listOfSurnamesClass[e] && !idList.includes(arrayOfObjects[i].id) ) {
                newArrayOfObjects.push(arrayOfObjects[i]);
                idList.push(arrayOfObjects[i].id);
            }
        }
    }

    return newArrayOfObjects;
}


function printListOfStudents(array) {
    document.querySelector("#listOfStudents").innerHTML = ``;

    for ( let i = 0; i < array.length; i++ ) {
        document.querySelector("#listOfStudents").innerHTML += `<li class="student">${array[i].cognome} ${array[i].nome}</li>`;
    }
}

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
        id : 0,
        nome : "mario",
        cognome : "rossi",
        eta : "35"
    },
    {
        id : 1,
        nome : "claudio",
        cognome : "bianchi",
        eta : "25"
    },
    {
        id : 2,
        nome : "ettore",
        cognome : "verdi",
        eta : "30"
    },
    {
        id : 3,
        nome : "caterina",
        cognome : "bianchi",
        eta : "22"
    }
];


// Dare la possibilità all’utente, di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
classe = sortListOFStudents(classe);
printListOfStudents(classe);

document.querySelector("#addStudent").addEventListener('click', () => {

    // validation
    if ( document.querySelector("#nomeStudente").value == "" ) {
        alert(`inserisci il nome`);
        return;
    } else if ( document.querySelector("#cognomeStudente").value == "" ) {
        alert(`inserisci il cognome`);
        return;
    } else if ( document.querySelector("#etaStudente").value == "" || isNaN(parseInt(document.querySelector("#etaStudente").value)) ) {
        alert(`inserisci l'età in modo valido`);
        return;
    }

    // save student data
    let newStudent = {
        id : classe.length, 
        nome : document.querySelector("#nomeStudente").value,
        cognome : (document.querySelector("#cognomeStudente").value).toLowerCase(),
        eta : document.querySelector("#etaStudente").value
    }

    // add student to the class array
    classe.push(newStudent);

    // sort by last name
    classe = sortListOFStudents(classe);

    // print list of students
    printListOfStudents(classe);

    // clear input values
    document.querySelector("#nomeStudente").value = "";
    document.querySelector("#cognomeStudente").value = "";
    document.querySelector("#etaStudente").value = "";
});
