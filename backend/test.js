const { json } = require('express');
const fs = require('fs');

const {v4: uuidv4} = require('uuid');
// Specify the file path
const filePath = './commune.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  let newUpdatedList = jsonData.map((wilaya) => {
    return {
      _id: uuidv4(),
      ...wilaya
    };
  });

  // Write to the JSON file
fs.writeFile('./wilaya.json', JSON.stringify(newUpdatedList), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
      return;
    }
  
    console.log('JSON file written successfully');
  });
  // Now you can use jsonData as a JavaScript object
  console.log(jsonData);
});
