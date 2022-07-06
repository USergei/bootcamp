import React from "react"
import style from "./Contact.module.scss"
import SVG from "react-inlinesvg"
import envelope from "../../../../../assets/icons/envelope.svg"
import chat from "../../../../../assets/icons/chat.svg"

const Contact = ({id, avatar, name, workplace}) => {
  return (
      <div className={style.items}>
        <div className={style.userItems}>
          <div className={style.avatar}>
            <img src={avatar} alt="avatar" ></img>
          </div>
          <div className={style.userInfo}>
            <div className={style.username}>{name}</div>
            <div className={style.workplace}>{workplace}</div>
          </div>
          <div className={style.circleOnline}></div>
        </div>
        <div className={style.icons}>
          <button>
            <SVG src={chat} alt="chat icon" />
          </button>
          <button>
            <SVG src={envelope} alt="notification icon" />
          </button>
        </div>  
      </div>
  )
}

export default Contact