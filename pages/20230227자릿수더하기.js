// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  let answer = 0;
  let Num = n.toString().split("");
  console.log(Num);
  for (let i = 0; i < Num.length; i++) {
    answer += Number(Num[i]);
    console.log(answer);
  }

  return answer;
}
