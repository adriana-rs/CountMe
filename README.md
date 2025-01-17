# CountMe - Contatore Interattivo

CountMe è un'applicazione web semplice e interattiva che permette di incrementare, decrementare e resettare un contatore. Puoi anche personalizzare il passo di incremento e decremento inserendo un valore numerico. L'applicazione è realizzata con HTML, CSS e JavaScript, ed è ottimizzata per essere utilizzata su dispositivi desktop e mobile.

![Screenshot dell'app](./assets/img/Screenshot%202025-01-16%20103610.png)

## Funzionalità

- **Incrementa/Decrementa:** Usa i pulsanti "+" e "-" per aumentare o diminuire il contatore.
- **Personalizzazione passo di incremento/decremento:** Imposta un valore nel campo di input per determinare quanto incrementare o decrementare il contatore.
- **Reset:** Riporta il contatore a zero con il pulsante "Reset".
- **Messaggi di errore:** In caso di input non valido (ad esempio un numero negativo o zero), verrà mostrato un messaggio di errore.

## Istruzioni

1. **Incremento:** Clicca sul pulsante "+" per aumentare il valore del contatore in base al numero inserito nel campo di input.
2. **Decremento:** Clicca sul pulsante "-" per diminuire il valore del contatore.
3. **Imposta il passo:** Modifica il valore nel campo sopra il contatore per impostare il passo di incremento o decremento.
4. **Reset:** Clicca sul pulsante "Reset" per riportare il contatore a zero.

## Come Funziona

L'applicazione utilizza JavaScript per gestire le operazioni di incremento, decremento e reset del contatore. 

- **Incremento e Decremento**: Quando premi i pulsanti "+" o "-", il valore del contatore viene modificato in base al valore inserito nel campo di input. Questo valore di incremento o decremento è personalizzabile e viene letto dal campo di input ogni volta che l'utente preme uno dei pulsanti. Il valore del contatore viene aggiornato dinamicamente tramite la funzione `updateCounter`.
   
- **Reset**: Il pulsante "Reset" riporta il contatore a zero e ripristina il passo di incremento al valore predefinito di 1. La funzione `resetHandler` gestisce questa operazione.

- **Gestione degli errori**: Se l'utente inserisce un valore non valido nel campo di input (ad esempio, un numero negativo o zero), viene mostrato un messaggio di errore tramite la funzione `errorHandler`.

In questo modo, l'app è interattiva e consente all'utente di personalizzare facilmente il comportamento del contatore.

## Demo Online

Puoi provare l'applicazione direttamente online tramite il seguente link:

[Demo di CountMe](https://adriana-rs-countme.netlify.app/)

Cliccando sul link, verrai indirizzato alla versione live del contatore, dove potrai testare tutte le funzionalità direttamente nel tuo browser.

## Installazione

1. Clona questo repository o scarica il codice sorgente.
2. Apri il file `index.html` in un browser per iniziare ad utilizzare l'applicazione.

```bash
git clone https://github.com/adriana-rs/countme.git
cd countme
open index.html
```

## Tecnologie Utilizzate

- **HTML5:** Struttura e contenuto della pagina web.
- **CSS3:** Stili e design responsivo.
- **JavaScript:** Logica di funzionamento per il contatore e gestione degli errori.

## Contribuire

Se vuoi contribuire a questo progetto, sei il benvenuto! Puoi fare un fork del repository e inviare una pull request con le tue modifiche.

1. Fai un fork di questo repository.
2. Crea un branch per la tua feature (`git checkout -b feature-nome`).
3. Commetti le tue modifiche (`git commit -am 'Aggiunta feature'`).
4. Fai il push del tuo branch (`git push origin feature-nome`).
5. Invia una pull request.

## Licenza

Questo progetto è rilasciato sotto la Licenza MIT. Per maggiori dettagli, consulta il file [LICENSE](LICENSE).

## Autore

Questo progetto è stato creato da [Adriana Russo](https://adriana-rs.github.io). 

## Contatti

Puoi seguire il mio lavoro su:

- [GitHub](https://github.com/adriana-rs)
- [LinkedIn](https://linkedin.com/in/adriana-rs1805)
- [Facebook](https://www.facebook.com/Tony.Adry)
- [Instagram](https://www.instagram.com/adrianars20/profilecard/?igsh=eW42cXphbTdseGRp)

---

Grazie per aver visitato il progetto CountMe! 😊