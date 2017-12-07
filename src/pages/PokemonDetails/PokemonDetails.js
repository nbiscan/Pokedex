import React from 'react';
import ThumbsUp from '../../assets/thumb_up.png';
import ThumbsDown from '../../assets/thumb_down.png';
import ThumbsUpSelected from '../../assets/thumb_up_selected.png';
import ThumbsDownSelected from '../../assets/thumb_down_selected.png';
import {upVote, downVote} from '../../services/votes';
import {save, read} from '../../services/storage';
import CommentsService from '../../services/commentsService';
import '../../Buttons.css';
import {observer} from 'mobx-react';
import CommentList from '../../components/CommentList/CommentList.js';
import CommentService from '../../services/commentsService.js';
import {getComments, postComment} from '../../services/comments.js';
import './PokemonDetails.css';
import {getUsername} from '../../services/user.js';


class PokemonDetails extends React.Component {

  constructor(args) {
    super(args);
    this.commentText = '';
    this.counter = 0;
  }

  componentWillMount() {
    CommentsService.author = [];
    getComments(this.props.id, read('token'), read('email')).then(() => {
      CommentService.comments.map((comment) => getUsername(comment.relationships.author.data.id, read('email'), read('token')));
    });
    
  }

  upvote(id) {
    upVote(id, read('token'), read('email'))
      .then(() => {
        save(id, 'up');
        window.location.reload(false);
      });

  }

  downvote(id) {
    downVote(id, read('token'), read('email'))
      .then(() => {
        save(id, 'down');
        window.location.reload(false);
      });
  }

  comment() {
    postComment(this.props.id, this.commentText.value, read('token'), read('email'))
      .then(() => window.location.reload(false));

  }

  renderVotes(id) {
    if (read(id) === 'up') {
      return (
        <div className="details__thumbs">
          <img className="details__likeImg" src={ThumbsUpSelected} onClick={() => this.upvote(this.props.id)}/>
          <h2 className="details__like">Like</h2>
          <img className="details__dislikeImg" src={ThumbsDown} onClick={() => this.downvote(this.props.id)}/>
          <h2 className="details__dislike">Dislike</h2>
        </div>);
    } else if (read(id) === 'down') {
      return (
        <div className="details__thumbs">
          <img className="details__likeImg" src={ThumbsUp} onClick={() => this.upvote(this.props.id)}/>
          <h2 className="details__like">Like</h2>
          <img className="details__dislikeImg" src={ThumbsDownSelected} onClick={() => this.downvote(this.props.id)}/>
          <h2 className="details__dislike">Dislike</h2>
        </div>);
    }
    return (
      <div className="details__thumbs">
        <img className="details__likeImg" src={ThumbsUp} onClick={() => this.upvote(this.props.id)}/>
        <h2 className="details__like">Like</h2>
        <img className="details__dislikeImg" src={ThumbsDown} onClick={() => this.downvote(this.props.id)}/>
        <h2 className="details__dislike">Dislike</h2>
      </div>);
  }

  render() {
    return (

      <div className="details">
        <h1 className="details__title">{this.props.pokemon.name}</h1>
        <div className="details__desc">
          <img className="details__avatar" src={`https://pokedex.byinfinum.co/${this.props.pokemon['image-url']}`} />
          <div className="details__rightside">
            <h2 className="details__about">ABOUT <br/> <h2 className="details__ab">{this.props.pokemon.description}</h2></h2>
            <h2>INFO</h2>
            <div className="details__info">
              <h2 className="details__height">HEIGHT <br/> {this.props.pokemon.height}</h2>
              <h2 className="details__gender">GENDER <br/> {this.props.pokemon.gender}</h2>
              <h2 className="details__weight">WEIGHT <br/> {this.props.pokemon.weight}</h2>
              <h2 className="details__type">VOTES COUNT: <br/> {this.props.pokemon['total-vote-count']}</h2>
            </div>
           
            {this.renderVotes(this.props.id)}
           
            <br/>
            <button className="button">CHOOSE POKEMON</button>
          </div>
        </div>
        <div className="details__comments">
          <h2 className="details__text">COMMENTS</h2>
          <CommentList comments={CommentService.comments} counter={this.counter}/>
          <div className="details__btn">
            <input type="text" className="details__comm__text" ref={(input) => {
              this.commentText = input;
            }} />
            <button className="button" onClick = {() => this.comment()}>POST</button>
          </div>
        </div>
      </div>);
  }

}

export default observer(PokemonDetails);

