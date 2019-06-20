const express = require('express')
const uuid = require('uuid/v4')
const logger = require('../logger')

const bookmarkRouter = express.Router()
const bodyParser = express.json()

app.use(express.json())

const bookmarks = [{
  id: 1,
  title: 'First Bookmark!',
  content: 'This is the first link'
}];


bookmarkRouter
  .route('/bookmarks')
  .get((req, res) => {
    // make sure we found a bookmark
    if (!bookmark) {
      logger.error(`Bookmark with id ${id} not found.`);
      return res
        .status(404)
        .send('Bookmark Not Found');
    }
    res.json(bookmarks);
    })
    .post(bodyParser, (req, res) => {
        // Add a new Bookmark
        const { title, content } = req.body;
    
        if (!title) {
        logger.error(`Title is required`);
        return res
            .status(400)
            .send('Invalid data');
        }
        
        if (!content) {
        logger.error(`Content is required`);
        return res
            .status(400)
            .send('Invalid data');
        }
    
        // get an id
        const id = uuid();
    
        const bookmark = {
        id,
        title,
        content
        };
    
        bookmarks.push(bookmark);
    
        logger.info(`Card with id ${id} created`);
    
        res
        .status(201)
        .location(`http://localhost:8000/card/${id}`)
        .json(card);
    
        // res.send('Bookmark Added!')
    })
  

bookmarkRouter
  .route('/bookmarks/:id')
  .get((req, res) => {
    // Get a bookmark
    const { id } = req.params;
    const bookmark = bookmarks.find(b => b.id == id);
  
    // make sure we found a bookmark
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
  
    const markIndex = bookmarks.findIndex(li => li.id == id);
  
    if (markIndex === -1) {
      logger.error(`Bookmark with id ${id} not found.`);
      return res
        .status(404)
        .send('Not Found');
    }
  
    lists.splice(markIndex, 1);
  
    logger.info(`Bookmark with id ${id} deleted.`);
    res
      .status(204)
      .end();
  });

module.exports = bookmarkRouter