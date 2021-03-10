import {
  NEWS_REQUEST,
  NEWS_REQUEST_SUCCESS,
  NEWS_REQUEST_FAILED,
  NEWS_DETAIL_REQUEST,
  NEWS_DETAIL_REQUEST_SUCCESS,
  NEWS_DETAIL_REQUEST_FAILED,
  ADD_NEWS_REQUEST,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_FAILED,
} from "../constants/newsConstant";

import axios from "axios";
import { SERVER_URL } from "../constants/serverUrl";

export const listNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_REQUEST });
    const { data } = await axios.get(`${SERVER_URL}post/all-posts`);

    dispatch({
      type: NEWS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEWS_REQUEST_FAILED,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

export const listNewsDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_DETAIL_REQUEST });
    const { data } = await axios.get(`${SERVER_URL}post/spec-post/${id}`);

    console.log("data", data);
    dispatch({
      type: NEWS_DETAIL_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEWS_DETAIL_REQUEST_FAILED,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};
export const addNews = ({ id, title, description, image }) => async (dispatch) => {
  try {
    dispatch({ type: ADD_NEWS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${SERVER_URL}post/add-post`, { id, title, description, image }, config);

    console.log("data", data);
    dispatch({
      type: ADD_NEWS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ADD_NEWS_FAILED,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message,
    });
  }
};

// export const addNews = (id, title, description) => {
//   return { type: ADD_NEWS, id: id, title: title, description: description };
// };

// export const editNews = (id, title, description) => {
//   return { type: EDIT_NEWS, id: id, title: title, description: description };
// };

// export const deleteNews = (id) => {
//   return { type: DELETE_NEWS, id: id };
// };
