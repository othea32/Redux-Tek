// import React from 'react'
import { login, logout } from '../features/user.jsx'
import { useDispatch } from 'react-redux'


function Login() {
 const dispatch = useDispatch()
  return (
    <div>
     <button
      onClick={() =>{
       dispatch(
        login({ email: 'othea@gmail.com', password: 'password123' })
       );
      }}
     >
      Login
     </button>
     <button
      onClick={() => {
       dispatch(logout());
      }}     
     >
      Logout
     </button>
    </div>
  );
}

export default Login;
