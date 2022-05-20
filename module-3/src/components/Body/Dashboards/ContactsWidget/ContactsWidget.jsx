import React from "react";
import style from './ContactsWidget.module.scss'
import SVG from 'react-inlinesvg'
import envelope from './../../../../assets/icons/envelope.svg'
import chat from './../../../../assets/icons/chat.svg'

const ContactsWidget = () => {
  return (
    <div className={style.contactsWidget}>
      <div className={style.contactsWidgetHeader}>
        <h6>Contacts</h6>
        <div>...</div>
      </div>
      <div className={style.contactsWidgetContent}>
        <div className={style.contactsWidgetItems}>
          <div className={style.contactsWidgetUserItems}>
            <div className={style.contactsWidgetAvatar}>
              <img></img>
            </div>
            <div>
              <div className={style.contactsWidgetUsername}>John Cena</div><span></span>
              <div className={style.contactsWidgetWorkplace}>Microsft</div>
            </div>
          </div>
          <div className={style.contactsWidgetIcons}>
            <SVG src={chat} alt="chat" />
            <SVG src={envelope} alt="notification" />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ContactsWidget