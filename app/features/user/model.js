import DS from 'ember-data';

export default DS.Model.extend({
  // uid, which is where we will store the unique identifier that is passed from Firebase after authenticating the user
  uid: DS.attr('string'),

  username: DS.attr('string'),
  // username, the avatar which is the Twitter picture, and it has many posts and comments.
  avatar: DS.attr('string'),
  posts: DS.hasMany('post'),
  comments: DS.hasMany('comment')
});
