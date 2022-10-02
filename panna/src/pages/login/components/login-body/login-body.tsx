import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginBodyView from './login-body-view'

const LoginBody: React.FC = () => {
  const navigate = useNavigate()
  // usar setIsLoading qnd api de Login estiver Pronta!!!
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = useCallback(() => navigate('/home'), [navigate])

  return <LoginBodyView loginIsLoading={isLoading} handleLogin={handleLogin} />
}

export default LoginBody
