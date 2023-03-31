function solution(age) {
  let alphabet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  let age962 = String(age)
    .split("")
    .map((el) => alphabet[el])
    .join("");
  // console.log(age962)
  return age962 + "";
}
