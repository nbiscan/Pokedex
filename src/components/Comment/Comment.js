import React from 'react';
import './Comment.css';
import commentsService from '../../services/commentsService.js';
import {observer} from 'mobx-react';


const Comment = ({counter, comment}) => (
  <div className="comment">
    <h3 className="comment__author">{commentsService.author[counter]}</h3>
    {console.log(commentsService.author.length)}
    <h3 className="comment__text">{comment.attributes.content}</h3>
    <h3 className="comment__date">{comment.attributes['created-at'].split('T')[0]}</h3>
  </div>
);

export default observer(Comment);
