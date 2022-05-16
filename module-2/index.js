require('dotenv').config()
const {CONTACT_FORM_REPLY_EMAIL, DB_HOST, DB_USER, DB_PWD, DB} = process.env
const {mailTemplate} = require('./mail-template.js')
const {PAGE_CONTENT} = require('./content.js')
const routes = require('./routes/routes.js')

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PWD,
  database: DB
});

// bring in express
const express = require('express');

// ejs template engine
const ejs = require('ejs');

//init our application 
const app = express()
app.use(express.json());

//setup template engine
app.set('view-engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/dist'));

//body parser middleware
app.use(express.urlencoded({extended:true}));

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;
 
//  Creates a client
const translate = new Translate(
  {
  projectId: 'alert-flames-347314', //eg my-project-0o0o0o0o'
  keyFilename: './alert-flames-347314-d118c34616b9.json' //eg my-project-0fwewexyz.json
  }
);

async function translateText(text, lang) {
  try {
    let [translations] = await translate.translate(text, lang);
    translations = Array.isArray(translations) ? translations : [translations];
    return translations
  }
  catch (e) {
    console.log("Error happened", new Error(e))
    return {message: e}
  }
}

async function listLanguagesWithTarget() {
  try {
    const [languages] = await translate.getLanguages('en')
    return languages
  } catch (e) {
    console.log(new Error(e))
    return []
  }
}

// Set the region 
AWS.config.loadFromPath('./config.json')

 //index route
app.use(routes)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}`)
})
