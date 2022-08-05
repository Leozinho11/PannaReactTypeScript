import React from 'react'
import ItemView from './item-view'

type ItemProps = {
  name: string
  path: string
}

const Item: React.FC<ItemProps> = ({ name, path }) => {
  return <ItemView name={name} path={path} />
}

export default Item
