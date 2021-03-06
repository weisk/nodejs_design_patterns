/* eslint-disable no-console */
// import FindRegex from './chapter3/FindRegex.js';
import createTicker from './chapter3/Ticker.js';

console.log('Starting!');
// const findRegex = new FindRegex('if');

// findRegex
//   .addFile('./src/chapter3/sample1.txt')
//   .addFile('./src/chapter3/sample2.txt')
//   .find()
//   .on('start', (files) => console.log(`Looking through files: ${files}`))
//   .on('fileread', (file) => console.log(`File read: ${file}`))
//   .on('match', (file, match) => console.log(`Found '${match}' at ${file}`))
//   .on('error', (err) => console.error(err));

createTicker(201, (err, ticks) => {
  if (err) {
    console.error(`In callback: ${err}`);
  }
  console.log(`Ticked a total amount of ${ticks} times`);
})
  .on('tick', () => console.log('Ticked!'))
  .on('error', (error) => console.error(error));

console.log('Done!');
