/*
*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/


/*
const tableName = 'Tavolo Vip';
const guests = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];
const placeholders = []

for (let i = 0; i < guests.length; i++) {
    const guestName = guests[i];  // Prende il nome dell'ospite corrente
    return guestName;
}
    */


/*

*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*BONUS*
Stampare in pagina oltre che in console!
Ricordate sempre di fare la scaletta e che essendo Venerdì tocca lavorare :linguaccia_occhiolino:
Buon lavoro e buon weekend :cuore:

*/


/*
*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

//creare un array di oggetti(biciDaCorsa= nome, peso,)


const biciDaCorsa = [
    {name:'Scott',peso: 15},
    {name:'Specialized',peso: 12},
    {name:'Canyon',peso: 10},
    {name:'Willier',peso: 11}
]

