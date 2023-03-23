function solution(idpw, db) {
  let matchId = db.filter((el) => el[0] === idpw[0]);
  let matchPw = matchId.filter((el) => el[1] === idpw[1]);
  // console.log(idpw)
  if (!!matchPw.length) return "login";
  else if (!!matchId.length) return "wrong pw";
  else return "fail";
}
