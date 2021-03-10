import {
  NEWS_REQUEST,
  NEWS_REQUEST_SUCCESS,
  NEWS_REQUEST_FAILED,
  NEWS_DETAIL_REQUEST,
  NEWS_DETAIL_REQUEST_SUCCESS,
  NEWS_DETAIL_REQUEST_FAILED,
} from "../constants/newsConstant";

export const newsReducer = (state = { news: [], loading: true }, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return { news: [], loading: true };
    case NEWS_REQUEST_SUCCESS:
      return { news: action.payload, loading: false };
    case NEWS_REQUEST_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
export const newsDetailReducers = (state = { news: [], loading: true }, action) => {
  switch (action.type) {
    case NEWS_DETAIL_REQUEST:
      return { news: [], loading: true };
    case NEWS_DETAIL_REQUEST_SUCCESS:
      return { news: action.payload, loading: false };
    case NEWS_DETAIL_REQUEST_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
export const addNews = (state = { news: [], loading: true }, action) => {
  switch (action.type) {
    case NEWS_DETAIL_REQUEST:
      return { news: [], loading: true };
    case NEWS_DETAIL_REQUEST_SUCCESS:
      return { news: action.payload, loading: false };
    case NEWS_DETAIL_REQUEST_FAILED:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

// ADD LOGIC
// const updatedNews = [...state.news, { id: action.id, title: action.title, description: action.description }];
// return { news: updatedNews };

// DELETE LOGIC
// const filteredNews = state.news.filter((each) => each.id != action.id);
// return { news: filteredNews };

// UPDATE LOGIC
// let index = state.news.find((each) => each.id == action.id).id;
// let content = state.news;
// content.splice(index - 1, 1, { id: action.id, title: action.title, description: action.description });
// return { news: content };
