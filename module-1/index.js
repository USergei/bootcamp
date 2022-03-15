// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'fashion',
  password: '123123',
  database: 'fashion'
});

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
 
 // Creates a client
// const translate = new Translate(
//   {
//   projectId: 'leafy-beach-336216', //eg my-project-0o0o0o0o'
//   keyFilename: './leafy-beach-336216-531f228315d4.json' //eg my-project-0fwewexyz.json
//   }
// );

// async function translateText(text, lang) {
//   let [translations] = await translate.translate(text, lang);
//   translations = Array.isArray(translations) ? translations : [translations];
//   return translations
// }

// async function listLanguagesWithTarget() {
//   const [languages] = await translate.getLanguages('en');
//   return languages
// }

// Set the region 
AWS.config.loadFromPath('./config.json')

const pageContent = {
  header: {
    dropdown: ['Select language', '♥'],
    social: [
      {
        name: 'facebook',
        href: 'https://www.facebook.com/'
      },
      {
        name: 'twitter',
        href: 'https://www.twitter.com/'
      },
      {
        name: 'instagram',
        href: 'https://www.instagram.com/'
      }
    ],
    menu: [
    {name: 'NEW COLLECTION', href: '#', id: 'new_col'},
    {name: 'SHOP', href: '#', id: 'shop'},
    {name: 'ABOUT US', href: '#', id: 'about'},
    {name: 'CONTACT', href: '#', id: 'contact'}
    ]
  },
  collectionSection: {
    collectionLink: {
      name: 'See new collection',
      href: '#'
    },
    collectionSubtext: {
      date: '21/2021', 
      text: 'Collection'
    },
    collectionText: ['New vapor', 'Collection']
  },
  about: {
    title: 'About us',  
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu',
    link: {
      name: 'Read more',
      href: '#'
    }
  },
  description: {
    title: ['Sustainable', 'Fashion'],
    text: ['We design', 'With organic and', 'Environmentally', 'Friendly', 'Materials'],
    link: {
      name: 'Read more',
      href: '#'
    }
  },
  presentation: {
    title: 'Fall / Winter Fashion Week',
    text: ['See the full', 'Show online'],
    link: {
      name: 'Here',
      href: '#'
    }
  },
  newsletter: {
    title: 'Newsletter',
    text: ['Subscribe to our', 'newsletter to keep up to', 'date with our news'],
    emailPlaceholder: 'E-mail',
    button: 'Subscribe'
  },
  stores: {
    title: 'Visit our stores',
    cities: [
      {
        name: 'Rome',
        address: ['Name St number 1', '123456, City', 'Country'],
        link: {
          name: '+00 123 456 789',
          href: 'tel:+00123456789'
        }
      },
      {
        name: 'Milan',
        address: ['Name St number 2', '123456, City', 'Country'],
        link: {
          name: '+00 123 456 789',
          href: 'tel:+00123456789'
        }
      },
      {
        name: 'Paris',
        address: ['Name St number 3', '123456, City', 'Country'],
        link: {
          name: '+00 123 456 789',
          href: 'tel:+00123456789'
        }
      },
      {
        name: 'London',
        address: ['Name St number 4', '123456, City', 'Country'],
        link: {
          name: '+00 123 456 789',
          href: 'tel:+00123456789'
        }
      }
    ]
  },
  contact: {
    title: 'Contact',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    formPlaceHolders: ['Name', 'E-mail', 'Message'],
    button: 'Contact us'
  },
  footer: {
    top: {
      nav: [
        {
          name: 'New collection',
          href: '#',
          id: 'footer_new_col',
          data: 'close'
        },
        {
          name: 'Shop',
          href: '#',
          id: 'footer_shop'
        },
        {
          name: 'About us',
          href: '#',
          id: 'footer_about'
        },
        {
          name: 'Contact',
          href: '#',
          id: 'footer_contact'
        }
      ],
      info: [
        {
          name: 'Faqs',
          href: '#'
        },
        {
          name: 'Privacy Policy',
          href: '#'
        }
      ],
      address: ['+00 123 456 789', 'Name street', '123456 city name', 'Country']
    },
    bottom: {
      copyright: 'Copyright | your name',
      social: [
        {
          name: 'instagram',
          href: 'https://www.instagram.com/'
        },
        {
          name: 'facebook',
          href: 'https://www.facebook.com/'
        },
        {
          name: 'twitter',
          href: 'https://www.twitter.com/#'
        }
      ]
    }
  }
}

 //index route
app.get('/', async (req, res) =>{
  // const langList = await listLanguagesWithTarget()
  res.render('index.ejs', {/*langList*/ pageContent})
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
  // res.status(200).send(req.body);
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


app.post('/sendEmail', async (req, res) =>{
  // Create sendEmail params 
  var params = {
    Destination: { /* required */
      CcAddresses: [
        // 'fructusmortus@gmail.com',
        /* more items */
      ],
      ToAddresses: [
        'fructusmortus@gmail.com',
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
        Charset: "UTF-8",
        Data: "HTML_FORMAT_BODY"
        },
        Text: {
        Charset: "UTF-8",
        Data: "TEXT_FORMAT_BODY"
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email'
      }
      },
    Source: 'fructusmortus@gmail.com', /* required */
    ReplyToAddresses: [
      'fructusmortus@gmail.com',
      /* more items */
    ],
  };
  // Create the promise and SES service object
  const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
    function(data) {
      console.log(data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });
  res.status(200)
  // .send(result);
});

// Port variable
const PORT = process.env.PORT || 3001;

// listen for connections
app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}`)
})
