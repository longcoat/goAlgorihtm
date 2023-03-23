function solution(common) {
  let commonDiff = common[1] - common[0] === common[2] - common[1];
  if (commonDiff) {
    return common[common.length - 1] + common[1] - common[0];
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
  // console.log(common[common.length - 1])
}
