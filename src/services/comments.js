import CommentsService from './commentsService.js';
import {runInAction} from 'mobx';

export function getComments(id, token, email) {
  return fetch(`https://pokedex.byinfinum.co/api/v1/pokemons/${id}/comments`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}, email=${email}`
    }
  }).then((res) => res.json())
    .then((response) => {
      runInAction(() => {
        CommentsService.comments = response.data;
      });
    });
}

export function postComment(id, comment, token, email) {
  return fetch(`https://pokedex.byinfinum.co/api/v1/pokemons/${id}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Token token=${token}, email=${email}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        attributes: {
          content: comment
        }
      }
    })
  });
}
