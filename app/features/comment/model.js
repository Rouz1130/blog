import DS from 'ember-data';

export default DS.Model.extend({
    body: DS.attr('string'),
    user: DS.belongsTo('user'),
    post: DS.belongsTo('post')

});
// comment model has a body and belongs to user and post. That way you can track the user and post with each comment.
