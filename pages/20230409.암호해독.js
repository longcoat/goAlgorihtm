function solution(cipher, code) {
  let answer = [...cipher]
    .filter((el, index) => (index + 1) % code === 0)
    .join("");
  // console.log(answer)

  return answer + "";
}
