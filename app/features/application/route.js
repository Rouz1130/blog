import Ember from 'ember';
const {get} = Ember;
// this route is responsbile for returning the model and handling actions.
export default Ember.Route.extend({
  beforeModel(){
    return get(this,'session').fetch().catch(function(){});
  },
  // returns all posts in the database.
  model(){
    return this.store.findAll('post');
  },
  // login and logout actions user the session service
  actions:{
    // to login we call open and give the name of our provider e.g twitter.
    login(){
      get(this,'session').open('firebase', { provider: 'twitter'}).then(function(data) {
        console.log(data);
      });
    },
    // action to logout we need to call close()
    logout(){
      get(this,'session').close();
    }
  }
});
