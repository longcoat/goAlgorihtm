function solution(arr) {
  const max = Math.max(...arr);
  const index = arr.findIndex((num) => num === max);
  return [max, index];
}
