function solution(str, num1, num2) {
  const arr = str.split("");
  if (arr[num1] === arr[num2]) {
    return arr.join("");
  }
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

  return arr.join("");
}
