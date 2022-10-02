import HomePage from 'pages/home/home'
import Login from 'pages/login/login-page'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default Router
