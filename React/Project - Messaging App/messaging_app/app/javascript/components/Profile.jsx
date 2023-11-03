import React from 'react'
import { getCU } from './API';
import { useLoaderData } from 'react-router-dom'

export async function loader({ params }) {
  const user = await getCU(params.userId);
  return { user };
}

export default function Profile() {
  const { user } = useLoaderData(null);
  
  return (
    <div>
      { !user ? (
        <div>Loading...</div>
      ) : (
        <>
        <h1>
          Username: { user.name }
        </h1>
        <h1>
          Email: { user.email }
        </h1>
        </>
      ) }
    </div>
  )
}
