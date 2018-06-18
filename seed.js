const db = require('./models');

db.sync()
  .then(() => {
    console.log('db sync successful');
    db.close();
  })
  .catch(err => {
    console.log('Error:', err);
    db.close();
  });
