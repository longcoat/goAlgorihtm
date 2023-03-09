function solution(num) {
  const maxN = num.sort((a, b) => b - a);
  const positiveMax = maxN[0] * maxN[1];
  const negativeNum = maxN[maxN.length - 1] * maxN[maxN.length - 2];

  return positiveMax > negativeNum ? positiveMax : negativeNum;
}
