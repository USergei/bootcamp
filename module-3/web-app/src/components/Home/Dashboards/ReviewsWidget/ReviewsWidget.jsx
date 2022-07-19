import React from "react"
import style from "./ReviewsWidget.module.scss"
import Review from "./Review"
import ThreeDotsButtonDropdown from "../../../ThreeDotsButtonDropdown"

const reviewsWidgetContent = [
  {
    id: 1,
    rating: 2.5,
    dateTime: '1h 13 min ago',
    text: 'Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM.',
    author: 'Sujit Day '
  },
  {
    id: 2,
    rating: 3,
    dateTime: '05 Dec 2022',
    text: 'React is a JavaScript-based UI development library',
    author: 'Sujit Day '
  },
  {
    id: 3,
    rating: 0.5,
    dateTime: '30 Minute ago',
    text: 'Quasar, an astronomical object of very high luminosity found in the centres of some galaxies and powered by gas spiraling at high velocity into an extremely large black hole. The brightest quasars can outshine all of the stars in the galaxies in which they reside, which makes them visible even at distances of billions of light-years. Quasars are among the most distant and luminous objects known.',
    author: 'Sujit Day '
  },
]

const ReviewsWidget = () => {
  return (
    <div className={style.widget}>
      <div className={style.widgetHeader}>
        <h6>Reviews</h6>
        <ThreeDotsButtonDropdown/>
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