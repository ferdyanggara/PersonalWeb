export const ADD_NEWS = "ADD_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";

export const addNews = (id, title, description) => {
  return { type: ADD_NEWS, id: id, title: title, description: description };
};

export const deleteNews = (id) => {
  return { type: DELETE_NEWS, id: id };
};
