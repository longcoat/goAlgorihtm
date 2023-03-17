function solution(s, j, k) {
  const a = Array.from(Array(j - s + 1).fill(s), (s, i) => s + i);
  console.log(a);
  return a;
}

// 다시 생각해보자
