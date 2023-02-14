function removeFromArray(array, ...toRemove) {

  const filtered = array.slice();

  // Remove each specified element
  for (const element of toRemove) {
    // Remove every occurrence of the element from the array
    let index;
    do {
      index = filtered.indexOf(element);
      if (index !== -1) {
        filtered.splice(index, 1);
      }
    } while (index !== -1);
    // Stop and move on to next element when current not found
  }

  console.log(filtered);

  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
