import React from "react"
import style from "./Review.module.scss"
import SVG from"react-inlinesvg"
import fullStar from "../../../../../assets/icons/fullStar.svg"
import emptyStar from "../../../../../assets/icons/emptyStar.svg"
import halfStar from "../../../../../assets/icons/halfStar.svg"

const Review = ({id, rating, dateTime, text, author}) => {

  const getRating = rating => {
      const indexes = []
      for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            indexes.push(<SVG key={i} src={fullStar} alt="rating-star" />)
          }
          if (i - rating === 0.5) {
            indexes.push(<SVG key={i} src={halfStar} alt="rating-star" />)
          } else if (i > rating) {
            indexes.push(<SVG key={i} src={emptyStar} alt="rating-star" />)
          }
      }

      return indexes
  }

  return (
    <div className={style.items}>
      <div className={style.status}>
        <div className={style.raiting}>
          {getRating(rating)}
        </div>
        <div className={style.time}>
            {dateTime}
        </div>
      </div>
      <div className={style.text}>
        {text}
      </div>
      <div className={style.name}>
        - {author}
      </div>
  </div>
  )
}

export default Review
