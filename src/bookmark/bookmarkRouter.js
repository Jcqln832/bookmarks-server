const express = require('express')
const uuid = require('uuid/v4')
const { isWebUri } = require('valid-url')
const logger = require('../logger')

const bookmarkRouter = express.Router()
const bodyParser = express.json()

const bookmarks = [{
  id: 1,
  title: 'First Bookmark!',
  url: 'https://google.com',
  description: "A fantastic book",
  rating: "4"
}];

bookmarkRouter
  .route('/bookmarks')
  .get((req, res) => {
    res.json(bookmarks);
    })
  .post(bodyParser, (req, res) => {
      // Add a new Bookmark
      const { title, url, description = "Bookmark description", rating } = req.body;
  
      if (!title) {
      logger.error(`Title is required`);
      return res
          .status(400)
          .send('Invalid data');
      }

      if (title.length > 50) {
        logger.error(`Title length should be no more than 50 characters`);
        return res
            .status(400)
            .send('Invalid data');
      }
      
      if (!url) {
      logger.error(`Url not supplied`);
      return res
          .status(400)
          .send(`'url' is required`);
      }

      //validate url is valid
      if (!isWebUri(url)) {
        logger.error(`Invalid url '${url}' supplied`)
        return res.status(400).send(`'url' must be a valid URL`)
      }

      if (!rating) {
        logger.error(`Rating not supplied`);
        return res
            .status(400)
            .send(`Rating is required.`);
      }

      if (!Number.isInteger(rating) || rating > 5 || rating < 1) {
        logger.error(`Invalid rating: ${rating}`);
        return res
            .status(400)
            .send(`'rating' must be a number between 1 and 5`);
      }

      // get an id
      const id = uuid();
  
      const bookmark = {
      id,
      title,
      url,
      description,
      rating
      };
  
      bookmarks.push(bookmark);
  
      logger.info(`Bookmark with id ${id} created`);
  
      res
      .status(201)
      .location(`http://localhost:8000/bookmarks/${id}`)
      .json(bookmark);
  
      // res.send('Bookmark Added!')
  })
  

bookmarkRouter
  .route('/bookmark/:id')
  .get((req, res) => {
    // Get a bookmark
    const { id } = req.params;
    const bookmark = bookmarks.find(b => b.id == id);
  
    // make sure we found a card
    if (!bookmark) {
      logger.error(`Bookmark with id ${id} not found.`);
      return res
        .status(404)
        .send('Bookmark Not Found');
    }
    res.json(bookmark);
    })
  .delete((req, res) => {
    // move implementation logic into here
    // Delete a Bookmark
    const { id } = req.params;
  
    const markIndex = bookmarks.findIndex(b => b.id == id);
  
    if (markIndex === -1) {
      logger.error(`Bookmark with id ${id} not found.`);
      return res
        .status(404)
        .send('Not Found');
    }
  
    bookmarks.splice(markIndex, 1);
  
    logger.info(`Bookmark with id ${id} deleted.`);
    res
      .status(204)
      .end();
  });

module.exports = bookmarkRouter