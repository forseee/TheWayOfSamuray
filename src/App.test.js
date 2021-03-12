import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import profileReducer, { addPostActionCreator } from './Redux/profiel-reducer';

test('length post should be equal 5', () => {
  const action = addPostActionCreator("iliaVor")
  const state = {
    posts: [
      { id: 1, message: 'Hey man what a you doing', likes: 10 },
      { id: 2, message: 'You a losser man', likes: 51 },
      { id: 3, message: 'React easy', likes: 25 },
      { id: 4, message: 'React easy', likes: 25 }
  ]
  }
  const newState = profileReducer(state,action)
  expect(newState.posts.length).toBe(5);
});
