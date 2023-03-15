function solution(before, after) {
  //     const beforeN = before.split("").reverse().join("")

  //     if(beforeN === after) {
  //         return 1
  //     }
  //         return 0
  for (let i = before.length; i >= 0; i--) {
    if (before[i] !== after[i]) return 0;
    else if (i == 0) return 1;
  }
}

//not yet
