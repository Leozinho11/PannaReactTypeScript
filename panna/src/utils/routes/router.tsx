import HomePage from 'pages/home/home'
import Login from 'pages/login/login-page'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router
