import Ember from 'ember';
const {get, set} = Ember;

export default Ember.Component.extend({
  isEditing: false,
  classNames: 'edit',

  // computed property takes model and session objects passed in and checks to see is username matches. the purpose so users cant edit other peoples post only their own. isAllowed computed property will return true if everything matches and false if not.
  isAllowed: Ember.computed('model.firstObject.user.username','session.currentUser.username', function(){
    return get(this,'model.firstObject.user.username') === get(this,'session.currentUser.username');
  }),

  // sendAction sends everything to the route
  actions:{
    save(post){
      let sessionName = get(this,'session.currentUser.username');
      if(sessionName === post.get('user.username')){
        // isEditing keeps track if article is being edited.
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
