function solution(num) {
  let answer = [];
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  answer = [evenCount, oddCount];

  return answer;
}
