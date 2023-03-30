function solution(age) {
  let alphabet = {
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    e: "4",
    f: "5",
    g: "6",
    h: "7",
    i: "8",
    j: "9",
  };
  let age962 = age + "";
  // console.log(age962)

  console.log(
    age962
      .split("")
      .map((el) => alphabet[el])
      .join("")
  );
}

// 아직 좀더 생각해보자
