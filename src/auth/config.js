export default {
  facebookAuth: {
    clientID: '1217952365005373', // your App ID
    clientSecret: '170869f28a80a95c39b50e62c201f2bc', // your App Secret
    callbackURL: 'http://localhost:4000/api/auth/facebook/callback',
    profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    profileFields: ['id', 'email', 'name'],
  },
}
