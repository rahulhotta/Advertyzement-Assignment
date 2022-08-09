import React from 'react'
import '../Styles/User.css'
function User({email,first_name,last_name,avatar}) {
  return (
    <div className="user">
      <img className="user__image" src={avatar} alt={first_name} />
      <div className="user__info">
        <h2 className="user__first-name">
          First Name: <span>{first_name}</span>
        </h2>
        <h2 className="user__last-name">
          Last Name: <span>{last_name}</span>
        </h2>
      <h2 className="user__email">
        Email:<br/><span>{email}</span>{" "}
      </h2>
      </div>
    </div>
  );
}

export default User