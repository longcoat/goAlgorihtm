function solution(arr) {
  let Arr = arr.sort((a, b) => a - b);
  let centerN = Math.floor(Arr.length / 2);

  return Arr[centerN];
}
