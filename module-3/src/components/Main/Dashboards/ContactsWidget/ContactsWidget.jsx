import React from "react";
import style from './ContactsWidget.module.scss'
import SVG from 'react-inlinesvg'
import search from './../../../../assets/icons/search.svg'
import avatar1 from './../../../../assets/images/user-avatar1.jpg'
import avatar2 from './../../../../assets/images/user-avatar2.jpg'
import avatar3 from './../../../../assets/images/user-avatar3.jpg'
import avatar4 from './../../../../assets/images/user-avatar4.jpg'
import Contact from './Contact'
import ThreeDotsButtonDropdown from "../../../ThreeDotsButtonDropdown"

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
    name: 'Pedro Munoz',
    workplace: 'Google',
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Benazir Ibraimova',
    workplace: 'Umbrella',
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Jane Doe',
    workplace: 'Dastan',
  }
]

const ContactsWidget = () => {
  return (
    <div className={style.contactsWidget}>
      <div className={style.contactsWidgetHeader}>
        <h6>Contacts</h6>
        <ThreeDotsButtonDropdown/>
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
      <form className={style.contactsWidgetBottom}>
        <input type="search" name="search" placeholder="Search contact..."></input>
        <button>
          <SVG src={search} alt="search" />
        </button>
      </form>
    </div>
  )
}

export default ContactsWidget
