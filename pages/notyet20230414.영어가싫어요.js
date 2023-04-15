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
  consoe.log(numbers);
  // return (Number(numbers))
}

// 일단 하긴했는데 뭔가 콘솔로그 찍어도 제대로 안나오고 체크가 잘 안되는데 흠...
