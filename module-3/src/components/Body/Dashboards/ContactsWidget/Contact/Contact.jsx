import React from "react";
import style from './Contact.module.scss'
import SVG from 'react-inlinesvg'
import envelope from './../../../../../assets/icons/envelope.svg'
import chat from './../../../../../assets/icons/chat.svg'

const Contact = (id, avatar, name, workplace) => {
    return (
        <div className={style.contactItems}>
          <div className={style.contactItems}>
            <div className={style.contactAvatar}>
              <img src={avatar}></img>
            </div>
            <div>
              <div className={style.contactUsername}>{name}</div>
              <div className={style.contactWorkplace}>{workplace}</div>
            </div>
            <div className={style.circle}></div>
          </div>
          <div className={style.contactIcons}>
            <button>
              <SVG src={chat} alt="chat" />
            </button>
            <button>
              <SVG src={envelope} alt="notification" />
            </button>
          </div>  
        </div>
    )
}

export default Contact