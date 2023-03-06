function solution(arr, n) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      answer++;
    }
  }

  return answer;
}
