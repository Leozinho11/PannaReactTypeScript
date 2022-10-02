import { ReactNode } from 'react'

interface IContent {
  value: string | ReactNode
  flex?: number
  justifyContent?: string
}

export type IContentTable = Array<IContent>
