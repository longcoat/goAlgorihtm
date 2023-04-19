function solution(emergency) {
  let order = [...emergency].sort((a, b) => b - a);
  console.log(order);
  let answer = emergency.map((el) => order.indexOf(el) + 1);

  return answer;
}
