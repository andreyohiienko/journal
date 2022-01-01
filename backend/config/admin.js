module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d3c1d456eedb4b608e4dddb0575fcb4'),
  },
});
