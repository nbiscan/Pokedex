export function upVote(id, token, email) {
  return fetch(`https://pokedex.byinfinum.co/api/v1/pokemons/${id}/upvote`, {
    method: 'POST',
    headers: {
      Authorization: `Token token=${token}, email=${email}`
    }
  }).then((res) => res.json())
    .then((response) => console.log(response));
}

export function downVote(id, token, email) {
  return fetch(`https://pokedex.byinfinum.co/api/v1/pokemons/${id}/downvote`, {
    method: 'POST',
    headers: {
      Authorization: `Token token=${token}, email=${email}`
    }
  }).then((res) => res.json())
    .then((response) => console.log(response));
}
