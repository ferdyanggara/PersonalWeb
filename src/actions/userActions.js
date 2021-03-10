export const REGISTER_USER = "REGISTER_USER";
export const SIGN_IN = "SIGN_IN";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER = "GET_USER";

export const addUser = (id, title, description) => {
  return { type: REGISTER_USER, id: id, title: title, description: description };
};

export const signIn = (id, title, description) => {
  return { type: SIGN_IN, id: id, title: title, description: description };
};

export const updateUser = (id, title, description) => {
  return { type: UPDATE_USER, id: id, title: title, description: description };
};

export const deleteUser = (id) => {
  return { type: DELETE_USER, id: id };
};
