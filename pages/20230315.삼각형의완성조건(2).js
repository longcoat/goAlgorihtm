function solution(sides) {
  let answer = 0;
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  // console.log(max)
  // 기존 배열중에 제일 긴변이 있을 때
  for (let i = max - min + 1; i <= max; i++) {
    answer++;
  }
  // 기존 배열중에 제일 긴변이 없다고 할 때
  for (let i = max + 1; i < max + min; i++) {
    answer++;
  }

  return answer;
}
