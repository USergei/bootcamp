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
app.use(express.json());

//setup template engine
app.set('view-engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/dist'));

//body parser middleware
app.use(express.urlencoded({extended:true}));

 // Imports the Google Cloud Translation library
 const {TranslationServiceClient} = require('@google-cloud/translate');
 
 // Instantiates a client
 const translationClient = new TranslationServiceClient();
 
 // Imports the Google Cloud client library
 const {Translate} = require('@google-cloud/translate').v2;
 
 // Creates a client
 const translate = new Translate(
   {
    projectId: 'leafy-beach-336216', //eg my-project-0o0o0o0o'
    keyFilename: './leafy-beach-336216-531f228315d4.json' //eg my-project-0fwewexyz.json
   }
 );
 
 /**
  * TODO(developer): Uncomment the following lines before running the sample.
  */
 // const text = 'The text to translate, e.g. Hello, world!';
 // const target = 'The target language, e.g. ru';
 
 async function translateText(text, lang) {
   // Translates the text into the target language. "text" can be a string for
   // translating a single piece of text, or an array of strings for translating
   // multiple texts.
   let [translations] = await translate.translate(text, lang);
   translations = Array.isArray(translations) ? translations : [translations];
   console.log('Transaltions:', translations);
   return translations
   // translations.forEach((translation, i) => {
   //   console.log(`${text[i]} => (${target}) ${translation}`);
   // });
 }
 async function listLanguagesWithTarget() {
  // Lists available translation language with their names in a target language
  const [languages] = await translate.getLanguages(target);

  console.log('Languages:');
  languages.forEach(language => console.log(language));
}


 
 //index route
app.get('/', (req, res) =>{
    // res.render('index.ejs');
    res.render('index.html');
});

app.post('/translate', async (req, res) =>{
  const text = req.body.text
  const lang = req.body.lang
  const poheru = await listLanguagesWithTarget();
  console.log({poheru})
  console.log(req.body)
  const result = await translateText(text, lang);
  res.status(200).send(result);
});

// Port variable
const PORT = process.env.PORT || 3000;

// listen for connections
app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}`)
})
