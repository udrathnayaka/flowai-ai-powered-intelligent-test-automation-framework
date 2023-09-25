

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
    prompt: 'Generate a cypress script to convert 1000 LKR to AUD',
    temperature: 1,
    max_tokens: 256,
    top_p: 0,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) => {
    fs.writeFile(
      'cypress/e2e/dynamic-inputs-results.cy.js',
      substringMethod(response.data.choices[0].text, '\n'),
      function (err) {
        if (err) throw err;
        console.log('dynamic-inputs-results.cy.js file is created successfully.');
      }
    );
  })
  .catch((error) => {
    console.error(error);
  });

