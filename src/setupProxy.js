const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        'https://queue-times.com/parks/6/queue_times.json',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      );
};