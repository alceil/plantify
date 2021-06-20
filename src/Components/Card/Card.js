import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="card">
        <div className="card_body">
          <img className="card_image" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5935cc53113c950004000237.jpg?1496697934"/>
          <h2 className="class_title">Sunflower</h2>
          <p className="">card_description</p>
          <button className="card_button">
            View details
          </button>
      </div>
      </div>
    )
}

export default Card
