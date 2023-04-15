function solution(numbers) {
  let numString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = numString.forEach(
    (el, index) => (numbers = numbers.split(el).join(String(index)))
  );
  // consoe.log(numbers)
  return Number(numbers);
}

// 내일 다시한번 봐보자
