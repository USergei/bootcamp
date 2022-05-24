import React from "react";
import style from './ReviewsWidget.module.scss'
import Review from "./Review"

const reviewsWidgetContent = [
  {
    id: 1,
    rating: 4.5,
    dateTime: '1h 13min ago',
    text: 'Lorem ipsum dolor sit amet consectetur',
    author: '- Sujit Day '
  },
  {
    id: 2,
    rating: 3,
    dateTime: '5dec 2022',
    text: 'Lorem ipsum dolor sit amet consectetur',
    author: '- Sujit Day '
  },
  {
    id: 3,
    rating: 1,
    dateTime: '30min ago',
    text: 'Lorem ipsum dolor sit amet consectetur',
    author: '- Sujit Day '
  },
]

const ReviewsWidget = () => {
  return (
    <div className={style.reviewsWidget}>
      <div className={style.reviewsWidgetHeader}>
        <h6>Reviews</h6>
        <div>...</div>
      </div>
      {reviewsWidgetContent.map((item, i) =>
        <Review
          key={i}
          id={item.id}
          rating={item.rating}
          dateTime={item.dateTime}
          text={item.text}
          author={item.author}
        />
      )}
    </div>
  )
}

export default ReviewsWidget