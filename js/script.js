// Stato iniziale
let counter = 0;
const incrementStepInput = document.getElementById("incrementStep");
const errorMessage = 'Inserisci un numero valido maggiore di zero.';

// Funzione per creare elementi DOM dinamicamente
const createElement = (tagName, className, innerHTML) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

// Funzione che gestisce gli errori
const errorHandler = (message, incrementStep) => {
    if (message) {
        alert(message);
        return;
    } else if (isNaN(incrementStep) || incrementStep <= 0) {
        alert(errorMessage);
        return;
    }
}

// Funzione che aggiorna il counter
const updateCounter = (counter) => {
    document.getElementById("counter").textContent = counter;
}

// Funzione che determina l'operazione da effettuare
const handlerIncrement = (event) => {
    const incrementStepValue = parseInt(incrementStepInput.value);
    errorHandler(null, incrementStepValue);

    if (event.target.id === 'incrementButton') {
        counter += incrementStepValue;
    } else if (event.target.id === 'decrementButton') {
        counter -= incrementStepValue;
    } else {
        errorHandler('Operazione non consentita', incrementStepValue);
    }

    updateCounter(counter);
}

// Funzione che resetta
const resetHandler = () => {
    counter = 0;
    incrementStepInput.value = 1;
    updateCounter(counter);
}

// Event Delegation per i bottoni
document.getElementById("buttonWrapper").addEventListener("click", (event) => {
    if (event.target.id === "incrementButton" || event.target.id === "decrementButton") {
        handlerIncrement(event);
    } else if (event.target.id === "resetButton") {
        resetHandler();
    }
});
