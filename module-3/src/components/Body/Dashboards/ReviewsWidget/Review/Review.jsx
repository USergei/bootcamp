import React from "react";
import style from './Review.module.scss'
import SVG from 'react-inlinesvg' 
import fullStar from './../../../../../assets/icons/fullStar.svg' 
import emptyStar from './../../../../../assets/icons/emptyStar.svg' 
import halfStar from './../../../../../assets/icons/halfStar.svg' 

const Review = ({id, rating, dateTime, text, author}) => {

    const getRating = rating => {
        let indexes = []
        for (let i = 1; i < 6; i++) {
            if (rating >= i) {
              indexes.push(<SVG src={fullStar} alt="likes" />)
            }
            // if (rating < i && (rating - i) % 1 === 0) {
            //   indexes.push(<SVG src={emptyStar} alt="likes" />) 
            // }
            if (rating - i === 0.5) {
              indexes.push(<SVG src={halfStar} alt="likes" />)
            } else if (rating < i) {
              indexes.push(<SVG src={emptyStar} alt="likes" />) 
            }
            
        }
        
        return indexes
    }

    return (
        <div className={style.reviewItems}>
        <div className={style.reviewStatus}>
          <div className={style.reviewRaiting}>
            {getRating(rating)}
          </div>
          <div className={style.reviewTime}>
              {dateTime}
          </div>
        </div>
        <div className={style.reviewText}>
          {text}
        </div>
        <div className={style.reviewName}>
          {author}    
        </div>
      </div>
    )
}

export default Review