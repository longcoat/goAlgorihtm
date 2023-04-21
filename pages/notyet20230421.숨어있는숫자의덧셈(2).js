function solution(str) {
  let sum = 0;
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      num += parseInt(str[i]);
      console.log(num);
    }
  }
}

//  parseInt 저기서 쓰는 것 좀 아닌 것 같은데 다시 한번 생각해보자
