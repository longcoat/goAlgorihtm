function solution(str, n) {
  let answer = "";
  answer = [...str].map((e) => e.repeat(n)).join("");
  // console.log(answer)

  return answer;
}
