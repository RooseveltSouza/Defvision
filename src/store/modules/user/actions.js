export function createUserResquest(name, address, email, password) {
  return {
    type: '@user/CREATE_USER',
    payload: { name, address, email, password },
  };
}

export function createUserSucess() {
  return {
    type: '@user/CREATE_USER_SUCESS',
  };
}

export function createUserFailure() {
  return {
    type: '@user/CREATE_USER_FAILURE',
  };
}
