const express = require('express');
const server = express();
const { v4: uuidv4 } = require('uuid');

const db = require('./db');

server.get('/', async (req, res) => {

  const id = uuidv4();
  const timestamp = new Date();
  const createQuery = `
    INSERT INTO Items
    (
      id,
      name,
      date_created,
      date_updated
    ) VALUES (
      "${id}",
      "${id}",
      "${timestamp}",
      "${timestamp}"
    );
  `
  try {
    const success = await db.exec(createQuery);
  } catch (error) {
    console.log(error)
    res.json({ error: error })
    return
  }

  try {
    const rows = await db.all(`SELECT * FROM Items`);
    res.json(rows);
  } catch (error) {
    console.log(error)
    res.json({ error: error })
  }
  
});

module.exports = server;