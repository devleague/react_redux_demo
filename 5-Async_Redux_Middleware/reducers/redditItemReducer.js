'use strict';

import { List } from 'immutable';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/redditActions';

const initialState = List();

const redditItemReducer = (state = initialState, action) => {

  let newState = state;

  switch(action.type) {

    case FETCH_POSTS_REQUEST:
      return state;

    case FETCH_POSTS_SUCCESS:
      const parsedPosts = JSON.parse(action.response).data.children
      return List(parsedPosts);

    case FETCH_POSTS_FAILURE:
      return state;

    default:
      newState;
  }
  return newState;
};

export default redditItemReducer;
