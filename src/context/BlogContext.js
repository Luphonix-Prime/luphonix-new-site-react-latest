
import React, { createContext, useContext, useReducer } from 'react';
import { blogPosts as initialBlogPosts } from '../data/mockData';

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'ADD_POST':
      return { 
        ...state, 
        posts: [action.payload, ...state.posts] 
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.payload.id ? action.payload : post
        )
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case 'SET_ADMIN':
      return { ...state, isAdmin: action.payload };
    case 'LOGOUT_ADMIN':
      return { ...state, isAdmin: false };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, {
    posts: initialBlogPosts,
    isAdmin: false
  });

  // Admin password - Change this to your desired password
  const ADMIN_PASSWORD = "luphonix2024";

  const authenticateAdmin = (password) => {
    if (password === ADMIN_PASSWORD) {
      dispatch({ type: 'SET_ADMIN', payload: true });
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    dispatch({ type: 'LOGOUT_ADMIN' });
  };

  return (
    <BlogContext.Provider value={{ state, dispatch, authenticateAdmin, logoutAdmin }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
