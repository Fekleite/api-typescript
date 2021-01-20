export default {
  jwt: {
    secret: process.env.SECRET_TOKEN || 'default_test',
    expiresIn: '1d',
  },
};