const { db, Vegetable, Plot, Gardener } = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('db sync successful');
    db.close();
  })
  .catch(err => {
    console.log('Error:', err);
    db.close();
  });

// Vegetable.build({
//   name: 'carrot',
//   color: 'orange',
//   planted_on: new Date()
// })
//   .save()
//   .then(veg => {
//     console.log(veg.name + ' Added.');
//     db.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Vegetable.build({
//   name: 'corn',
//   color: 'yellow',
//   planted_on: new Date()
// })
//   .save()
//   .then(veg => {
//     console.log(veg.name + ' Added.');
//     db.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });
// Vegetable.build({
//   name: 'lettuce',
//   color: 'green',
//   planted_on: new Date()
// })
//   .save()
//   .then(veg => {
//     console.log(veg.name + ' Added.');
//     db.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Vegetable.bulkCreate([
//   {
//     name: 'carrot',
//     color: 'orange',
//     planted_on: new Date()
//   },
//   {
//     name: 'corn',
//     color: 'yellow',
//     planted_on: new Date()
//   },
//   {
//     name: 'lettuce',
//     color: 'green',
//     planted_on: new Date()
//   }
// ])
//   .then(() => {
//     db.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });
