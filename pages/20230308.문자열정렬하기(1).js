function solution(str) {
  const answer = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      answer.push(Number(str[i]));
    }
  }
  return answer.sort((a, b) => a - b);

  // console.log((str.split("").filter((el) => !isNaN(el)).map(Number)).sort((a,b) => a - b))
}

// 밑의 방법은 가독성이 너무 떨어지는 듯 함
