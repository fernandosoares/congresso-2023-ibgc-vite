import { ReactNode } from 'react'

export interface IAppContext {
  imageSrcPrefix: string | boolean
}

export interface IAppContextProvider {
  children: ReactNode
}
