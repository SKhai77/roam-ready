const { model, Schema } = require('mongoose');

const postSchema = new Schema({
 
  body:String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280,
      createdAt: String
    }
  ],
  likes: [
    {
      username: String,
      required: true,
      trim: true,
      createdAt: String
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);