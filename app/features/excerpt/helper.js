import Ember from 'ember';
// show the first 15 characters When displaying each post on the front page

// function returns a substring of the first 15 characters and appends '...' at the end.
export function excerpt(params) {
  return params[0].substring(0,15)+'...';
}

export default Ember.Helper.helper(excerpt);
