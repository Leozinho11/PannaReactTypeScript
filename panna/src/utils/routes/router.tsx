import HomePage from 'pages/home/home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default Router
