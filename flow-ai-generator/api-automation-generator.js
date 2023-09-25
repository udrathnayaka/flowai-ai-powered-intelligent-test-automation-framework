

//Import dotenv
require('dotenv').config();
const data = require('../chat-gpt.json');

//Authenticate — API Key
const { Configuration, OpenAIApi } = require('openai');

//Import file creation package
const fs = require('fs');

//Configuration
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

//Initiate ChatGPT
const openai = new OpenAIApi(config);

function substringMethod(parentString, substring) {
  return parentString.substring(
    parentString.indexOf(substring) + substring.length
  );
}

//Call ChatGPT
openai
  .createCompletion({
    model: 'text-davinci-003',
    prompt: 'Generate Cypress API code for PATCH request for link https://reqres.in/api/users/2 and verify status code 200 inside a it block',
    //Generate Cypress API code for GET request for link https://reqres.in/api/users?page=2 and verify status code 200 inside a it block
    //Generate Cypress API code for POST request for link https://reqres.in/api/users and verify status code 201 inside a it block
    //Generate Cypress API code for PUT request for link https://reqres.in/api/users/2 and verify status code 200 inside a it block
    //Generate Cypress API code for PATCH request for link https://reqres.in/api/users/2 and verify status code 200 inside a it block
    //Generate Cypress API code for DELETE request for link https://reqres.in/api/users/2 and verify status code 204 inside a it block
    temperature: 1,
    max_tokens: 256,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) => {
    fs.writeFile(
      'cypress/e2e/api-automation-results.cy.js',
      substringMethod(response.data.choices[0].text, '\n'),
      function (err) {
        if (err) throw err;
        console.log('api-automation-results.cy.js file is created successfully.');
      }
    );
  })
  .catch((error) => {
    console.error(error);
  });
