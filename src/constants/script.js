let arrayOneTwo = [12, 41, 3, 13, 122, 52, 89];

const sort = array => {
   for (let i = 0; i < array.length; i++) {
      let currentMin = array[i];
      let currentMinIndex = i;

      for (let j = i + 1; j < array.length; j++) {
         if (array[j] < currentMin) {
            currentMin = array[j];
            currentMinIndex = j;
         }
      }

      if (currentMinIndex !== i) {
         array[currentMinIndex] = array[i];
         array[i] = currentMin;
      }
   }
   return array;
}

console.log(sort(arrayOneTwo));



