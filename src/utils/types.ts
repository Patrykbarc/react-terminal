import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ChatItem = {
  id: number | string
  content: string | ReactNode | JSX.Element
}

export type SetStateProps<T> = {
  setInput: Dispatch<SetStateAction<T>>
}

export type OverflowingChild = {
  isOverflowing: boolean
  id: string
}
