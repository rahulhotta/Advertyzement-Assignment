import React from 'react'
import '../Styles/NavBar.css'
function NavBar({getUsers}) {
   function clickHandler()
   {
    getUsers();
   }
  return (
    <div className="nav-bar">
        <h2 className='nav-bar__logo'>InstaBook</h2>
        <button onClick={clickHandler} className='nav-bar__btn'>Get users</button>
    </div>
  )
}

export default NavBar