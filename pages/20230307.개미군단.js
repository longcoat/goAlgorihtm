function solution(hp) {
  let answer = 0;
  let first = Math.floor(hp / 5);
  let second = Math.floor((hp - first * 5) / 3);
  let third = hp - first * 5 - second * 3;

  answer = first + second + third;

  return answer;
}
