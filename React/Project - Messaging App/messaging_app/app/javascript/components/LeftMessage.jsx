import React from 'react'

export default function LeftMessage({ message }) {
  return (
    <div className="leftMessage">
        <div className='leftSender'>
          { message.sender_id }
        </div>
        { message.body }
    </div>
  )
}
