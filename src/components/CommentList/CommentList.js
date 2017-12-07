import React from 'react';
import Comment from '../Comment/Comment.js';

const CommentList = ({comments}) => (
  <div>
    {
      comments.map((comment, counter) => <Comment comment={comment} counter={counter}/>)
    }
  </div>
);

export default CommentList;
