import React from 'react'
import User from './User';
import "../Styles/UserList.css"
function UserList({data,loading,error}) {
  return (
    <div>
      {!data.length && <p className='msg'>Dont have any users... Please click the GET USERS button.</p>}
      {loading && <div className='msg'>A moment please...</div>}
      {error && (
        <div className='error-msg'>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className='user-list'>
        {data && 
            data.map((user) => {
                return(
                <User 
                    key={user.id}
                    email={user.email}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    avatar={user.avatar}
                />
             ); })
            // console.log(data)
        }
      </div>
    </div>
  );
}

export default UserList