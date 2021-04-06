/*The fellowship:
Frodo - hobbit, the shire, weapon: sting
Sam - hobbit, the shire, weapon saucepan
Gandalf - wizard, Valinor, weapon: staff
Merry - hobbit, the shire, weapon sword
Pippin - hobbit, the shire, weapon sword
Gimli - dwarf , Erebor, weapon Axe
Legolas - elf, Woodland Realm, weapon bow 
Aragon - man, Valinor, weapon  Elendil's sword
Borimir - man, Gondor, weapon Sword
*/

class Hobbit {
    constructor(firstName,lastName, height, homeLand, weapon) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.homeLand = homeLand;
        this.weapon = weapon;
    }
}

const frodo = new Hobbit('Frodo','Baggins',107,'The Shire', 'Sting');
const sam = new Hobbit('Samwise','Gamgee',109,'The Shire', 'Frying Pan');
const merry = new Hobbit('Meriadoc','Brandybuck',103,'The Shire', 'Dagger');
const pippin = new Hobbit('Peregrin','took',104,'The Shire', 'Dagger');

const hobbits = [frodo,sam,merry,pippin];
