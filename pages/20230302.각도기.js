function solution(a) {
  if (0 < a && a < 90) {
    return 1;
  } else if (90 < a && a < 180) {
    return 3;
  } else if (90 === a) {
    return 2;
  } else if (180 === a) {
    return 4;
  }
}
