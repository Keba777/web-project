import React from 'react'

const Card = ({title, body}) => {
  return (
    <div>
        <h3 className="font-bold text-2xl">{title}</h3>
          <p className="pt-4">
            {body}
          </p>
    </div>
  )
}

export default Card