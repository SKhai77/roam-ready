import decode from 'jwt-decode';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from './mutations';

class AuthService {
  constructor() {
    // Initialize Apollo Client
    this.client = new ApolloClient({
      uri: 'YOUR_GRAPHQL_ENDPOINT', // Set your GraphQL endpoint here
      cache: new InMemoryCache(),
    });
  }

  // Decode JWT to get user data
  getProfile() {
    return decode(this.getToken());
  }

  // Check if user is logged in
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  // Check if token is expired
  isTokenExpired(token) {
    const decoded = decode(token);
    return decoded.exp < Date.now() / 1000;
  }

  // Retrieve token from local storage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Log in user and save token
  async login(email, password) {
    const { data } = await this.client.mutate({
      mutation: LOGIN_USER,
      variables: { email, password }
    });
    localStorage.setItem('id_token', data.login.token);
    window.location.assign('/');
  }

  // Register user and save token
  async register(username, email, password) {
    const { data } = await this.client.mutate({
      mutation: ADD_USER,
      variables: { username, email, password }
    });
    localStorage.setItem('id_token', data.addUser.token);
    window.location.assign('/');
  }

  // Log out user
  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
