const findTheOldest = function(persons) {
  return persons.reduce((person, otherPerson) => {    
    // Use death to calculate age, or present year if still alive
    let now = new Date();
    let currentYear = now.getFullYear();
    let personEndDate = person.yearOfDeath ? person.yearOfDeath : currentYear;
    let otherPersonEndDate = otherPerson.yearOfDeath ? otherPerson.yearOfDeath : currentYear;
    
    let personAge = personEndDate - person.yearOfBirth;
    let otherPersonAge = otherPersonEndDate - otherPerson.yearOfBirth;
    
    return personAge >= otherPersonAge ? person : otherPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
