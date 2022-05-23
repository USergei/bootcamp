import React from "react";
import style from './ContactsWidget.module.scss'
import avatar1 from './../../../../assets/images/user-avatar1.jpg'
import avatar2 from './../../../../assets/images/user-avatar2.jpg'
import avatar3 from './../../../../assets/images/user-avatar3.jpg'
import avatar4 from './../../../../assets/images/user-avatar4.jpg'
import Contact from './Contact'

const contactsWidgetContent = [
  {
    id: 1,
    avatar: avatar1,
    name: 'John Cena',
    workplace: 'Microsoft',
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'John Cena',
    workplace: 'Google',
  },
  {
    id: 1,
    avatar: avatar3,
    name: 'John Cena',
    workplace: 'Umbrella',
  },
  {
    id: 1,
    avatar: avatar4,
    name: 'John Cena',
    workplace: 'Dastan',
  }
]

const ContactsWidget = () => {
  return (
    <div className={style.contactsWidget}>
      <div className={style.contactsWidgetHeader}>
        <h6>Contacts</h6>
        <div>...</div>
      </div>
      {contactsWidgetContent.map((item, i) =>
        <Contact
          key={i}
          id={item.id}
          avatar={item.avatar}
          name={item.name}
          workplace={item.workplace}
        />
      )}
    </div>
  )
}

export default ContactsWidget