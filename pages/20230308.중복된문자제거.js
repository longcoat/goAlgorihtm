function solution(str) {
  let answer = "";

  answer = [...str].filter((el, index) => str.indexOf(el) === index).join("");
  // console.log(answer)

  return answer;
}
