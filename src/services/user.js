import commentsService from './commentsService.js';
import {runInAction} from 'mobx';

export function loginUser(email, pass) {
  return fetch('https://pokedex.byinfinum.co/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        type: 'session',
        attributes: {
          email,
          password: pass
        }
      }
    })
  }).then((res) => res.json());
}

export function getUsername(id, email, token) {
  return fetch(`https://pokedex.byinfinum.co/api/v1/users/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}, email=${email}`,
      'Content-type': 'application/json'
    }
  }).then((res) => res.json())
    .then((response) => {
      runInAction(() => {
        commentsService.author.push(response.data.attributes.username);
      });
      
    });
}
