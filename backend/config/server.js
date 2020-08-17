module.exports = ({ env }) => ({
  host: env('HOST', '176.14.246.18'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6453bfc035b4d133f44651ff0d1fe5cf'),
    },
  },
});

