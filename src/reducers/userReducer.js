import { REGISTER_USER } from "../actions/userActions";
import { SIGN_IN } from "../actions/userActions";
import { DELETE_USER } from "../actions/userActions";
import { UPDATE_USER } from "../actions/userActions";
import { GET } from "../actions/userActions";
import axios from "axios";

// const SERVER_URL = 'localhost:5000/'

// const getAllUser = asnyc() => {
//   const allUser = await axios.get(`${SERVER_URL}user/all-users`)
//   console.log('all user:', allUser)
// }

// getAllUser();

// const initialState = {
//   user: ,
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NEWS:
//       const updatedNews = [...state.news, { id: action.id, title: action.title, description: action.description }];
//       return { news: updatedNews };
//     case EDIT_NEWS:
//       let index = state.news.find((each) => each.id == action.id).id;
//       let content = state.news;
//       content.splice(index - 1, 1, { id: action.id, title: action.title, description: action.description });
//       return { news: content };
//     case DELETE_NEWS:
//       const filteredNews = state.news.filter((each) => each.id != action.id);
//       return { news: filteredNews };
//     default:
//       return state;
//   }
// };

// export default userReducer;
