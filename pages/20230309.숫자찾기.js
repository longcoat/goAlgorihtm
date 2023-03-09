function solution(num, k) {
  // const arrN = num.toString().indexOf(String(k))
  // if(arrN === -1) return arrN
  // else return arrN+1
  // return arrN === -1 ? arrN : arrN+1

  const str = num.toString();

  for (let i = 0; i < str.length; i++) {
    console.log(typeof str[i]);
    if (str[i] === String(k)) {
      return i + 1;
    }
  }
  return -1;
}
