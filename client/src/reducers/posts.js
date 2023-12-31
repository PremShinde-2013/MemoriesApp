import {
  DELETE,
  UPDATE,
  LIKE,
  FETCH_ALL,
  CREATE,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      break;
    case FETCH_ALL:
      return action.payload;
      break;
    case CREATE:
      return [...posts, action.payload];
      break;

    default:
      return posts;

      break;
  }
};
