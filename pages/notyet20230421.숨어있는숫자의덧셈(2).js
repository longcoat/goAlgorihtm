function solution(str) {
  let sum = 0;
  let num = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      num += str[i];
    } else if (num !== "") {
      sum += parseInt(num);
      num = "";
    }
  }
  if (num !== "") {
    sum += parseInt(num);
  }
  return sum;
}

// 다시 풀라고 하면 못 풀 것 같은데 일단 다시 한번 생각해보자
