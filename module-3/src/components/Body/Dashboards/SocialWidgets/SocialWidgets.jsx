import React from "react";
import style from './SocialWidgets.module.scss'
import ContactsWidget from './ContactsWidget'
import ReviewsWidget from "./ReviewsWidget"

const SocialWidgets = () => {
  return (
    <div className={style.socialWidgets}>
      <ContactsWidget/>
      <ReviewsWidget/>
    </div>
  )
}

export default SocialWidgets
