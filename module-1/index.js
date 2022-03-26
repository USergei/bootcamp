const {
  CONTACT_FORM_REPLY_EMAIL, 
  SQL_CONNECTION_STRING,
  PAGE_CONTENT
} = require('./dist/assets/js/constants.js')

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const mysql = require('mysql')

const connection = mysql.createConnection(SQL_CONNECTION_STRING);

//TODO connection.end();

// bring in express
const express = require('express');

// brinrg in body parser
const bodyParser = require('body-parser');

// ejs template engine
const ejs = require('ejs');

// translate api
// const translate = require('@vitalets/google-translate-api');

//init our application 
const app = express()
// app.use(express.json());
app.use(bodyParser.json())

//setup template engine
app.set('view-engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/dist'));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:true}));

 // Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;
 
//  Creates a client
const translate = new Translate(
  {
  projectId: 'leafy-beach-336216', //eg my-project-0o0o0o0o'
  keyFilename: './leafy-beach-336216-531f228315d4.json' //eg my-project-0fwewexyz.json
  }
);

async function translateText(text, lang) {
  let [translations] = await translate.translate(text, lang);
  translations = Array.isArray(translations) ? translations : [translations];
  return translations
}

async function listLanguagesWithTarget() {
  try {
    const [languages] = await translate.getLanguages('en')
  } catch (e) {
    throw new Error(e)
    return []
  }

  return languages
 }

// Set the region 
AWS.config.loadFromPath('./config.json')

 //index route
app.get('/', async (req, res) =>{
  const langList = await listLanguagesWithTarget()
  res.render('index.ejs',  {langList, PAGE_CONTENT})
});

app.get('/getContactRequest/:key?', async (req, res) =>{
  const key = req.params.key
  let queryString = "SELECT * FROM contacts"
  if (key) {
    queryString = `SELECT * FROM contacts WHERE id = ${key}`
  }
  connection.query(queryString, function (err, result, fields) {
    if (err) {
        res.sendStatus(500)
      return
    }
    data = JSON.parse(JSON.stringify(result))
    res.render('contacts-admin.ejs', data)
  });  
});

app.post('/translate', async (req, res) =>{
  const text = req.body.text
  const lang = req.body.lang
  const result = await translateText(text, lang);
  res.status(200).send(result);
});

app.post('/writeContactFormData', async (req, res) =>{
  const { name, email, message } = req.body
  let queryString = 'INSERT INTO contacts(name,email,message) VALUES(?,?,?)';
  
  connection.query(queryString, [name,email,message], (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send(results);
  });
});

app.delete('/deleteContactFormData/:id', async (req, res) =>{
  const id = req.params.id
  let queryString = `DELETE FROM contacts WHERE id=${id}`;
  
  connection.query(queryString, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.status(200).send(results);
  });
});

app.post('/sendEmail', async (req, res) =>{

  const replyEmail = CONTACT_FORM_REPLY_EMAIL
  const {email, subject, text} = req.body
 
  var params = {
    Destination: { 
      CcAddresses: [
      ],
      ToAddresses: [
        email  
      ]
    },
    Message: { 
      Body: { 
        Html: {
          Charset: 'UTF-8',
          Data: text
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'TEXT_FORMAT_BODY'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: replyEmail, 
    ReplyToAddresses: [
      replyEmail,
    ],
  };
  
  const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  sendPromise.then(
    function(data) {
      res.status(200).send(data);
    }).catch(
      function(err) {
        res.status(500).send(err);
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}`)
})
