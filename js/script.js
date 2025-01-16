// Stato iniziale
let counter = 0;
const incrementStepInput = document.getElementById("incrementStep");
const errorMessage = 'Inserisci un numero valido maggiore di zero.';

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
const handlerIncrement = (type) => {
    
    const incrementStepValue = parseInt(incrementStepInput.value);

    errorHandler(null, incrementStepValue);

    if (type === 'increment') {
        counter += incrementStepValue;
    } else if (type === 'decrement') {
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

// Listener sui bottoni
document.getElementById("incrementButton").addEventListener("click", () => handlerIncrement('increment'));

document.getElementById("decrementButton").addEventListener("click", () => handlerIncrement('decrement'));

document.getElementById("resetButton").addEventListener("click", resetHandler);
