const PAGE_CONTENT = {
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
            href: 'https://www.twitter.com/'
          }
        ]
      }
    }
  }

  const SQL_CONNECTION_STRING = {
    host: 'localhost', 
    user: 'fashion',
    password: '123123', 
    database: 'fashion'
  }

module.exports = {
PAGE_CONTENT,
SQL_CONNECTION_STRING
}
