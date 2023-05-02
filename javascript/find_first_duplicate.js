function findFirstDuplicate(arr) {
 if (arr.length === 0 || arr.length === 1) {
  return -1
 } else if (arr.length === 2 && arr[1] === arr[2]) {
  console.log(11)
 } else {
    for (let i = 0; i < arr.length-1; i++) {
      let maybeDuplicate = arr[i]
      for (let j = i+1; j < arr.length-1; j++) {
       if (maybeDuplicate === arr[j]) {
        return maybeDuplicate
       }
      }
    }
}
}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("")

  console.log("expecting: -1")
  console.log("=>", findFirstDuplicate([]))
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
