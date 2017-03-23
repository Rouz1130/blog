import Ember from 'ember';
import cleanURI from '../clean/util';
import cleanURI from '../clean/util';

const {get} = Ember;

export default Ember.Route.extend({
  model(param) {
    return this.store.query('post', {orderBy: 'titleURL', equalTo: param:titleURL});
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
      this.transitionTo('index');
    },
    save(post) {
      let titleURL = cleanURI(post.get('title'));
      post.save('titleURL', titleURL);
      post.save();
      this.transitionTo('index');
    },
    createComment(author, body, post){
      let user = null;
      let comment = this.store.createRecord('comment', {
        body:body
      });
      // getOrCreateUser utility we worked on earlier. It receives back an existing user model or a new one. This depends if the uid is already in the database or not. It also creates a new record for the comment.
      let uid = author.get('uid');
      user = getOrCreateUser(uid,
        get(this,'session.currentUser.username'),
        get(this.'session.currentUser.profileImageURL'),
        this.store);


        // this part here uses promises. If the user promise resolves we first add the comment object to both the user and post. This is nessary when we are dealing with hasMany and belongsTo relationships  
        user.then((userData) =>{
          userData.get('comments').addObject(comment);
          console.log('test');
          return comment.save().then(()=> {
            console.log('comment saved succesfully');
            return post.save();
          })
          .catch((error)=>{
            console.log(`comment: ${error}`);
            comment.rollbackAttributes();
          })
          .then(()=> {
            console.log('post saved succesfully');
            return userData.save();
          })
          .catch((error)=>{
            console.log(`post:  ${error}`);
            post.rollbackAttributes();
          })
          .then(()=>{
            console.log('user saved successfuly');
          })
          .catch((error)=>{
            console.log(`user:  ${error}`);
            user.rollbackAttributes();
          });


        });
