// --------------------------ESERCIZIO 1-----------------------//


class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
       
        IsMaxAge (userToCompare) {
            return  this.age > userToCompare.age ? `l età di ${this.firstName} è maggiore di ${userToCompare.firstName}` : "l'età è minore";
        }
    }
    

const Dario = new User("Dario","Annunziata","25","Napoli")
const Giovanni = new User("Giovanni","Esposit","27","Salerno")
const Pasquale = new User("Pasquale","Iorio","28","Caserta")

console.log(Dario.IsMaxAge(Giovanni))
console.log(Giovanni.IsMaxAge(Pasquale))
console.log(Pasquale.IsMaxAge(Dario))



class Pet{
    constructor(petName, ownerName, species, breed){

        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    IsSameOwners (petToCompare) {
        return  this.ownerName === petToCompare.ownerName 
    }

}


const pets=[];
function insertPetList() {
    const petList = document.getElementById("petList")
    petList.innerHTML = "";
    pets.forEach((pet,index) => {
        const listItems = document.createElement("li")
        listItems.textContent = `Name: ${pet.petName}, Owner Name:${ownerName}, Species:${species}, Breed:${breed}`;
        petList.appendChild(listItems)
    });

    
}
document.getElementById("petForm").addEventListener("submit", function (event){
    event.preventDefault();
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet (petName, ownerName, species, breed);
    pets.push(newPet);
    insertPetList();
    document.getElementById("petForm").reset();
})