function solution(n) {
  // const pizzaN = n * 6;
  // console.log(pizzaN)
  // const minimumPizza = (pizzaN % 6) === 0 ? pizzaN / 6 : Math.floor(pizzaN / 6)
  // return minimumPizza

  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n === 0) {
      return i;
    }
  }
}
