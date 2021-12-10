const nicknameReg = /^[a-zA-Z0-9]+$/;
// new RegExp("[a-zA-Z0-9S]{3,15}");

const nicknameValidate = (nickname) => nicknameReg.test(nickname) && nickname.length >= 3;

const passwordValidate = (password, nickname) => password.match(new RegExp(nickname)) === null && password.length >= 4;

const confirmPasswordValidate = (password, confirmPassword) => password === confirmPassword;

// const signupPipe = [nicknameValidate, passwordValidate, confirmPasswordValidate];

export const fundingPostValidate = (reqBody) => {
  // if (signupPipe.every((fn) => fn(reqBody))) return reqBody;
  const { nickname, password, confirmPassword } = reqBody;
  if (!nicknameValidate(nickname)) {
    throw new Error("닉네임 조건에 맞지않습니다");
  }
  if (!passwordValidate(password, nickname)) {
    throw new Error("비밀번호 조건에 맞지 않습니다");
  }
  if (!confirmPasswordValidate(password, confirmPassword)) {
    throw new Error("다른 비밀번호 입력하였습니다");
  }
  return reqBody;
};
// const loginPipe = [nicknameValidate, passwordValidate];

export const fundingUpdateValidate = () => {};

const validate = {
  nicknameValidate,
  passwordValidate,
  confirmPasswordValidate,
  validateSignup,
  // validateLogin: (reqBody) => {
  //   if (loginPipe.every((fn) => fn(reqBody))) return reqBody;
  //   throw Error("validate에러");
  // },
};

// function validateSignup(reqBody) {
//   const { nickname, password, confirmPassword } = reqBody;
//   if (nicknameValidate(nickname) && passwordValidate(password, nickname) && confirmPasswordValidate(password, confirmPassword)) {
//     return reqBody;
//   } else {
//     throw Error("validate에러");
//   }
// }

// function nicknameValidate(nickname) {
//   const regexp = new RegExp("[a-zA-Z0-9]{3,15}");
//   return regexp.test(nickname);
// }

// function passwordValidate(password, nickname) {
//   const regexp = new RegExp(`${nickname}`);
//   return password.match(regexp) === null && regexp.length >= 4;
// }

// function confirmPasswordValidate(password, confirmPassword) {
//   return password === confirmPassword;
// }
