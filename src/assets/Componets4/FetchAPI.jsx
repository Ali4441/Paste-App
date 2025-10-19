import React from 'react'

const FetchAPI = ({ Data }) => {
  return (
    <div>
      <h1>Users with Geo Location</h1>
      <ul>
        {Data.map(user => (
          <li key={user.id}>
            Name: {user.name}
            <br />
            Email:{user.email}
            <br />
            userName: {user.username}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchAPI
