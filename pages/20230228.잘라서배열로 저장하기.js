function solution(my_str, n) {
  let answer = [];

  let strN = my_str.split("");

  while (strN.length > 0) {
    answer.push(strN.splice(0, n).join(""));
  }
  return answer;
  // console.log(answer)
}
