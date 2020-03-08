const express = require('express');

const recipeRouter = require('./recipes/recipeRouter');

const server = express();
const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use('/api/recipes', recipeRouter);




server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); 

module.exports = server;