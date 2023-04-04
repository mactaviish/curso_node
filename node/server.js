import app from './src/app.js';

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`waiting for http://localhost:${port}`);
});

export default server;
