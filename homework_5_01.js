var inputArr = [6, 78, "n", 0, 1];
var outputArr = [];

function removeFirstIndex(array) {
    for (var i=0; i<array.length; i++) {
    var pushOrNot = true;
       
      if (i >0) {
      outputArr.push(array[i]);
      }
    }
return outputArr
}

console.log(removeFirstIndex(inputArr));