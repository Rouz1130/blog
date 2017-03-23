import Ember from 'ember';

export default Ember.Component.extend({
  // submit action revices author and body params and sends action to the route(posts) and clears the property
    actions:{
        submitComment(author, body){
            let post = this.get('post');
            this.sendAction('store',author,body,post);
            this.setProperties({
                body: ''
            });
        }
    }
});
