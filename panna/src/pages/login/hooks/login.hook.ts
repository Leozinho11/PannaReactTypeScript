import { login } from 'pages/login/services/login.service'
import { useCallback } from 'react'

const useLoginHook = () => {
  return useCallback(async (username: string, password: string) => {
    const loginResponse = await login({ username, password })
    localStorage.setItem('token', loginResponse.access_token)
  }, [])
}

export { useLoginHook }
