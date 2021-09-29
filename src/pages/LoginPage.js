import React from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../auth/useAuth'

const LoginPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const previousURLObject = location.state?.from;

  const handleLogin = () => {
    auth.login();
    history.push(previousURLObject || "/dashboard")
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
