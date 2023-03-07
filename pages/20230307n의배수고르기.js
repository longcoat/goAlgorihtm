function solution(n, numlist) {
  let answer = [];
  answer = numlist.filter((el) => el % n === 0);
  console.log(answer);

  return answer;
}
