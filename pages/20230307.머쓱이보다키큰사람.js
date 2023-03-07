function solution(arr, height) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > height) {
      answer++;
    }
  }

  return answer;
}
