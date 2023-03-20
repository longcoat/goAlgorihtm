function solution(numer1, denom1, numer2, denom2) {
  let bunza = numer1 * denom2 + numer2 * denom1;
  let bunmo = denom1 * denom2;
  let maximum = 1;

  for (let i = 1; i <= bunza; i++) {
    if (bunza % i === 0 && bunmo % i === 0) {
      maximum = i;
    }
  }
  let answer = [bunza / maximum, bunmo / maximum];
  // console.log(answer)
  return answer;
}
