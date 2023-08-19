import axios from 'axios';

const API_KEY = 'AIzaSyBSeUY3TMw21NBq5bLckakMHJQIEvLtgMQ';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function logIn(email, password) {
  return authenticate('signInWithPassword', email, password);
}
