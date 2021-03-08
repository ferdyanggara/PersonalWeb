import dummyData from "../../contents/dummy-data";
import { ADD_NEWS } from "../actions/newsActions";
import { DELETE_NEWS } from "../actions/newsActions";

const initialState = {
  news: dummyData,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      const updatedNews = [...state.news, { id: action.id, title: action.title, description: action.description }];
      return { news: updatedNews };
    case DELETE_NEWS:
      const filteredNews = state.news.filter((each) => each.id != action.id);
      return { news: filteredNews };
    default:
      return state;
  }
};

export default newsReducer;
