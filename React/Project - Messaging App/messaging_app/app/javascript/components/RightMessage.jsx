import React from 'react'

export default function RightMessage({ message }) {
  return (
    <div className='rightMessage'>
        <div className='rightSender'>
          { message.sender_id }
        </div>
        { message.body }
    </div>
  )
}
