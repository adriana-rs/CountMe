document.addEventListener('DOMContentLoaded', () => {
    // Funzione per creare un nuovo elemento con un tag, una classe e innerHTML
    function createElement(tag, className, innerHTML = '') {
      const element = document.createElement(tag);
      if (className) element.classList.add(className);
      if (innerHTML) element.innerHTML = innerHTML;
      return element;
    }
  
    // Selezione del container per aggiungere gli elementi
    const appContainer = document.querySelector('.container');
  
    // Creazione del contatore
    const counterDisplay = createElement('div', 'counter-display');
    appContainer.appendChild(counterDisplay);
  
    // Creazione dell'input per il passo
    const inputStep = createElement('input', 'input-step');
    inputStep.type = 'number';
    inputStep.value = '1';
    counterDisplay.appendChild(inputStep);
  
    // Creazione del wrapper per i pulsanti
    const buttonWrapper = createElement('div', 'counter-button');
    counterDisplay.appendChild(buttonWrapper);
  
    // Pulsante di decremento
    const decrementButton = createElement('button', 'button', '-');
    decrementButton.setAttribute('aria-label', 'Decrementa');
    buttonWrapper.appendChild(decrementButton);
  
    // Valore del contatore 
    const counterValue = createElement('p', 'counter-value', '0');
    buttonWrapper.appendChild(counterValue); 
  
    // Pulsante di incremento
    const incrementButton = createElement('button', 'button', '+');
    incrementButton.setAttribute('aria-label', 'Incrementa');
    buttonWrapper.appendChild(incrementButton);
  
    // Pulsante di reset
    const resetButton = createElement('button', 'button', 'Reset');
    resetButton.setAttribute('aria-label', 'Resetta il contatore');
    counterDisplay.appendChild(resetButton);
  
    // Variabile per il contatore
    let counter = 0;
  
    // Funzione per aggiornare il contatore
    function updateCounter() {
      counterValue.innerHTML = counter;
    }

    // Funzione per validare l'input
    function isValidStep(value) {
      const number = parseInt(value);
      return !isNaN(number) && number > 0;
    }

    // Event delegation per la gestione dei click su increment/decrement/reset
    buttonWrapper.addEventListener('click', (e) => {
      if (e.target === incrementButton || e.target === decrementButton) {
        const step = inputStep.value;

        // Controllo per valore non valido
        if (!isValidStep(step)) {
          alert("Per favore, inserisci un valore positivo valido.");
          return;
        }

        const stepValue = parseInt(step); // Converto il valore dell'input in un numero intero
        counter += e.target === incrementButton ? stepValue : -stepValue;
        updateCounter();
      }
    });

    // Gestione del reset
    resetButton.addEventListener('click', () => {
      counter = 0; 
      inputStep.value = '1'; 
      updateCounter(); 
    });
  
    // Aggiorna il contatore inizialmente
    updateCounter();
});
