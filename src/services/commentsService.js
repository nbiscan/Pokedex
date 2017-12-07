import {observable} from 'mobx';

class CommentsService {
  constructor() {
    this.comments = [];
    this.author = [];
  }

}

export default observable.object(new CommentsService());
