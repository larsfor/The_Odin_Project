import React from 'react'

export default function LeftMessage({ message }) {
  return (
    <div className="leftMessage">
        <div className='leftSender'>
          { message.username }
        </div>
        { message.body }
    </div>
  )
}
