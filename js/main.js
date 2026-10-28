"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Stephenie Knutsson
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

//-----------------------------------------------------------------------------------


// EventListeners [variabel.eventlistener ("event att lyssna efter", function som körs)]
form.addEventListener("submit", onSubmit);
clearButton.addEventListener("click", clearForm);


//-----------------------------------------------------------------------------------


// Array som används för felmeddelanden
let errors = ["Du måste ange ditt namn", "Du måste ange en giltig e-postadress", 
    "Du måste ange ett telefonnummer"];

// länkar till CSS-class ERROR 
errors.classlist.add("error");


//-----------------------------------------------------------------------------------


// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    // Kontrollera formulärets obligatoriska fält
    let name = fullnameInput.value;
        if (name-length === 0) {
            return false;
        } 
    let email = emailInput.value;
    let phone = phoneInput.value;

    return true;
    // Visa eventuella felmeddelanden

    // Returnera resultatet (true eller false) av valideringen
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden

    // Skriv ut aktuella felmeddelanden till DOM
    // Villkor om email = tomt --> visa index 1 i let errors arrayen
    if (email.value === "") {
        console.log(errors[1]);
        
    }
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret
    
    //ska jag ta bort denna och bara använda "createStudentCard"?
    function onSubmit(event) {
        // Hindrar sidan från att läsas om innan eventet
        event.preventDefault();
        // Deklarerar variabel för namn och sätter fullnameInput som dess värde för att hämta in input
        let name = fullnameInput.value;
        // Deklarerar variabel för email och hämtar in input
        let email = emailInput.value;
        // Deklarerar variabel för telefon och hämtar in input
        let phone = phoneInput.value;
        // Deklarerar variabel för typsnitt och hämtar in input
        let font = fontSelect.value;

        // Uppdatera studentkortet
        // Skriver ut input från formuläret
        previewFullname.textContent = `${name}`; // bör jag bara ha "name" ?
        previewEmail.textContent = `${email}`;
        previewPhone.textContent = `${phone}`;

        // Anropar funktionen clearForm
        clearForm();
}
    
    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort
    fullnameInput.value = ""; // I och med tom sträng visas inget i studentkortet
    emailInput.value = "";
    phoneInput.value = "";

    // Rensa eventuella felmeddelanden
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas


// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik