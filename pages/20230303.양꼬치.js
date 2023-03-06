function solution(n, k) {
  let answer = 0;
  let drink = k;
  let event = Math.floor(n / 10);

  answer = 12000 * n + (drink - event) * 2000;

  return answer;
}
