import React from 'react'

export default function RightMessage({ message }) {
  return (
    <div className='rightMessage'>
        <div className='rightSender'>
          { message.username }
        </div>
        { message.body }
    </div>
  )
}
