const assertArraysEqual = function (arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
      }
      else {
        console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2} `);
      }
    }
  }
}


assertArraysEqual([1,2,3],[1,2,3])