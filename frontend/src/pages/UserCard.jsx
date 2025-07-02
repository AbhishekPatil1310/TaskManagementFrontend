import React from 'react';

const UserCard = ({ user }) => {
    return(
        <div style={{
      border: '1px solid #ccc',
      padding: '12px',
      margin: '8px',
      borderRadius: '8px',
      width: '250px'
    }}>
    <div>
        {user.name}
        </div>     
        </div>
    )
}

export default UserCard;