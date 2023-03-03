function solution(money) {
  let answer = [];
  let coffee = 0;
  let restMoney = 0;

  coffee = Math.floor(money / 5500);
  restMoney = money % 5500;

  answer = [coffee, restMoney];

  return answer;
}
