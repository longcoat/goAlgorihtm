function solution(str) {
  let sum = 0;
  let strN = str.split("").filter((el) => Number(el));
  for (i = 0; i < strN.length; i++) {
    sum += Number(strN[i]);
  }
  return sum;
}
