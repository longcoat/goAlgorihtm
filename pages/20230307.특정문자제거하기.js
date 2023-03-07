function solution(str, letter) {
  let answer = "";
  strN = str.split("");
  // console.log(strN)
  answer = strN.filter((el) => el !== letter).join("");

  return answer;
}
