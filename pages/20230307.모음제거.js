function solution(str) {
  let answer = "";

  answer = [...str]
    .filter(
      (el) => el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u"
    )
    .join("");

  return answer;
}
