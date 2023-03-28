function solution(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i] = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr[i].push(j);
      }
    }
  }
  return arr.filter((item) => item.length >= 3).length;
}
