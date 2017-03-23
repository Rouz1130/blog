import Ember from 'ember';
const {get, set} = Ember;

export default Ember.Component.extend({
  isEditing: false,
  classNames: 'edit',
  isAllowed: Ember.computed('model.firstObject.user.displayName','session.currentUser.displayName', function(){
    return get(this,'model.firstObject.user.displayName') === get(this,'session.currentUser.displayName');
  }),
  actions:{
    save(post){
      let sessionName = get(this,'session.currentUser.displayName');
      if(sessionName === post.get('user.displayName')){
        set(this, 'isEditing', false);
        this.sendAction('save',post);

      }
      else{
        alert('Sorry not authorized');
      }

    },
    edit(){
      set(this, 'isEditing', true);
    },
    delete(post){
      this.sendAction('delete',post);
      set(this,'isEditing',false);
    },
    createComment(author, body, post){
      this.sendAction('createComment',author, body, post);
    }
  }
});
