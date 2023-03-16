function solution(s) {
  let answer = [];
  let sArr = s.split("");

  sArr.filter((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      answer.push(item);
      console.log(answer.sort().join(""));
    }
  });
  return answer.sort().join("");
}
