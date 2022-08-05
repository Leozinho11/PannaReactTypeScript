import React from 'react'
import BodyView from './body-view'

export type BodyProps = {
  children: React.ReactNode
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <BodyView>{children}</BodyView>
}

export default Body
