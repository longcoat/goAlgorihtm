function solution(num) {
  let answer = 0;

  num.sort((a, b) => b - a);
  // console.log(num)
  answer = num[0] * num[1];
  return answer;
}
