import React from 'react'
import './Card.css'




const Card = ({name,url,click}) => {
    return (
        <div className="card">
        <div className="card_body">
          <img className="card_image" src={url}/>
          <h2 className="class_title">{name}</h2>
          {/* //<p className="">card_description</p> */}
          <button className="buttonStyle" onClick={click} className="card_button">
            View details
          </button>
      </div>
      </div>
    )
}

export default Card
